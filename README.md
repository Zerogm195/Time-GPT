# Time-GPT

**Time-GPT** es una extensión de navegador que inserta automáticamente la fecha y hora actual (configurada por defecto para el formato de Colombia, `es-CO`) en la caja de texto antes de cada mensaje. Mantiene la marca de tiempo activa e integrada incluso si borras o editas el texto del campo de entrada.


## 🚀 Características

* **Marcación de tiempo automática:** Adjunta la fecha y hora local antes de enviar tu mensaje a la IA.
* **Persistencia en el campo de texto:** Si borras el contenido de la caja de texto o la vacías por completo, la fecha y hora se vuelven a insertar automáticamente.
* **Localización `es-CO`:** Configurado con la zona horaria y formato regional de Colombia.


## 🛠️ Instalación

1. Ve a la sección de **Releases** (o descarga el archivo `.crx` disponible en este repositorio).
2. Abre tu navegador basado en Chromium (Google Chrome, Brave, Edge).
3. Dirígete a la página de extensiones escribiendo `chrome://extensions/` en la barra de direcciones.
4. Activa el **Modo de desarrollador** (ubicado en la esquina superior derecha).
5. Arrastra y suelta el archivo `.crx` descargado directamente dentro de la página de extensiones para instalarlo.


## 📌 Uso

1. Abre la interfaz de chat (Chatgpt).
2. Verás la fecha y hora actual insertada automáticamente al inicio de la caja de texto.
3. Escribe tu mensaje a continuación y envíalo.


## ⚠️ Problemas Conocidos (*Known Issues*)

* **Desincronización del DOM al cambiar de pestaña:** Si cambias a otra pestaña del navegador y regresas a la interfaz del chat, la extensión pierde la referencia de los elementos. Por el momento, **es necesario recargar la página** (`F5` o `Ctrl + R`) para que el observador del DOM se reincorpore y la extensión funcione correctamente.

## 🤝 Contribuciones

¡Las sugerencias y contribuciones son bienvenidas! Si deseas ayudar a resolver el problema del reenganche del DOM, añadir soporte para más zonas horarias o mejorar el código, puedes abrir un *Pull Request* o reportar un *Issue*.
