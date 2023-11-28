# Work a bit more with the DOM

## Instructions

Research the DOM a little more by 'adopting' a DOM element. Visit the MDN's [list of DOM interfaces](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) and pick one. Find it being used on a web site in the web, and write an explanation of how it is used.

## Rubric

| Criteria | Exemplary                                     | Adequate                                         | Needs Improvement       |
| -------- | --------------------------------------------- | ------------------------------------------------ | ----------------------- |
|          | Paragraph write-up is presented, with example | Paragraph write-up is presented, without example | No writeup is presented |


##

La interfaz HTMLImageElement representa un elemento de imagen (<img>) en el DOM. Sus propiedades y métodos permiten la manipulación e interacción con elementos de imagen en una página web.

Imaginemos un sitio web con una galería de fotos que carga imágenes dinámicamente cuando un usuario hace clic en una miniatura. La página web crea instancias de HTMLImageElement dinámicamente para cargar y mostrar estas imágenes sin refrescar toda la página. Cuando un usuario hace clic en una miniatura, una función de JavaScript crea un HTMLImageElement, establece su atributo src con la URL de la imagen de tamaño completo y lo añade a la sección de la galería. Esto proporciona una experiencia de usuario fluida y dinámica sin recargar la página.