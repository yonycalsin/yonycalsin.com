---
date: 2020-06-20
title: '7 Funciones esenciales de JavaScript'
template: post
thumbnail: '../thumbnails/js.png'
slug: 7-funciones-esenciales-de-javascript
categories:
   - javascript
   - trucos-javascript
   - Popular
tags:
   - javascript
   - trucos-javascript
---

Recuerdo los primeros días de JavaScript donde se necesitaba una función simple para casi todo porque los proveedores de navegadores implementaron características diferentes, y no sólo características de borde, características básicas, como `addEventListener` y `attachEvent`. Los tiempos han cambiado pero todavía hay algunas funciones que cada desarrollador debería tener en su arsenal, para el rendimiento con fines de facilidad funcional.

## debounce

La función `debounce` puede ser un cambio de juego cuando se trata de la actuación impulsada por los eventos. Si no está utilizando una función de `debounce` con un `scroll`, un `resize` o una `key` de evento, probablemente lo esté haciendo mal. Aquí tienes una función de `debounce` para que tu código sea eficiente:

```js
// Devuelve una función, que, mientras siga siendo invocada, no
// ...se activará. La función será llamada después de que deje de ser llamada
// N milisegundos. Si se pasa `immediate`, dispara la función en el
// en el borde de ataque, en lugar de en el de arrastre.

function debounce(func, wait, immediate) {
   var timeout;
   return function () {
      var context = this,
         args = arguments;
      var later = function () {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
   };
}

// Uso
var myEfficientFn = debounce(function () {
   // Todas las cosas impositivas que haces
}, 250);
window.addEventListener('resize', myEfficientFn);
```

La función de `debounce` no permitirá que se utilice una llamada de retorno más de una vez en un período de tiempo determinado. Esto es especialmente importante cuando se asigna una función de devolución de llamada a eventos de disparo frecuente.

## poll

Como mencioné con la función `debounce`, a veces no puedes conectarte a un evento para significar un estado deseado... si el evento no existe, necesitas comprobar tu estado deseado a intervalos:

```js
// La función de votación
function poll(fn, timeout, interval) {
   var endTime = Number(new Date()) + (timeout || 2000);
   interval = interval || 100;

   var checkCondition = function (resolve, reject) {
      // Si se cumple la condición, ¡estamos acabados!
      var result = fn();
      if (result) {
         resolve(result);
      }
      // Si la condición no se cumple, pero el tiempo de espera no ha transcurrido, vuelva a hacerlo.
      else if (Number(new Date()) < endTime) {
         setTimeout(checkCondition, interval, resolve, reject);
      }
      // No coincidía y demasiado tiempo, ¡rechazado!
      else {
         reject(new Error('timed out for ' + fn + ': ' + arguments));
      }
   };

   return new Promise(checkCondition);
}

// Uso: asegurar que el elemento sea visible
poll(
   function () {
      return document.getElementById('lightbox').offsetWidth > 0;
   },
   2000,
   150,
)
   .then(function () {
      // Encuesta realizada, ¡ahora haz otra cosa!
   })
   .catch(function () {
      // Tiempo de votación agotado, ¡maneja el error!
   });
```

¡Las encuestas han sido útiles durante mucho tiempo en la web y continuarán siéndolo en el futuro!

## once

Hay veces en las que prefieres que una funcionalidad determinada sólo ocurra una vez, de forma similar a como se utiliza un evento de carga (`load`). Este código te proporciona dicha funcionalidad:

```js
function once(fn, context) {
   var result;

   return function () {
      if (fn) {
         result = fn.apply(context || this, arguments);
         fn = null;
      }

      return result;
   };
}

// Uso
var canOnlyFireOnce = once(function () {
   console.log('Fired!');
});

canOnlyFireOnce(); // "Despedido!"
canOnlyFireOnce(); // nada
```

> La función `once` asegura que una función dada sólo puede ser llamada una vez, ¡evitando así la inicialización duplicada!

## getAbsoluteUrl

Obtener una URL absoluta de una `variable string` no es tan fácil como crees. Está el constructor de URL pero puede actuar si no proporcionas los argumentos **requeridos** (lo que a veces no puedes). He aquí un truco suave para obtener una URL absoluta a partir de una entrada de cadena:

```js
var getAbsoluteUrl = (function () {
   var a;

   return function (url) {
      if (!a) a = document.createElement('a');
      a.href = url;

      return a.href;
   };
})();

// Usage
getAbsoluteUrl('/something'); // https://yonicalsin.netlify.app/something
```

El elemento `burn` href maneja y tonterías de URL para usted, proporcionando una URL absoluta confiable a cambio.

## isNative

Saber si una función dada es nativa o no puede señalar si estás dispuesto a anularla. Este práctico código puede darte la respuesta:

```js
(function () {
   // Se utiliza para resolver la interna `[[Class]]` de los valores
   var toString = Object.prototype.toString;

   // Se utiliza para resolver la fuente de funciones descompiladas
   var fnToString = Function.prototype.toString;

   // Se utiliza para detectar constructores del huésped (Safari > 4; realmente escrito de forma específica)
   var reHostCtor = /^\[object .+?Constructor\]$/;

   // Compilar un regexp usando un método nativo común como plantilla.
   // Elegimos Object#toString porque hay una buena posibilidad de que no se esté jugando con él.

   var reNative = RegExp(
      '^' +
         // Coaccionar el `Objeto# a una cuerda
         String(toString)
            // Escapar de cualquier personaje especial de regexp
            .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
            // Reemplazar las menciones de "toString" por ".*?" para mantener la plantilla genérica.
            // Reemplazar cosas como `para ...` para soportar entornos como Rhino que añaden información extra
            // como el método arity.

            .replace(
               /toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,
               '$1.*?',
            ) +
         '$',
   );

   function isNative(value) {
      var type = typeof value;
      return type == 'function'
         ? // Usa la "Function#toString" para evitar el método propio de "toString" del valor
           // y evitar ser falsificado.
           reNative.test(fnToString.call(value))
         : // Retrocede a un chequeo del objeto anfitrión porque algunos ambientes representarán
           // cosas como arreglos mecanografiados como métodos de DOM que pueden no ajustarse al
           // patrón nativo normal.
           (value &&
              type == 'object' &&
              reHostCtor.test(toString.call(value))) ||
              false;
   }

   // exporta como quieras
   module.exports = isNative;
})();

// Uso
isNative(alert); // true
isNative(myCustomFunction); // false
```

> ¡La función no es bonita pero hace el trabajo!

## insertRule

Todos sabemos que podemos tomar una lista de nodos de un selector (a través de `document.querySelectorAll`) y darle a cada uno de ellos un estilo, pero lo que es más eficiente es establecer ese estilo en un selector (como se hace en una hoja de estilo):

```js
var sheet = (function () {
   // Crear el <style> etiqueta
   var style = document.createElement('style');

   // Añade un media (and/o media query) aquí si quieres!
   // style.setAttribute('media', 'screen')
   // style.setAttribute('media', 'only screen and (max-width : 1024px)')

   // Hacking de WebKit :(
   style.appendChild(document.createTextNode(''));

   // Agregar el elemento <style> a la página
   document.head.appendChild(style);

   return style.sheet;
})();

// Uso
sheet.insertRule('header { float: left; opacity: 0.8; }', 1);
```

> Esto es especialmente útil cuando se trabaja en un sitio dinámico y con mucho AJAX. Si estableces el estilo en un selector, no necesitas tener en cuenta el estilo de cada elemento que pueda coincidir con ese selector (ahora o en el futuro).
