# Angular Components

Este proyecto pretende exponer componentes transversales a los diferentes equipos de desarrollo web siguiendo los lineamientos del sistema de diseño Bancolombia.

## Como contribuir
Para crear un nuevo componente debe tener en cuenta las siguientes definiciones.

### Nomenclatura del componente

Todo componente debe ser antecedido por la siglas bc continuar con el  estándar Bancolombia de la homologación del componente que se pretende construir (La homologación se puede encontrar [aquí](https://grupobancolombia.visualstudio.com/Vicepresidencia%20Servicios%20de%20Tecnolog%C3%ADa/_wiki/wikis/Vicepresidencia%20Servicios%20de%20Tecnolog%C3%ADa.wiki/8125/Homologaci%C3%B3n-de-componentes) ).

Por ejemplo 

- bc-chk-web

#### Estilos
Se debe usar SCss en cada componente a crear.

Todo componente debe usar los colores definidos en la clase de estilos ubicado en shared.

### Soporte Plataforma

Los componentes deben ser consistentes entre los siguientes navegadores web respetando las versiones minimas de estas.

- Chrome            >= 43
- Mozilla           >= 38
- Safari            >= 8
- Opera             >= 43
- Internet Explorer >= 10
- Microsoft Edge

### Documentacion

#### JSDoc

Cada componente de la libreria debe estar debidamente documentado con JSDoc, para facilitar el uso de este.

Guia:
[JSDoc link](https://jsdoc.app/)

Todo modulo debe tener.

- Descripción del componente.
- Argumentos de entrada.
- Ejemplo de su implementacion.
- Advertencias si aplica.


Ademas se debe implementacion en el index del proyecto (app.component.html) junto con su codigo fuente.




