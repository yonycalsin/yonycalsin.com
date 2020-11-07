---
date: 2020-01-05
title: 'CSS: Un Arte, una Ciencia, una Pesadilla (Todo lo que debes saber)'
template: post
thumbnail: '../thumbnails/css2.png'
slug: descripcion-general-de-conceptos-css
categories:
   - Diseño
   - Popular
tags:
   - css
   - diseño
---

Hablar CSS es como hablar inglés, o cualquier otro idioma hablado - hay muchas palabras, pero sólo terminas usando un pequeño subconjunto de ellas a diario. Al igual que leer un diccionario no es una forma eficiente de aprender un idioma, mirar una [gran lista de propiedades](https://www.w3.org/Style/CSS/all-properties.en.html) no es útil para aprender CSS.

Algunas personas piensan que CSS es realmente difícil y que es demasiado complicado de aprender. Algunos piensan que como no es un lenguaje de programación ([o lo es?](https://notlaura.com/is-css-turing-complete/)), es tan fácil que ni siquiera tienes que molestarte en aprenderlo. En última instancia, hay mucho en CSS, pero no tiene por qué ser abrumador. Si aprendes algunos conceptos clave, debes sentirte seguro mirando o pensando en cualquier diseño y convirtiéndolo en realidad.

Voy a repasar algunas de las partes de CSS que son importantes a diario, y dar algunos de los consejos y trucos que he llegado a aprender a lo largo de los años.

> Si sólo quieres algunas pistas sobre cómo hacer que tu diseño se vea bonito o consistente, echa un vistazo a [Design for Developers](https://www.taniarascia.com/design-for-developers/). También creo que [Diseño Web en 4 minutos](https://jgthms.com/web-design-in-4-minutes/) de [Jeremy Thomas](https://jgthms.com/) tiene una excelente introducción interactiva a los conceptos de diseño web.

#### ¿Para quién es este artículo?

Si eres un desarrollador de front-end experimentado que ya sabe todo sobre CSS, por favor cierra esta pestaña inmediatamente y corre tan rápido como puedas a la salida más cercana. Si nunca has oído hablar o usado CSS antes y no sabes cómo cargar CSS en una página HTML, este recurso tampoco es para ti.

Este artículo es para el medio de personas que han tenido que tocar el CSS unas cuantas veces aquí y allá, pero que al final no sienten que saben lo que están haciendo, o que tienen dificultades para hacer diseños básicos.

#### Temas tratados

##### HTML 101

-  [Fundamentos de HTML](#fundamentos-de-html)

##### CSS 101

-  [Sintaxis CSS](#Sintaxis-CSS)
-  [Seleccionadores de CSS](#Selectores-CSS)
-  [Especificación de CSS](#Especificidad-de-CSS)
-  [Propiedades CSS](#Propiedades-de-CSS)

##### Trabajar con CSS

-  [Spacing Out](#Espaciamiento-Relleno-y-márgenes)
   -  `padding`, `margin`, `border`
-  [Modelo de caja](#Modelo-de-caja)
   -  `content-box` vs. `border-box`
-  [Propiedades de la taquigrafía](#Propiedades-de-la-taquigrafía)
-  [Maquetación: Display](#Maquetación-display)
   -  `inline`, `inline-block`, `block`
-  [Maquetación: Posicionamiento](#Maquetación-Posicionamiento)
   -  `static`, `fixed`, `absolute`, `relative`
-  [Maquetación: Flex](#Maquetación-flex)
   -  flex containers (`flex` display), flex items (`flex` property)
-  [Responsive: Media Queries](#responsive-media-queries)
   -  `min-width`, `max-width`
-  [Otras consideraciones](#Otras-consideraciones)

## Fundamentos de HTML

A modo de recapitulación, hablaremos mucho de cómo CSS se aplica a HTML, así que asegúrate de estar familiarizado con lo que todo se refiere en HTML.

-  **Etiqueta** - nombre de elemento (_ejemplo:_ `a`)
-  **Atributo** - Modificadores de HTML (_ejemplo:_ `href`)
-  **Valor** - valor aplicado a un atributo (_ejemplo:_ `https://yonycalsin.netlify.app`)
-  **Elemento** - todo dentro de la etiqueta HTML - atributos, valores y contenido.

Ejemplo:

```html
<tag atributo="valor">contenidos de elementos</tag>
```

Un verdadero ejemplo:

```html
<a href="https://yonycalsin.netlify.app">El WebRing de Yoni</a>
```

Esto enlazará con mi increíble WebRing.

### Referencia HTML

| Sintaxis | Ejemplo                                                                   |
| -------- | ------------------------------------------------------------------------- |
| Etiqueta | `a`, `img`, `h1`                                                          |
| Atributo | `href`, `src`, `alt`                                                      |
| Valor    | `https://yonycalsin.netlify.app`, `avatar.png`, `Algún texto alternativo` |
| Elemento | `<img src="avatar.png">`                                                  |

Ahora podemos pasar a CSS.

## Fundamentos de CSS

Voy a repasar algunos de los fundamentos de CSS - sintaxis, selectores y especificidad.

## Sintaxis CSS

Hay tres partes principales de CSS - selectores, propiedades y valores.

-  **Selectores** - el elemento o elementos seleccionados
-  **Propiedades** - el aspecto del elemento que se está estilizando
-  **Valores** - el estilo que se aplica

Ejemplo:

```css
selector {
   property: value;
}
```

Un verdadero ejemplo:

```css
h1 {
   color: blue;
}
```

Esto hará que todos los elementos "h1" sean azules.

## Selectores CSS

Desde **menos específico** hasta **más específico** (más sobre eso abajo), aquí están los principales tipos de selectores:

-  [**Selector universal**](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors) - selecciona todos los elementos
-  [**Seleccionador de tipo**](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) - apunta elemento(s) por etiqueta HTML (incluye [pseudo elementos](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements))
-  [**Selector de clase**](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors), [**Selector de atributo**](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) - elemento(s) objetivo por clase o atributo, respectivamente (incluye [pseudo clases](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes))
-  [**Selector de id**](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) - apunta a un elemento por id

```css
* {
   /* Selector universal */
}

etiqueta {
   /* Selector de tipo */
}

etiqueta::before {
   /* Selector de tipo (elemento psuedo) */
}

.clase {
   /* Selector de clase */
}

.clase:hover {
   /* Selector de clase (pseudo clase) */
}

[attr] {
   /* Selector de atributos */
}

#id {
   /* Selector de identificación */
}
```

> **Los seudoelementos** tienen dos dos puntos (`::`, o `::before`) y las **seudoclases** tienen un punto (`:`, o `:hover`).

### CSS y JavaScript

Ten en cuenta que aunque no te importe mucho el CSS, aprender sobre los selectores te ayudará a escribir JavaScript (vainilla), ya que los selectores DOM en una consulta de documento JavaScript son los mismos.

Esta consulta para obtener todos los elementos que coinciden con un selector:

<div class="filename">.js</div>

```js
document.querySelectorAll('article h2');
```

Apunta a los mismos elementos que este CSS para dar estilo a todos los elementos que coinciden con un selector:

<div class="filename">.css</div>

```css
article h2 {
}
```

> **Nota:** Todos los selectores pueden tener como objetivo uno o más elementos, excepto los IDs, que sólo pueden aplicarse a un único elemento.

### Un espacio significa algo

¿Sabes la diferencia entre estos dos?

-  `.foo.bar`
-  `.foo .bar`

El primero apunta a un `foo` y a un `bar` en el mismo elemento.

<div class="filename">Ejemplo de .foo.bar</div>

```css
.foo.bar {
   /* sin un espacio */
}
```

```html
<div class="foo bar">Soy el objetivo</div>
```

El segundo apunta a un `bar` que desciende de un `foo`.

<div class="filename">Ejemplo de .foo .bar</div>

```css
.foo .bar {
   /* con un espacio */
}
```

```html
<div class="foo">
   <div class="bar">Soy el objetivo</div>
</div>
```

Hay otros selectores que pueden usarse en lugar de un espacio para modificar el selector, como `>`, `+`, y `~`. Todos ellos tienen diferentes significados. No se usan increíblemente a menudo, así que puedes aprenderlos cuando sea necesario.

### Referencia del selector

| Selector                   | Objetivos                   | Ejemplo                                             |
| -------------------------- | --------------------------- | --------------------------------------------------- |
| Selector universal         | Todos los elementos         | `*`                                                 |
| Selector de tipo           | Etiquetas, pseudo elementos | `h1`, `div`, `li::before`                           |
| Selector de clase          | Clases, pseudo clases       | `.page-header`, `.page-content`, `.list-item:hover` |
| Selector de atributos      | Atributos                   | `[alt]`, `[type="text"]`, `[lang="en"]`             |
| selector de identificación | Identificaciones            | `#toggle`, `#getting-started`, `#about`             |

## Especificidad de CSS

¿Qué significa "especificidad" en CSS?

### Orden

En primer lugar, si todas las cosas son iguales, el orden en el que se utilizan dos selectores en la hoja de estilo es importante. Así que si tenemos una hoja de estilo con dos clases:

<div class="filename">Comparación de dos selectores con igual peso</div>

```css
.foo {
   color: blue;
}

.bar {
   color: red;
}
```

y tienes ambas clases en el mismo elemento:

<div class="filename">Un ejemplo de un elemento que utiliza ambos selectores</div>

```html
<div class="foo bar">¿De qué color soy?</div>
```

...entonces el que esté más cerca del fondo gana. Así que en este caso, el color del elemento es rojo, porque `.bar` aparece más cerca de la parte inferior de la hoja de estilo.

### Cálculo de la especificidad

CSS utiliza una escala numérica para determinar la especificidad. También puedes usar [esta calculadora de especificidad](https://specificity.keegan.st/) para ver cuán específico es un elemento.

Como sabemos, hay tres secciones: `ID`, `Clase` y `Tipo`. En la escala, todas están representadas por `0` inicialmente.

| ID  | Clase | Tipo |
| --- | ----- | ---- |
| 0   | 0     | 0    |

Cada vez que su selector contenga uno de los selectores, aumentará ese cubo en 1.

Añade un selector de tipo.

<div class="filename">Sólo un selector de tipo</div>

```css
h1 {
   /* 001 */
}
```

| ID  | Clase | Tipo |
| --- | ----- | ---- |
| 0   | 0     | 1    |

Añade un selector de clase.

<div class="filename">Selector de tipo más selector de clase</div>

```css
.container h1 {
   /* 011 */
}
```

| ID  | Clase | Tipo |
| --- | ----- | ---- |
| 0   | 1     | 1    |

Añada un selector de identificación.

<div class="filename">Selector de tipo, clase e ID</div>

```css
#landing-page .container h1 {
   /* 111 */
}
```

| ID  | Clase | Tipo |
| --- | ----- | ---- |
| 1   | 1     | 1    |

Puede pensar en esta escala exactamente igual que un sistema de números de base 10. Si una etiqueta es `1` (uno), y una clase y tipo es `11` (once), y un id, clase y etiqueta es `111` (ciento uno), ¿cuál es el más grande? En este caso, `111` es el más grande y por lo tanto el más específico.

> Si tuvieras más de 10 elementos en un cubo dado, como `1` id, `15` clases, y tipos `30`, esta analogía no funciona, pero podrías relacionarla con sistemas de numeración semántica también - sería `1.15.30`. Sin embargo, si está usando tantos selectores, lo más probable es que algo haya ido terriblemente mal.

Esto significa que una clase es un orden de magnitud más específico que un tipo, y un id es un orden de magnitud más específico que una clase.

En otras palabras, si tuvieras dos ids y 0 clases vs. 1 id y 20 clases, las dos ids ganarían. Por ejemplo:

Este selector es más específico: (`200`, o doscientos)

<div class="filename">Dos selectores ID</div>

```css
#landing-page #about-section {
   /* 200 */
}
```

| ID  | Clase | Tipo |
| --- | ----- | ---- |
| 2   | 0     | 0    |

Este selector es menos específico: (`140`, o ciento cuarenta)

<div class="filename">Un selector de ID y muchos selectores de clase</div>

```css
#landing-page .foo.bar.baz.box {
   /* 140 */
}
```

| ID  | Clase | Tipo |
| --- | ----- | ---- |
| 1   | 4     | 0    |

#### Estilos en línea

Un estilo en línea es más fuerte que cualquier combinación de id, clase o tipo.

<div class="filename">Estilos en línea en un elemento</div>

```html
<div style="color: red;">¡Estoy rojo! ¡Ningún selector puede anularme!</div>
```

### ¡Importante!

Excepto que una palabra clave `!important` en una propiedad puede anular incluso eso...

<div class="filename">Palabra clave importante que anula los estilos en línea de un elemento</div>.

```css
div {
   color: blue !important;
}
```

```html
<div style="color: red;">¡He sido anulado! ¡Estoy azul ahora!</div>
```

Por favor, haga un uso muy, muy ahorrativo de `!important`. Se vuelve muy difícil de anular. Importante" sólo debe ser usado cuando sea absolutamente necesario, como estilizar a un tercero sobre el que no tienes control y que está usando estilos en línea, y en algunos casos con Javascript para cambiar la visualización.

En resumen, cada nivel de jerarquía desde type a `!important` es un orden de magnitud más fuerte que el anterior. Mientras que `!important` es el modificador de especificidad más fuerte, un `!important` puede ser anulado por otro `!important` que por lo demás es más alto (por ejemplo, `!important` + ID es más fuerte que `!important` más clase).

### Jerarquía de la especificidad

De menos específico a más específico:

| Selector                       | Ejemplo                            | Especificación |
| ------------------------------ | ---------------------------------- | -------------- |
| Selector de tipo               | `h1`                               | `0 0 0 1`      |
| Clase, selectores de atributos | `.class`, `[type="text"]`          | `0 0 1 0`      |
| Selector de ID                 | `#contact`                         | `0 1 0 0`      |
| Estilo en línea                | `<div style="background: purple">` | `1 0 0 0`      |
| `!important` Palabra clave     | `div { color: green !important }`  | Anula todos    |

## Propiedades de CSS

Aquí hay una lista de todas las propiedades que creo que son absolutamente esenciales para conocer CSS. El equivalente a saber los verbos y sustantivos más básicos en inglés con los que te puedes desenvolver.

Lo mínimo para poder hacer cualquier cosa:

-  `padding`, `margin`, `border`
-  `background`
-  `color`, `font-family`, `font-weight`, `font-size`, `line-height`
-  `width`, `height`, `max-width`, `max-height`

Lo esencial del diseño:

-  `position`, `z-index`, `top`, `right`, `bottom`, `left`
-  `display`, `flex`, `align-items`, `justify-content`
-  `@media`

Es bueno saberlo, pero no tan esencial como el resto:

-  `grid`, `grid-template-columns`, `grid-template-rows`
-  `transform`, `transition`

Entraremos en esto más en un momento. Ahora deberíamos tener suficiente de lo básico para discutir algunas aplicaciones del conocimiento.

## Espaciamiento: Relleno y márgenes

Todas sus necesidades de espacio serán cubiertas por dos propiedades: `padding` y `margin`.

-  [**Padding**](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) se utiliza para acolchar el interior de un elemento (_dentro del borde_)
-  [**Margin**](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) se utiliza para separar elementos (_fuera del borde_)

> En Developer Tools, el contenido se representa en azul, el relleno se representa en verde y los márgenes se representan en naranja.

![](../images/padding1.png)

El orden de anidación de un elemento es el siguiente:

-  Contenido de los elementos -> `padding` -> `border` -> `margin`

Así que si tuviera que hacer un elemento que fuera un cuadrado con relleno y márgenes, se vería así:

```css
.square {
   border: 1px solid gray;
   padding: 10px;
   margin: 10px;
   height: 50px;
   width: 50px;
}
```

![](../images/padding2.png)

Algunas notas importantes:

-  El **Margin** es siempre transparente; el **padding** puede tener un color de fondo.
-  Los **Margins** se derrumban entre sí; los **padding** se apilan uno encima del otro.
-  El **Margin** puede tener valores negativos; el **padding** no puede tener valores negativos.
-  El **Padding** añade al área de un elemento que se puede hacer clic; **margin** no lo hace
-  El **Padding** (y el borde) se suman al tamaño total de un elemento; **margin** no lo hace

Lo que esto significa es que los márgenes se superponen entre sí, y el relleno nunca lo hará. Esto aparece mucho en el formato de los encabezados y párrafos, por ejemplo.

Usando un ejemplo de una `h2` con un margen inferior de `10px` y una `p` con un margen superior de `10px`, ¿cuánto margen separará los dos elementos?

```html
<h2 style="margin-bottom: 10px;">Encabezamiento</h2>
<p style="margin-top: 10px;">Párrafo</p>
```

Veremos que hay un margen total de `10px` entre ellos, no `20px`.

Para usar un ejemplo real, en [este ejemplo MVC todo app](https://taniarascia.github.io/mvc/) que hice, cada ítem de todo se rellena, y se separan entre sí por márgenes.

![](../images/padding3.png)

### Padding vs. margin

| Rasgo                  | Margin               | Padding             |
| ---------------------- | -------------------- | ------------------- |
| Color de fondo         | Siempre transparente | Fijado por elemento |
| Colapsar o apilar      | Colapsar             | apilar              |
| Valores negativos      | Permitido            | No se permite       |
| Se puede hacer clic en | No                   | Si                  |

## Modelo de caja

[Tamaño de la caja](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)! Significa una cosa: ¿el relleno y los bordes cuentan como parte del tamaño del elemento, o no?

-  **Border box** says yes! Borders and padding are part of an element's size!
-  **Content box** says no! Borders and padding are not part of an element's size!

-  **Border box** dice que sí. Los bordes y el acolchado son parte del tamaño de un elemento!
-  **Content box** ¡dice que no! ¡Los bordes y el relleno no son parte del tamaño de un elemento!

¿Mi recomendación? Establezca el `tamaño de la caja` en `caja-borde` en todo (`*`). Siempre. ¡Ni siquiera lo pienses! En las raras ocasiones en que algo necesita ser `contenido-caja`, puedes anularlo. Esta es una de las pocas cosas que IE ha hecho bien - haciendo que `border-box` sea la predeterminada mientras que el resto de los navegadores usan `content-box` como la predeterminada.

### Border box vs. content box?

Usemos el ejemplo del cuadrado de arriba. Con `content-box` aplicada, el tamaño total del elemento es `72px * 72px`:

<div class="filename">Content box</div>

```
50px para el contenido
2px (x) y 2px (y) para cuatro bordes de 1px
20px para un acolchado de 10px en todo el contorno
= 72px cuadrado
```

![](../images/content-box.png)

Con la aplicación de `border-box`, el tamaño total del elemento es de `50px * 50px`.

<div class="filename">Border box</div>

```
28px para el contenido
2px (x) y 2px (y) para cuatro bordes de 1px
20px para un acolchado de 10px en todo el contorno
= 50px cuadrado
```

![](../images/border-box.png)

Si le das a un elemento una `height` y `width` de `50px` cada uno, ¿preferirías que el elemento fuera `50px` o `72px`? La respuesta más probable es que quieras que la altura y el ancho coincidan con el tamaño del elemento. Esto se convertirá en algo muy importante cuando cree diseños, especialmente flex/grids que se establecen por porcentaje.

Puedes aplicar `border-box` a todos los elementos de esta manera:

```css
* {
   box-sizing: border-box;
}
```

(O [de esta manera](https://www.paulirish.com/2012/box-sizing-border-box-ftw/) si tienes una necesidad específica de `content-box` en algún lugar).

## Propiedades de la taquigrafía

Me ves usar `padding: 5px` y `margin: 5px`. La propiedad `padding`, por ejemplo, es en realidad una abreviatura de cuatro propiedades individuales:

```css
/* Propiedad de taquigrafía */
div {
   padding: 5px;
}

/* Propiedades individuales */
div {
   padding-top: 5px;
   padding-right: 5px;
   padding-bottom: 5px;
   padding-left: 5px;
}
```

Normalmente, no tendrás que declarar cada lado por separado. En diseño, nos gusta la simetría, así que si alguna vez terminas con un valor diferente para los cuatro lados, es probable que algo haya salido bastante mal y que quieras replantearte tu estrategia.

-  **Uno** se aplica a los cuatro lados (`padding: 5px`)
-  **Dos** valores se aplican a la vertical (arriba y abajo) y a la horizontal (izquierda y derecha) respectivamente (`padding: 10px 0`)
-  **Cuatro** valores **sentido de las agujas del reloj** de arriba a la izquierda (`padding: 1px 2px 3px 4px`)

Esto se aplica tanto al `padding` como al `margin`. El uso más común de una propiedad lateral individual es cuando estás anulando algo. Por ejemplo, un elemento existe con `padding: 5px`, y quieres que tenga un valor de fondo de relleno diferente.

La siguiente taquigrafía más común se aplica a `border`. Lo más común es que vea el borde escrito de esta manera:

```css
div {
   border: borde-ancho borde-estilo borde-color;
}
```

Estos pueden ser escritos individualmente también.

```css
div {
   border: 1px solid black;
}

/* También puede escribirse individualmente */
div {
   border-color: black;
   border-width: 1px;
   border-style: solid;
}
```

Y al igual que el `padding` y el `margin`, cada uno de estos modificadores de frontera tiene su propia propiedad lateral.

```css
div {
   border-bottom-color: green;
   border-bottom-width: 2px;
   border-bottom-style: dashed;
}
```

Así que en realidad cuando escribes `border: 1px solid black` estás escribiendo taquigrafía para 12 propiedades combinadas.

## Maquetación: Display

Hay muchas propiedades `display` ([ver esta lista](https://developer.mozilla.org/en-US/docs/Web/CSS/display)), pero creo que las más usadas e importantes de conocer son `block`, `inline`, `inline-block`, `flex` y `none`.

La mayoría de los elementos por defecto son `block`, `inline` o `inline-block`. El elemento `block` por defecto es un `div`, y el elemento inline por defecto es un `span`.

Ejemplos de elementos predeterminados:

-  **Inline**: `span`, `strong`, `em`, `img`
-  **Inline-block**: `button`, `select`, (Solo Chrome: `textarea`, `input`)
-  **Block**: `div`, `p`, `nav`, `section`

> Hay algunos otros obvios y específicos, como los elementos `table` que tienen la pantalla `table`, y `li` que tiene la pantalla `list-item`, pero raramente decidirá hacer que algún otro elemento tenga ese tipo de pantalla.

#### Inline

**Los elementos en línea** suelen estar basados en el formato de texto: `b` o `fuerte`, que hacen el texto en negrita, o `i` y `em` que hacen el texto en cursiva. Están en la misma línea - no crean una nueva línea. Los elementos en línea se anidan normalmente dentro de elementos de bloque. Los rellenos y márgenes horizontales y verticales se aplican como se espera, pero los márgenes verticales no se aplican en absoluto, y el relleno vertical es ignorado por otros elementos.

<div class="filename">Comportamiento del elemento en línea</div>

```html
contenido de contenido...<span>span</span>..contenido de contenido
```

```css
span {
   /* en línea por defecto */
   padding: 15px;
   margin: 15px;
}
```

![](../images/inline.png)

Para mayor seguridad, los elementos inline sólo deberían utilizarse para el formato de texto.

#### Inline block

**Los elementos de bloque en línea** son como los elementos en línea, excepto que pueden tener acolchados y márgenes verticales y horizontales. También aparecen uno junto al otro horizontalmente por defecto, y no se apilan en nuevas líneas.

```css
span {
   display: inline-block;
   padding: 15px;
   margin: 15px;
}
```

![](../images/inline-block.png)

#### Block

**Los elementos de bloque** abarcan todo el ancho del elemento que los contiene y se apilan unos sobre otros en nuevas líneas del documento.

<div class="filename">Comportamiento del elemento bloque</div>

```html
feliz feliz feliz feliz...
<div>div</div>
...contenido de los contenidos
```

![](../images/block-element.png)

#### None

Un elemento con **none** aplicado no aparecerá en el documento en absoluto. Esto es lo más comúnmente usado para ocultar/visualizar contenido para móviles.

### Referencia de la pantalla

| Display        | Comportamiento                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------- |
| `inline`       | utilizados principalmente para el formato de texto, aparecen uno al lado del otro horizontalmente |
| `inline-block` | aparecen uno al lado del otro horizontalmente con acolchado vertical y márgenes aplicados         |
| `block`        | se extiende a lo largo de todo el ancho del contenedor, apilado verticalmente                     |
| `none`         | no aparece en el documento                                                                        |

## Maquetación: Posicionamiento

La propiedad `position`, aunque importante, no es lo que debería usar para la mayoría de las decisiones relacionadas con el diseño. Cambiar la `position` de su valor por defecto (`static`) debe reservarse para unas pocas situaciones específicas. Hay tres que se usan principalmente: `fixed`, `absolute` y `relative`. Un elemento posicionado se ve afectado por `top`, `left`, `right`, `bottom` y `z-index`.

### Flujo normal (normal)

Si no se modifica la `position` de ningún elemento, todo pertenece al [Flujo normal](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow) del documento. Todo esto significa que

-  Los elementos del nivel de bloque ocuparán el **ancho completo** de su **contenedor**, y la altura de su contenido
-  los elementos del nivel del bloque se apilan verticalmente uno encima del otro, de arriba a abajo
-  Los elementos en línea son tan altos y anchos como su contenido
-  todos los elementos son conscientes de los demás, y los márgenes se colapsarán

### Estática (static)

El estado por defecto de la `position` es `static`. Esto significa que su elemento se mantiene en el flujo normal del documento. Si tienes tres `div`s estáticos uno al lado del otro, todos se darán cuenta del otro y se apilarán uno encima del otro.

```html
<div>div</div>
<div>div</div>
<div>div</div>
```

```css
div {
   border: 1px solid black;
   padding: 15px;
   margin: 15px;
}
```

![](../images/div.png)

Los elementos `estáticos` no están posicionados, y por lo tanto no se ven afectados por los índices `top`, `left`, `right`, `bottom` o `z-index`.

> **Nota:** El hecho de que los elementos tengan una posición `static` no siempre significa que se apilen verticalmente. La propiedad `display` puede modificar esto, con `inline-block`, `grid`, o `flex`, pero seguirán formando parte del flujo regular de documentos y otros elementos serán conscientes de ello.

### Fijo (fixed)

Un elemento `fixed` es la posición más fácil de entender: siempre está visible y posicionado de acuerdo a la vista.

Algunos usos comunes del posicionamiento `fixed`:

-  una barra de navegación con un palo en la parte superior.
-  un botón **volver al principio** en la parte inferior derecha de la pantalla
-  un **popup modal** que está en el centro de la vista

```css
nav {
   position: fixed;
}
```

Algunas cosas que hay que saber sobre los elementos `fijos`:

-  su posición en la pantalla está determinada por las propiedades `top`, `left`, `right` y `bottom`. `top: 0` significa que se pegará a la parte superior de la ventana, y `top: 10px` significa que estará a `10px` de la parte superior de la ventana.
-  otros elementos no son conscientes de la existencia de un elemento `fijo`. Esto generalmente significa que debes tener en cuenta el espacio que ocuparían al **añadir márgenes** a los elementos que los rodean.
-  Los elementos `fijos` ya no forman parte del flujo y no tienen un elemento que los contenga, y por lo tanto no se expanden para llenar su contenedor como lo haría un elemento normal (bloque).

Esto significa que si todo lo que hacemos es establecer nuestro `nav` como fijo sin otras propiedades, no se expandirá el ancho completo del viewport.

```html
<nav>nav</nav>
<div>div</div>
<div>div</div>
```

```css
div {
   border: 1px solid black;
   padding: 15px;
   margin: 15px;
   background: white;
}

nav {
   position: fixed;
   background: gray;
}
```

![](../images/nav.png)

Así que podemos actualizarlo para que tenga todo el ancho, y se pegue a la parte superior e izquierda del viewport:

```css
nav {
   position: fixed;
   top: 0;
   left: 0;
   padding: 20px;
   width: 100%;
   background: gray;
   z-index: 2;
}
```

![](../images/nav2.png)

Añadimos la propiedad `z-index`, que afecta al eje z del elemento. Dado que pretendemos que este elemento sea siempre completamente visible, le damos un `z-index` mayor que `0` para asegurarnos de que siempre esté `por encima` de cualquier elemento de nuestro documento. Como podemos ver, hay una última cuestión, que es que el `navegador` se superpone al contenido. Como se mencionó anteriormente, debes añadir espacio (márgenes) a los elementos `estáticos` para hacer espacio para el elemento `fijo`. Simplemente añadiendo un `margin-bottom` al `nav` no tendrá ningún efecto.

```html
<nav>nav</nav>

<section>
   <div>div</div>
   <div>div</div>
</section>
```

```css
section {
   margin-top: 80px;
}
```

![](../images/nav3.png)

Así que ahora tenemos que todo cuidado y el posicionamiento `fixed` debe tener sentido.

### Absoluto y relativo (Absolute, relative)

Las posiciones `absolute` y `relative` van de la mano. Toma todo lo que acabas de aprender sobre los elementos `fixed` y aplícalo a los elementos `absolute`. Se comportan casi exactamente igual: otros elementos no saben de elementos `absolute`, están afectados por las propiedades direccionales y el `z-index`. La diferencia es que en lugar de estar posicionados con respecto a la ventana del navegador, se posicionan con respecto al elemento más cercano que no es `static`, es decir, un elemento `fixed`, `absolute` o `relative`.

Los elementos `relative`, por otro lado, se comportan casi exactamente igual que un elemento `static` - son parte del flujo de documentos, y el simple hecho de establecer un `relative` a un elemento no cambiará su apariencia en absoluto. La diferencia es que un elemento `relative` puede usar las propiedades direccionales `top`, `left`, `right`, y `bottom`.

Sin embargo, el uso más común de `relative` y `absolute` es que un elemento `relative` es tratado como `static`, pero como un `punto de anclaje` para algún otro elemento `absolute`.

Haré un ejemplo con una `sección` (rojo) que tiene una `div` anidada (azul).

```html
<section>
   sección
   <div>div</div>
</section>
```

Sin posicionamiento aplicado, el `div` está contenido dentro de la `sección`.

![](../images/absolute1.png)

Ahora imagina que tengo un montón de elementos de tarjeta que siempre son `100px` de alto, independientemente del contenido que contengan, y quiero que un botón siempre exista en el mismo lugar en la parte inferior derecha. Usando `relative` y `absolute`, el `div` siempre estará en el mismo lugar en cualquier tarjeta.

```css
section {
   position: relative;
   height: 100px;
}

div {
   position: absolute;
   bottom: 15px;
   right: 15px;
}
```

![](../images/absolute2.png)

Para resumir, usa `relative` cuando quieras que algo más esté anclado a un elemento pero no quieras que ese elemento en sí se mueva o se vea afectado en absoluto, y usa `absolute` en el elemento a anclar. Un uso común de esto son los elementos tipo tarjeta.

Este [elemento de tarjeta](https://taniarascia.github.io/card/) es un ejemplo de absoluta utilidad para asegurarse de que siempre son del mismo tamaño pero los botones se alinean.

![](../images/absolute3.png)

### Referencia de posicionamiento

| Posición   | Comportamiento                                                                                    | En el flujo de documentos |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------- |
| `static`   | comportamiento por defecto; los elementos se apilan en orden y se conocen entre sí                | Yes                       |
| `relative` | posicionado con respecto a su posición original en el flujo                                       | Yes                       |
| `fixed`    | posicionado con respecto a la ventana de visualización                                            | No                        |
| `absolute` | posicionado en relación con el elemento no estático más cercano (`fixed`, `relative`, `absolute`) | No                        |

## Maquetación: Flex

The `block`, `inline-block`, and `inline` display types all apply to the element itself. [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) is different, because it applies to elements nested within the one that has `display: flex`. There are many resources that go deep into Flexbox and everything it's capable of, but I'm just going to tell you the basic stuff you can always do to easily make layouts.

### History lesson

In the beginning, HTML documents were basically the same as MS Word documents: you had headings, paragraphs, and the occasional image. People started wanting more advanced layouts, so they began using tables to create their layouts. Since the purpose of tables was (and is) only to display tabular data, the HTML people wrote to create layouts became messier and messier.

Eventually, someone discovered that they could use the `float` property to move things to the left and right of the page, instead of tables. This made the markup a little cleaner and easier to understand, but again, this was another attempt to mutate something for a purpose it was never designed to do. CSS floats were (and are) for "floating" images in an article to the left or right (like you might see in a magazine), not for creating a layout. Nonetheless, for years we were stuck with the `float` property to create some semblance of a unique layout without using tables.

Now we have Flexbox and CSS grid for creating layouts, and we basically never have to touch `float` except for its rare, actual purpose. This doesn't apply if you have to support older versions of Internet Explorer, but if you do, there are more than enough resources to understand how floats were used during this time.

### Creating a flex container

We already know that a bunch of default block elements will stack each other:

<div class="filename">Stacked elements</div>

```html
<section>
   <div>div</div>
   <div>div</div>
   <div>div</div>
</section>
```

![](../images/flex1.png)

So how do we get elements to be side-by-side? We can make the outer container a flex container.

<div class="filename">Elements in a default flex container</div>

```html
<section class="flex-container">
   <div>div</div>
   <div>div</div>
   <div>div</div>
</section>
```

```css
.flex-container {
   display: flex;
}
```

![](../images/flex2.png)

And just like that, all the inner elements are now stacked horizontally in a row. By default, a flex container is set to `flex-direction: row`. Note that only the first layer of elements will be flex items - elements nested further within them will behave normally. You can also update it to `flex-direction: column` and the items will be stacked vertically, as they were originally.

Here are a few cool things flex can do:

-  vertically align elements with ease
-  space items apart or group them together easily
-  create repeating grids

### Alignment: create a navigation bar with flex

Let's make a practical example to demonstrate some of what flex is capable of: a navigation bar. Here's what we want it to look like:

-  brand name to the left
-  nav links to the right
-  all items vertically centered

<div class="filename">navbar.html</div>

```html
<nav>
   <div>Brand name</div>
   <div>
      <a href="#!">About</a>
      <a href="#!">Contact</a>
   </div>
</nav>
```

<div class="filename">navbar.css</div>

```css
nav {
   background: blue;
   height: 80px;
}
```

Without any regard to layout applied, here's how it looks.

![](../images/flex3.png)

We'll make the navbar flex, so the brand name and nav links will be horizontal.

```css
nav {
   display: flex;
}
```

![](../images/flex4.png)

Now we want everything to be vertically aligned. With `align-items: center`, we can vertically align items within a flex container.

```css
nav {
   display: flex;
   align-items: center;
}
```

![](../images/flex5.png)

Now we want the brand and links to be on opposite ends of the navbar. With `justify-content: space-between`, we can tell the items in the flex container to be spaced apart as far as possible.

```css
nav {
   display: flex;
   align-items: center;
   justify-content: space-between;
}
```

![](../images/flex6.png)

Then just add a little padding and you have an acceptable navbar.

![](../images/flex7.png)

I believe without knowing anything else about flex, you can get pretty far with just those properties. When thinking about any of the other values that can be applied to flex alignment, just think about the navigation bar. The brand and group of links are two items in a flex row.

-  `align-items` refers to the **vertical alignment**: `flex-start` would be the top, `flex-end` would be the bottom, and `center` is vertically aligned.
-  `justify-content` refers to the **horizontal spacing**: `start` would be all items to the left, `end` would be all items to the right, `center` is everything in the middle, and `space-between` is everything equally spaced apart.

> **Note:** Flex is also capable of reversing rows and columns. In addition to `flex-direction: row`, and `flex-direction: column`, there is also `row-reverse` and `column-reverse`. This would reverse the expectation of `align-items` and `justify-content` as well. For example, `justify-content: start` would be on the right of a `row-reverse` flex container.

**Further reading**: [Flexbox Froggy](https://flexboxfroggy.com/) is a game for learning and practicing Flexbox that might come in handy.

### Flex Container Reference

| Property          | Values                                                                    |
| ----------------- | ------------------------------------------------------------------------- |
| `flex-direction`  | `row`, `column`, `row-reverse`, `column-reverse`                          |
| `flex-wrap`       | `wrap`, `nowrap`                                                          |
| `align-items`     | `flex-start`, `flex-end`, `center`, `stretch`, `baseline`                 |
| `justify-content` | `start`, `center`, `end`, `space-between`, `space-around`, `space-evenly` |

### Wrapping: Create a repeating grid

Often, you might have a bunch of cards or images in a gallery that should be in a repeating grid. By default, with a flex container, the horizontal items will continue forever horizontally.

```html
<section class="flex-container">
   <div>div</div>
   <div>div</div>
   ...
</section>
```

```css
.flex-container {
   display: flex;
}
```

![](../images/repeating.png)

We can make the grid repeat onto as many lines as necessary with `flex-wrap`.

```css
.flex-container {
   display: flex;
   flex-wrap: wrap;
}
```

![](../images/repeating2.png)

This is great. But wait...it only works when the elements have no content. What if I fill them with a lot of text?

![](../images/repeating3.png)

Now this seems pretty useless. But with a tiny bit of flex magic, we can transform it back to a grid:

```css
div {
   flex: 1;
}
```

![](../images/repeating4.png)

So what does `flex: 1` do? It tells all flex items in a container, if they all have it applied, to automatically have an equal height and width. `flex` is another shorthand for three properties: `flex-grow`, `flex-shrink`, and `flex-basis`.

```css
.element {
   flex: 1;
}

/* is the same as */

.element {
   flex-grow: 1;
   flex-shrink: 1;
   flex-basis: 0%;
}

/* flex shorthand */
.element {
   flex: flex-grow flex-shrink flex-basis;
}
```

Two flex elements set to `flex: 1` will both be 50% of the width of the container. Three will both be 33.3333% of the width of the container, and so on.

But this is still kind of random. Keep adding more divs, and once it decides that no more can fit, and to wrap to the next line (if `flex-wrap` is set). Then the element that gets wrapped will now take up 100% of the row.

![](../images/repeating5.png)

What if you always want each element to take up 1/3 of the available horizontal space, regardless of how many flex items there are and what content they contain? You can set the `flex-basis` only, to the width you desire.

```css
div {
   flex: 0 0 33.3333%;
}
```

Remember the Box Model, from earlier? If you have any padding on your flex items, you _must_ have `box-sizing: border-box` for the percentage to be calculated correctly. If that's taken care of, it will correctly calculate each flex item to the proper 33.33333% width of the screen.

But there is one more consideration - if you want gutters in your grid, you'll use margins to separate each item. Since the margins are calculated separately, you'll need to subtract the outer margins from the `flex-basis`. In this example, there's an extra `10px` margin on both sides, so we'll subtract `20px`.

```css
div {
   padding: 15px;
   margin: 10px;
   flex: 0 0 calc(33.3333% - 20px);
}
```

![](../images/repeating6.png)

You can easily make simple grids by either setting the `flex-basis` (setting one to `25%` and one to 75%, for example) or with varying `flex-grow`/`flex-shrink` combinations (`flex: 1` on one element and `flex: 2` on another element would result in a `33.3-%` / `66.6-%` split, respectively).

### Flex Property Reference

| Property      | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| `flex-grow`   | Determines how much a flex item should grow if there's space available       |
| `flex-shrink` | Determines how much a flex item should shrink if there's not space available |
| `flex-basis`  | Defines initial size of flex item                                            |

Finally, there is also an `order` property, in which you can rearrange the order of flex items.

## Responsive: Media Queries

Use [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to make your websites responsive, or adaptive to multiple screen sizes. With media queries, you tell CSS to only apply on screen sizes _below_ a certain width (with `max-width` queries) or _above_ a certain width (with `min-width` queries).

```css
@media screen and (min-width: 800px) {
   /* applies styles to any device screen sizes above 800px wide */
}
```

```css
@media screen and (max-width: 800px) {
   /* applies styles to any device screen sizes below 800px wide */
}
```

If you've ever heard the term **mobile-first**, this refers to building a website for mobile first, and creating `min-width` media queries as necessary as the screen sizes go up.

```css
/* Mobile first styles go here */

@media screen and (min-width: 800px) {
   /* Desktop styles go here */
}
```

It is much easier to design a website mobile-first and scale up as needed, than trying to take a website that is only optimized for desktop and making it mobile-friendly with `min-width` media queries. If you're doing it from scratch, I would recommend starting mobile first and using `min-width` queries, but if you have to quickly make a desktop site work for mobile, it's easier and faster to add `max-width` queries here and there as needed.

All CSS frameworks deal with these different queries, or responsive breakpoints, slightly differently. If we look at [Bootstrap's responsive breakpoints](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints), we can see they have five breakpoints, from extra small to extra large. Personally, I find that having one breakpoint (no breakpoint for mobile, and one for desktop) or two breakpoints (no breakpoint for mobile, one for tablet, and one for desktop) takes care of most of my responsive needs.

Note that `@media` can be nested within a selector. In this example, an `h1` has font size of `28px` by default, but `32px` on larger screen sizes.

```css
h1 {
   font-size: 28px;

   @media screen and (min-width: 800px) {
      font-size: 32px;
   }
}
```

## Otras consideraciones

This article is getting incredibly long, and there's still plenty I haven't covered. Here's a few quick answers and additional resources to the holes in my attempt to cover everything at once.

To get an idea of how I generally like to style my CSS, take a look at [Primitive CSS](https://taniarascia.github.io/primitive/), the CSS/Sass framework I designed a few years ago, which contains a clean Sass setup and sensible defaults. Creating your own CSS framework and grid is a fun, challenging way to really learn CSS, and I highly recommend it!

### When should I style ids, classes, or tags?

My rules are as follows: IDs are exclusively used for JavaScript purposes. To easily target an individual element with JavaScript, you can use an ID, and know that it has no affect on the style. If you wish, you could also "scope" sections of content by nesting everything in an ID, though I don't personally do that.

For tags, _never_ style elements like `main`, `article`, `div`, `section`, `aside`, etc. You should always feel secure that these elements will be unstyled and only denote the type of content they contain. If you wish to add styling to them, create classes like `.container`. I usually give some default styling to `h1` through `h5`, `p`, `ul`, `ol`, `li`, `a`, and `table`.

For most other styling, I use classes. Try to make classes "semantic" by describing what they are, not what they do. For example, having a class called `.app-sidebar` would be acceptable, but having `.bg-white`, `.blue-border`, `.large-text` ultimately becomes difficult to maintain. (A few helper classes, such as the Bootstrap [spacing utilities](https://getbootstrap.com/docs/4.3/utilities/spacing/) can come in handy).

**Further reading**: [The Difference Between ID and Class](https://css-tricks.com/the-difference-between-id-and-class/)

### What should I use for font size - px vs. em vs. rem?

I use pixels (`px`) on borders, and `rem` on all font sizes, padding, and margins. I don't use `em` at all, as using it has more possible unintended consequences on nested elements (although I used `px` on all examples throughout this resource for simplicity and familiarity).

**Further reading**: [Responsive Typography: rem, em, and px](https://www.element84.com/blog/responsive-typography), [Comprehensive Guide: When to Use Em vs Rem](https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984)

### What about Sass? Or LESS?

I prefer to use Sass for all CSS preprocessing, much like the popular CSS framework, [Bootstrap](https://getbootstrap.com/). It also works fantastically out-of-the-box with the JavaScript framework, [Vue](https://vuex.vuejs.org/). LESS is generally less popular and I don't prefer it, but [Ant Design](https://ant.design/) and [Semantic UI](https://semantic-ui.com/) do. You can also use tools like [PostCSS](https://postcss.org/) to compile the latest CSS to something most browsers can understand (much like Babel with ES6).

**Further reading**: [Learn Sass Now: A Guide to Installing and Understanding Sass](/learn-sass-now/)

### What about prefixes?

Browsers have been known to have inconsistencies with each other regarding CSS, and you might see `-webkit`, `-moz`, `-ms`, and `-o` prefixes for various properties that might not work on all browsers, or may have been experimental in some earlier browsers, like so:

```css
.flex {
   display: -webkit-box;
   display: -moz-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;
}
```

Use something like [Autoprefixer](https://github.com/postcss/autoprefixer) with [Webpack](https://webpack.js.org/), [Gulp](https://gulpjs.com/) or [Grunt](https://gruntjs.com/), whatever you may be using for bundling or task running. You should never have to write out or remember prefixes.

### What about CSS grid?

I'll be honest, almost every time I create something in CSS grid, I end up converting it to Flexbox because I find it easier to work with and more intuitive. I didn't cover grid in this article because it's too big of a subject to just tack on at the end. See the further reading for many examples you can play around with.

**Further reading**: [Grid by Example - the examples](https://gridbyexample.com/examples/)

### BEM, OOCSS, SMACSS...how should I structure my CSS?

A lot of people have come up with a lot of solutions on how to structure your CSS - [BEM](http://getbem.com/introduction/), [OOCSS](http://oocss.org/), [SMACSS](http://smacss.com/)...BEM (Block-Element-Modifier) seems to be one of the more popular and prevailing. I personally prefer not to use any of these in specific (and I don't like using underlines in CSS at all).

### What else?

Use numbers (as percents) on `line-height`. I prefer `line-height: 1.2` for headings, and `line-height: 1.6` for font (using the [Golden Ratio](https://pearsonified.com/golden-ratio-typography-intro/)).

You can use the pseudo class/function `:not()` to target every element that doesn't match what you input. Here's a useful one for ensuring all headings, except for the first one in a section, have some extra spacing.

```css
h1:not(:first-child),
h2:not(:first-child),
h3:not(:first-child) {
   margin-top: 2.5rem;
}
```

Always have a `.container` element handy, that looks something like this (`max-width` and `padding` can be changed up to whatever you want).

```css
.container {
   max-width: 1200px;
   padding: 0 15px;
   margin-left: auto;
   margin-right: auto;
}
```

This will make your content pretty responsive by default. You'll have padding around the content on mobile, and the content won't expand too far on desktop screens, and will be horizontally centered (this is what happens when `auto` is applied to both margins).

Don't spread text out too wide. Think about a page in a book; you wouldn't want one page to be too wide, or reading it is oddly stressful. I like to make a small container for text-only, to ensure articles and text aren't too wide.

```css
.small-container {
   max-width: 800px;
   padding: 0 15px;
   margin-left: auto;
   margin-right: auto;
}
```

Use `max-width: 100%` and `height: auto` for responsive images. This way, the image will retain it's original aspect ratio, but resize according to the width of its container.

```css
img.responsive-image {
   max-width: 100%;
   height: auto;
}
```

Finally, I didn't get into transitions and animations, but I think those are overall less important than the concepts I laid out here today.

## Conclusion

I hope this was a useful introduction to all things CSS, from the fundamentals of selectors and specificity, to layouts and positioning. No matter how much you read about and study CSS, I don't think it can feel natural without a lot of practice. I recommend looking at some designs of websites you like and trying to replicate them without looking at the source code.
