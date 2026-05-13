# Sistema de Tarjetas de Kanji Automático (N5)

Este proyecto es una herramienta para generar tarjetas de estudio de Kanji interactivas (tipo Flashcards) de forma automatizada, utilizando datos lingüísticos, descarga de imágenes de Illustkun y una interfaz web moderna.

## 🔗 Enlaces en Vivo

*   **[Tarjetas de Kanji (Producción)](https://www.data-partner.xyz/nihongo/docs/)**: El set completo de 80 tarjetas dinámicas.
*   **[Ejemplo de Diseño](https://www.data-partner.xyz/nihongo/cards-example/)**: Una demostración estática del diseño original.

## 🚀 Flujo de Trabajo

El sistema está diseñado para ser modular y fácil de actualizar:

1.  **Datos de Origen (`kanjis-80.csv`)**: Contiene la lista de 80 Kanjis N5 con su tipo, furigana estilo Anki (`漢字[ふりがな]`), significado, romaji y frases de ejemplo.
2.  **Descarga de Imágenes (`kanji_downloader.py`)**: 
    *   Lee la lista de kanjis y busca ilustraciones automáticamente en `illustkun.com`.
    *   Descarga hasta 3 opciones por cada palabra.
    *   Genera un archivo `summary.csv` con las opciones encontradas y selecciona la **Opción 1** por defecto.
3.  **Selección de Imágenes (`process_choices.py`)**: 
    *   Copia la imagen seleccionada en `summary.csv` a la carpeta `images-chosen/` con el nombre final.
4.  **Sincronización Web (`sync_cards.py`)**: 
    *   Combina los datos del CSV y las imágenes seleccionadas para generar `docs/data.js`.
5.  **Interfaz Web (`docs/index.html`)**: 
    *   Renderiza las tarjetas en formato "Poker" (375x525px).
    *   Incluye lógica para mostrar Furigana y Okurigana con tamaños optimizados (Okurigana al 80%).

## 🖼️ Cómo cambiar las imágenes de las tarjetas

Si no te gusta la imagen seleccionada por defecto para un Kanji, puedes cambiarla fácilmente:

1.  Abre el archivo `summary.csv`.
2.  Busca el Kanji que quieres modificar.
3.  Verás columnas llamadas `Option 1 Title`, `Option 2 Title`, etc. Revisa las opciones disponibles (puedes ver las imágenes en la carpeta `images/`).
4.  En la columna **`Chosen`**, cambia el número (`1`, `2` o `3`) por la opción que prefieras.
5.  Ejecuta el script de procesamiento:
    ```bash
    python process_choices.py
    ```
6.  Sincroniza los datos con la web:
    ```bash
    python sync_cards.py
    ```

## 🛠️ Scripts Principales

*   `python kanji_downloader.py`: Descarga imágenes nuevas y actualiza el resumen.
*   `python process_choices.py`: Mueve las imágenes elegidas a la carpeta de producción.
*   `python sync_cards.py`: Actualiza el contenido de las tarjetas en la web.

## 🎨 Diseño de las Tarjetas

Las tarjetas están optimizadas para una experiencia de estudio premium:
*   **Anverso**: Muestra solo el Kanji en gran tamaño.
*   **Reverso**:
    *   Furigana estilo Anki con Okurigana escalado.
    *   Romaji en color índigo.
    *   Ilustración central.
    *   Significado en negrita y etiquetas de tipo (nom., ver., adj.).
    *   Sección de frases con traducción al español.

---
Desarrollado para facilitar el aprendizaje del japonés de forma visual y efectiva.
