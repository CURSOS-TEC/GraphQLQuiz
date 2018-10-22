
#Quiz de exposición GraphQL
<div style="aling: center; background: red;">
  
<a  href="#"><img height="200" src="https://www.tec.ac.cr/sites/default/files/media/branding/logo-tec.png" title="" alt=""></a>
</div>
<!-- [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) -->


# Quiz par el curso de SOA4ID: GraphQL

>QuizGraphQL

> Exposición sobre GraphQL

> TEC, GraphQL, Node, JSON

- Juan Esteban Navarro Camacho
- Tecnológico de Costa Rica
- Curso: SOA4ID
---

## Tabla de contenidos 

- [Descripción] (#descripción)
- [Instalación](#installation)
- [Artefactos] (#)
- [Funcionalidades](#features)

## Descripción

Se realiza una prueba concelptual del uso de GraphQL en un entorno de Node Js como servidor web y del consumo de datos de un objecto JSON.

## Instalación
  Dentro de la carpeta del repositorio clonado ejecutar el comando:
  
  
```bash
  mpm install
```


## Artefactos

Función       | Descripcción
------------- | -------------
 allsports    | Obtiene todos los deportes
 sports       | Obtiene todos los deportes de una misma categoría
 updateSportCategory | Modifica la categoría de un objeto
 updateSportIcon | Modifica el ícono de deportes de una misma categoría

## Pruebas
### Obtener todos los "Sports"

La función Query para obtener todos los sports:
```javascript
query getAllSports {
  allsports {
    soaId
    title
    description
    icon
  }
}

```

### Obtener un "Sports"

La función Query para obtener todos los sports:
```javascript
query getSingleSport($sportID: Int!) {
  sport(id: $sportID) {
    soaId
    title
    description
  }
}

}

```
En la sección de "Query variables"

```{
sportID = 1
}
```

### Modificar la categoría de un deporte

La función Query para obtener todos los sports:
```javascript

mutation updateSport($sportID: Int!, $category: String!) {
  updateSportCategory(id: $sportID, category: $category) {
    ...SoaSport
  }
}

}

```
En la sección de "Query variables"

```{
sportID = 1,
category ="Prueba"
}
```


### Modificar el ícono de los deportes de una misma categoría.
sports
La función Query para obtener todos los sports:
```javascript

mutation setSportIcon( $category: String!,$icon: String!) {
  updateSportIcon(category: $category, icon:$icon) {
    ...SoaSport
  }
}
}

```
En la sección de "Query variables"

```{
icon = "new icon"
category ="Prueba"
}
```

## Referencia:
https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1

