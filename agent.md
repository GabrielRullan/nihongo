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
