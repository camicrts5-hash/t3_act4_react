# Actividad 4: Mini Aplicación en React (`t3_act4_react`)

Aplicación web desarrollada en **React** con **Vite**, implementando componentes funcionales, paso de propiedades (`props`), gestión de estado con hooks (`useState`), renderizado de listas dinámicas mediante `.map()`.

---

## Componentes del Proyecto

1. **`TarjetaPerfil`**: Componente que recibe datos estáticos del estudiante a través de **Props** (Nombre, Carrera, etc.) para mostrarlos en una tarjeta con diseño personalizado.
2. **`ContadorLikes`**: Componente interactivo que utiliza el hook **`useState`** para llevar el conteo dinámico de "Me gusta" y permitir reiniciar el contador.
3. **`ListaMaterias`**: Componente que renderiza una lista de asignaturas de la carrera utilizando arreglos de objetos, el método `.map()` y el uso obligatorio de **`key`** para optimizar el DOM virtual.

---

## Cuestionario de la Práctica.

- **a) ¿Qué diferencia hay entre props y state en React?**
  Las *props* (propiedades) son datos que se envían desde un componente padre a un componente hijo y son de solo lectura para este último. En cambio, el *state* (estado) es un dato interno gestionado y mutable dentro del propio componente; cuando el estado cambia, React vuelve a renderizar el componente de forma automática para actualizar la interfaz gráfica.

- **b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**
  La propiedad `key` funciona como un identificador único que permite a React rastrear qué elementos de una lista han cambiado, se han agregado o se han eliminado. Esto optimiza de forma clave el rendimiento del DOM virtual y previene errores visuales o comportamientos inesperados en pantalla.

- **c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.**
  `useState` es un Hook que nos permite agregar y controlar un estado interno en un componente funcional. Devuelve una variable con el valor actual y una función para actualizarlo. Lo utilicé en el componente `ContadorLikes` para almacenar el número de clics y actualizar la vista cada vez que el usuario presiona el botón "Dar Like".

---

## Enlaces del Proyecto

- **Repositorio de GitHub:** [https://github.com/camicrts5-hash/t3_act4_react](https://github.com/camicrts5-hash/t3_act4_react)
- **Sitio Web Desplegado (GitHub Pages):** [https://camicrts5-hash.github.io/t3_act4_react/](https://camicrts5-hash.github.io/t3_act4_react/)