---
date: 2020-06-20
title: 'Cómo arreglar los errores de ESLint al guardar en vscode'
template: post
thumbnail: '../thumbnails/eslint.png'
slug: como-arreglar-los-errores-de-eslint-al-guardar-en-vscode
categories:
   - Eslint
   - Javascript
   - Herramientas
   - Popular
tags:
   - eslint
   - javascript
---

Dos de las utilidades más prominentes en el desarrollo de la web hoy en día son `ESLint` y el `Visual Studio Code` de Microsoft. Disfruto usando ambas, y me encanta la integración entre ambas herramientas, pero las advertencias de ESLint dentro del Visual Studio Code no son satisfactorias -- prefiero que los errores sean corregidos cada vez que guardo.

Completa los siguientes pasos para que _Visual Studio Code_ corrija cualquier error cuando se guarde un archivo:

-  Abre la siguiente ruta de archivo: `~Library/Application Support/Code/User/settings.json`
-  Dentro de la estructura JSON, añada lo siguiente:

<div class="filename">Library/Application Support/Code/User/settings.json</div>

```json
{
   // ... Existing JSON here ...
   "editor.codeActionsOnSave": {
      "source.fixAll": true
   }
}
```

Cada vez que guardes los archivos aplicables dentro de Visual Studio Code, ESLint se ejecutará para corregir cualquier error.

Para mí esto es un gran ahorro de tiempo. Existe el riesgo de que esta tarea pueda llevar un tiempo en archivos grandes, pero para mí vale la pena.
