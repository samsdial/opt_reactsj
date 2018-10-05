
# React JS // Optime // CKF


##Qué es React


- Conceptos Básicos
- Introducción A JSK
- Componentes React JS
- Props
- State



### Entorno de Desarrollo para el curso

- Instalación de Create react app Según la documentación facebook
- Creating App
- Run App

Installación Global;
```
	npm installl - g create-react-app
```
Run app
```
	create-react-app name-app
	cd name-app 
	npm run

```
### Conceptos Básicos

Introducción de conceptos Basicos de React
Que es:
Libreria de Código Abierto de Javascript
Liberada en Github 2013 por Facebook
las Props y el Stage

#### Caracteristicas

Resumidas en dos conceptos claves

- Declarativo y Basado en componentes.

Indicamos el QUÉ, no el CÓMO
```
// imperativo (Cómo)
Ve a la cocina
Abre la nevera
Coge el Pollo de la nevera.
.. // más pasos
prepara la mesa.
lleva la comida a la mesa.

// declarativo (QUÉ)
Quiero cenar pollo
```
- Basado en componentes

>  - Dividir la interfaz en trozos Pequeños y reusables
>  - Poder crear nuevos componentes
>  - Cada componente encapsula un estado
>  - Código más reusable, pequeño y mantenible

- Programación Reactiva

> Cada componente "Reacciona" y se vuelve a renderizar Cuando  se Produce un Cambio de estado o le llegan nuevas Propiedades.

- Vurtual DOM y diffing

> Genera una copia del árbol de elementos del navegador para solo hacer los mínimos cambios necesarios para reflejar el estado de nuestros componentes. 

- Eventos sintéticos
> - Abstracción de los eventos nativos de los navegadores
> - Compatibilidad cross browsing sin necesidad de más librerías
> - Soporte para todos los eventos que puedas necesitar desde click, doble click, hasta los eventos móviles

- Sever Side Rendering
> - Renderiza tu Aplicación de React en el servidor, perfecto para SEO y performance


### Introducción A JSK

Sintaxis Creada por Facebook, para facilitar la creación de componentes en ReactJS

Js
``` javascript
	conts element = <h1>hello, world</h1>
```
JSK Transpilado
``` javascript
	"use strict";
	var element = React.createElement (
		"h1",
		null,
		"Hello, world"
	)
```


> Written for [samsdial.github](https://github.com/samsdial).
> Written with [StackEdit](https://stackedit.io/).