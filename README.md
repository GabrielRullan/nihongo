# Nihongo & Chinese Flashcard Hub

Este repositorio contiene un ecosistema de aplicaciones web interactivas e imprimibles diseñado para facilitar el estudio de Kanji japonés, gramática japonesa y caracteres chinos. Las aplicaciones son totalmente responsivas, cuentan con micro-animaciones premium, motores de búsqueda en tiempo real y soporte audiovisual mediante Text-to-Speech (TTS).

## 🔗 Enlaces en Vivo (GitHub Pages)

*   **[Portal de Aplicaciones (Dashboard)](https://gabrielrullan.github.io/nihongo/index.html)**: Panel de control central para acceder a todas las barajas y generadores.
*   **[Tarjetas de Kanji Japonés N5](https://gabrielrullan.github.io/nihongo/cards/index.html)**: Baraja interactiva de 80 Kanjis con efecto de giro 3D e ilustraciones.
*   **[Tarjetas de Chino HSK 1](https://gabrielrullan.github.io/nihongo/cards-chinese/index.html)**: 150 caracteres con soporte de voz (TTS), búsqueda por pinyin/significado, categorías de palabras, radicales y trazos.
*   **[Tarjetas de Gramática Japonesa](https://gabrielrullan.github.io/nihongo/cards-grammar/index.html)**: Estructuras N5/N4 con desglose de patrones, ejemplos y pronunciación nativa (TTS).
*   **[Tarjetas de Pokémon en Chino](https://gabrielrullan.github.io/nihongo/cards-pokemon/index.html)**: 151 Pokémon con nombres en chino simplificado, pinyin y desglose de Hanzi.
*   **[Impresora de Kanjis Japoneses](https://gabrielrullan.github.io/nihongo/cards-printable-japanese/index.html)**: Diseñador de plantillas PDF A4 (duplex/folding) para las tarjetas físicas de Kanji.
*   **[Impresora de Chino HSK 1](https://gabrielrullan.github.io/nihongo/cards-printable-chinese/index.html)**: Diseñador de tarjetas físicas de chino con tamaño ajustable.
*   **[Impresora de Pokémon en Chino](https://gabrielrullan.github.io/nihongo/cards-printable-pokemon/index.html)**: Diseñador de tarjetas de Pokémon en chino en formato A4 para impresión física.

---

## 📁 Estructura del Proyecto

El repositorio ha sido reorganizado de manera modular para separar los datos crudos, la automatización y las interfaces web:

```text
nihongo/
├── data/                            # Bases de datos fuente y referencias en PDF
│   ├── kanjis-80.csv                # Datos fuente de Kanjis (lecturas, oraciones)
│   ├── summary.csv                  # Registro de ilustraciones de Illustkun
│   ├── chinese_summary.csv          # Registro de ilustraciones de Chino
│   ├── chinese_pending.csv          # Caracteres de Chino pendientes de imagen
│   └── (PDFs de referencia...)
│
├── scripts/                         # Pipeline de automatización en Python
│   ├── enrich_kanji_csv.py          # Enriquecimiento de Kanjis mediante IA
│   ├── illustkun_downloader.py      # Descargador automático desde illustkun.com
│   ├── kanji_downloader.py          # Script de automatización principal de Kanjis
│   ├── process_choices.py           # Copiado de imágenes seleccionadas en japonés
│   ├── sync_cards.py                # Generador de cards/data.js desde el CSV
│   ├── chinese_downloader.py        # Descarga de datos complementarios de chino
│   ├── process_chinese_images.py    # Procesador y copiador de imágenes en chino
│   └── generate_missing_images.py   # Genera imágenes ilustradas de chino mediante Imagen 3
│
├── cards/                           # App interactiva de Kanjis Japoneses N5
├── cards-chinese/                   # App interactiva de Chino HSK 1 (Base de datos compartida)
├── cards-grammar/                   # App interactiva de Gramática Japonesa N5/N4
├── cards-printable-japanese/        # Generador de PDF A4 para impresión de Kanjis Japoneses
├── cards-printable-chinese/         # Generador de PDF A4 para impresión de Chino HSK 1
│
├── images-chosen/                   # Carpeta de producción para ilustraciones en japonés
├── images-chosen-chinese/           # Carpeta de producción para ilustraciones en chino
├── index.html                       # Dashboard Portal de GitHub Pages
└── README.md
```

---

## ⚙️ Flujo de Trabajo y Automatización

Los scripts se ejecutan desde el directorio raíz y leen/escriben en `data/` y en las aplicaciones web:

### 1. Actualizar y Procesar Imágenes de Kanji Japonés

1.  **Buscar y descargar opciones de ilustración**:
    ```bash
    python scripts/kanji_downloader.py
    ```
    *(Busca en Illustkun, descarga las 3 mejores imágenes a la carpeta temporal y actualiza `data/summary.csv`)*.

2.  **Modificar la elección**:
    Abre `data/summary.csv`, revisa las columnas `Option 1/2/3` y ajusta el campo `Chosen` con el número (`1`, `2` o `3`) de la ilustración preferida.

3.  **Copiar las imágenes elegidas a producción**:
    ```bash
    python scripts/process_choices.py
    ```

4.  **Sincronizar y generar la base de datos JS**:
    ```bash
    python scripts/sync_cards.py
    ```
    *(Genera `cards/data.js`, el cual es consumido tanto por la app interactiva como por el generador de PDF imprimible)*.

### 2. Actualizar y Procesar Imágenes de Chino HSK 1

1.  **Copiar las imágenes elegidas desde las carpetas de origen**:
    ```bash
    python scripts/process_chinese_images.py
    ```

2.  **Generar ilustraciones faltantes mediante Imagen 3**:
    Si hay caracteres sin imagen asignada, puedes usar el generador automatizado (requiere API Key de Gemini):
    ```bash
    $env:GEMINI_API_KEY="tu-api-key"
    python scripts/generate_missing_images.py
    ```
    *(Este script detecta las tarjetas sin imagen en `cards-chinese/data.js`, las escribe en `data/chinese_pending.csv`, genera una ilustración limpia y estilo pastel con Imagen 3 y la enlaza en el archivo de base de datos)*.

---

## 🎨 Principios de Diseño

*   **Sin redundancia**: Las aplicaciones web imprimibles (`cards-printable-*`) consumen directamente la base de datos de sus contrapartes interactivas (`../cards/data.js` y `../cards-chinese/data.js`), asegurando que cualquier cambio se refleje en ambos formatos instantáneamente.
*   **Aparato Audiovisual**: Lógica de Text-To-Speech (TTS) nativa integrada mediante la API de Web Speech, ajustando las voces a su idioma correspondiente (`ja-JP` para japonés y `zh-CN` para chino de forma automática).
*   **Glassmorphism Premium**: Bordes luminiscentes sensibles al mouse, fondos oscuros sofisticados y animaciones suaves para que el estudio sea visualmente agradable.

---

## 🖨️ Sistema de Impresión y Generación de PDF

Las plantillas de impresión (`cards-printable-*`) incluyen un sistema robusto de exportación local:

*   **Botón "Guardar como PDF"**: Permite exportar los decks completos directamente desde el navegador usando `html2pdf.js`.
*   **Páginas Secuenciales**: El PDF se genera de forma secuencial página por página en lugar de renderizar todo el documento en un solo lienzo gigante. Esto evita los límites de altura de canvas del navegador (máx. 65,535px), permitiendo exportar barajas de más de 100 páginas (Chino y Pokémon) sin que se congele el navegador.
*   **Calibración de Desplazamiento (Offsets)**: Deslizadores en tiempo real que permiten ajustar los márgenes del anverso y reverso del papel por milímetros, logrando una alineación de impresión duplex perfecta sin importar la impresora.
*   **Compatibilidad Local (Protocolo `file://`)**:
    *   **¿Requiere un servidor local como Python?** **No**. Puedes simplemente hacer doble clic en los archivos HTML (`index.html`) de las carpetas de impresión y generar el PDF localmente.
    *   *Nota técnica*: Bajo el protocolo `file://`, las políticas de seguridad del navegador bloquean la serialización de imágenes locales en el lienzo (canvas tainting). El código detecta esto automáticamente y genera el PDF de forma exitosa ocultando las ilustraciones para evitar errores de seguridad. Si deseas generar los PDFs incluyendo las ilustraciones, simplemente arranca el servidor local con `python -m http.server` o hazlo desde GitHub Pages en línea.
