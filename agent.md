# Agent Instructions - Nihongo & Chinese Flashcard Hub

Este repositorio automatiza la creación de barajas interactivas e imprimibles de japonés y chino. Sigue las siguientes directrices si necesitas realizar cambios, depurar o expandir este codebase.

---

## 🛠️ Organización de Archivos y Dependencias

Al interactuar con el proyecto, asegúrate de respetar la jerarquía establecida para evitar archivos sueltos en el directorio raíz:

1.  **Bases de Datos (`data/`)**: 
    - Toda fuente de datos cruda (archivos `.csv` e informes intermedios como `chinese_pending.csv`) debe ubicarse en `data/`.
2.  **Scripts de Automatización (`scripts/`)**:
    - Cualquier código ejecutable en Python debe residir en `scripts/`.
    - Los scripts deben llamarse desde la raíz del proyecto (e.g. `python scripts/sync_cards.py`) y usar rutas relativas basadas en la raíz de ejecución (`data/summary.csv`, `cards-chinese/data.js`).
3.  **Bases de Datos Compartidas (`data.js`)**:
    - **Japonés**: La base de datos central es [cards/data.js](file:///c:/Users/gabri/Documents/antigravity/nihongo/cards/data.js). Es cargada por la app interactiva y por la app imprimible (`cards-printable-japanese/index.html` la carga mediante `../cards/data.js`).
    - **Chino**: La base de datos central es [cards-chinese/data.js](file:///c:/Users/gabri/Documents/antigravity/nihongo/cards-chinese/data.js). Es cargada por la app interactiva y por la app imprimible (`cards-printable-chinese/index.html` la carga mediante `../cards-chinese/data.js`).
    - **No duplicar** archivos `data.js` locales dentro de las carpetas de impresión.

---

## 🎨 Lógica Web e Interfaces

- **Estética de los Decks**:
  - Utilizar el diseño oscuro glassmorphic premium. Los bordes de las tarjetas deben reaccionar al movimiento del ratón con un degradado sutil (`--x` e `--y` en CSS).
  - El reverso de las tarjetas debe admitir giros en 3D (`perspective: 1200px` y `transform-style: preserve-3d`).
- **Soporte Audiovisual (TTS)**:
  - Las pronunciaciones de voz usan la API `window.speechSynthesis`.
  - Asegurar la inicialización correcta llamando a `synth.getVoices()` y filtrando por `ja-JP` para barajas japonesas o `zh-CN` para barajas chinas.
  - Implementar botones de reproducción independientes para caracteres/vocablos y oraciones de ejemplo.
- **Rutas de Imágenes**:
  - Las imágenes en `data.js` deben estar formateadas como rutas relativas desde las páginas HTML (e.g., `../images-chosen-chinese/我.png`), ya que las carpetas de las aplicaciones web están al mismo nivel que las carpetas de imágenes.
- **Optimización de Buscadores**:
  - Las barras de búsqueda deben filtrar en tiempo real por carácter principal, transcripción fonética (pinyin/romaji) o significado en español de forma insensible a mayúsculas.

---

## 🖨️ Estándares del Sistema de PDF e Impresión

Al realizar cambios en `saveAsPDF` o en las hojas de estilo de impresión, sigue estas directrices para evitar regresiones:

1.  **Límite de Altura de Canvas (html2canvas)**:
    - Nunca utilices la exportación directa en un solo lienzo (`html2pdf().from(element).save()`) para barajas completas. Si la baraja supera las ~20 páginas, el tamaño del lienzo de html2canvas superará el límite máximo del navegador (65,535px) y la generación fallará silenciosamente o colgará el navegador.
    - Utiliza siempre renderizado secuencial asíncrono página por página mediante un worker de html2pdf, agregando páginas dinámicamente:
      ```javascript
      let worker = html2pdf().set(opt).from(pages[0]).toPdf();
      for (let i = 1; i < pages.length; i++) {
          worker = worker.get('pdf').then(function (pdf) {
              pdf.addPage();
          }).from(pages[i]).toContainer().toCanvas().toPdf();
      }
      await worker.save();
      ```
2.  **Seguridad y CORS (`file://` vs `http://`)**:
    - Bajo `file://`, el navegador bloquea la exportación de imágenes locales debido a la taint/CORS boundary del canvas.
    - Utiliza el hook `onclone` en las opciones de `html2canvas` para detectar si el protocolo actual es `file:` e ignorar/ocultar las imágenes (`img.setAttribute('data-html2canvas-ignore', 'true')` e `img.style.display = 'none'`). Esto permite que el PDF se genere perfectamente a nivel local, dejando el espacio en blanco para que la exportación continúe.
3.  **Calibración en mm**:
    - Los calibradores duplex agregan márgenes horizontales y verticales variables en anversos y reversos. Las variables CSS `--front-offset-x`, `--front-offset-y`, etc., deben estar vinculadas a los deslizadores de Vue y mapearse a propiedades del elemento raíz (`document.documentElement.style.setProperty`).
4.  **Optimización de Rendimiento en Decks Grandes (Pokémon)**:
    - Para barajas grandes (como los 1025 Pokémon de las Gens 1-9), nunca preselecciones ni renderices todas las tarjetas de golpe en la vista previa del imprimible. Preselecciona únicamente la **Generación 1** (151 tarjetas) al cargar.
    - Filtra la lista de selección manual en la barra lateral para mostrar únicamente los Pokémon que pertenecen a las generaciones seleccionadas por el usuario, evitando sobrecargar el DOM de Chrome.
5.  **Código de Colores de Impresión**:
    - Las tarjetas imprimibles deben estar codificadas por color usando el tipo primario de cada Pokémon (mediante `getCardStyle`, `getHeaderStyle` y `getBadgeStyle` vinculados a sus tipos).
    - Para ahorrar tinta del usuario al imprimir físicamente, mantén el fondo de las tarjetas en color blanco e implementa la codificación por colores en el borde exterior (`.print-unit`) y en el banner de cabecera (`.card-header-print`) usando un tono pastel suave.
6.  **Depuración de Definiciones de Diccionario (Hanzi)**:
    - Las definiciones de caracteres en chino de las tarjetas educativas deben ser concisas e individuales.
    - Limita las definiciones extensas del diccionario CEDICT seleccionando únicamente la primera acepción principal.
    - Filtra y elimina todos los contadores del formato `CL:...` o aclaraciones gramaticales de clasificadores, así como cualquier carácter chino dentro de las definiciones.
    - Caracteres como "子" (zi) y "了" (le) deben simplificarse directamente al valor neutro `(suffix)` para evitar traducciones confusas o literales.
