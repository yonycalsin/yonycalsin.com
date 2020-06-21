---
date: 2020-06-20
title: 'Cómo mostrar imágenes de un modo específico'
template: post
thumbnail: '../thumbnails/css2.png'
slug: como-mostrar-imagenes-de-un-modo-especifico
categories:
   - css
tags:
   - imagen
   - css
   - diseño
---

Ahora que tenemos la mayoría de los fundamentos de HTML y CSS en el navegador, hemos comenzado a implementar nuevas características que yo consideraría mejoras en la `"calidad de vida"`, muchas de las cuales han sido inspiradas por el móvil.

Un gran ejemplo es la consulta de medios con esquema de colores preferidos de CSS, que permite a los desarrolladores atender su diseño según la preferencia del tema del sistema (oscuro o claro):

```css
/* Modo Claro */
@media (prefers-color-scheme: light) {
   html {
      background: white;
      color: black;
   }
}

/* Modo Oscuro */
@media (prefers-color-scheme: dark) {
   html {
      background: black;
      color: white;
   }
}
```

Mientras veía pasar mi feed de Twitter, vi un truco increíble de <a href="https://twitter.com/flaviocopes/status/1254690503863525376" target="_blank">Flavio Copes</a>:

```html
<picture>
   <source srcset="dark-logo.png" media="(prefers-color-scheme: dark)" />
   <img src="logo.png" />
</picture>
```

Aplicando la consulta de medios a la fuente, puede definir la imagen a cargar. Esta técnica es obviamente valiosa cuando necesitas cargar una nueva imagen de origen y no simplemente cambiar una propiedad CSS.

> ¡Quizás no sea el código más mantenible, pero sin embargo es muy inteligente!
