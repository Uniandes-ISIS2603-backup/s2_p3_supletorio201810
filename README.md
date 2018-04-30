# supletorio_p3_201810

Clone el proyecto a su máquina y cargue en netbeans los proyectos S2_parte1 y S2_parte2.

# Parte 1

Diríjase al proyecto S2_parte1 y revise el archivo index.html, verifique los recursos que está cargando y su estructura.

## Punto 1 (HTML): 25%:
Usted debe escribir el html del documento index.html que permita mostrar su perfil como estudiante, similar a como se presenta en la imagen S2_resultadoParte1 pero utilizando sus datos. Nota: similar indica que se debe mantener la estructura pero fuente y tamaños pueden no ser iguales. El alcance en este punto es hasta el título "Cursos Actuales", el listado de cursos se presentará siguiendo los pasos del punto 3.
La dirección de la imagen del ejemplo es:  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sJrw1N2xdTpV05KS-6U59Le7cyQbBSrS7ff_oooEsMnq4KtA-A

## Punto 2 (CSS): 15%
Usted debe agregar un estilo al HTML para que se presenten en color azul los textos: nombre de estudiante, "Datos personales" y "Cursos Actuales", los subtitulos deben presentarse en color gris y los datos que usted suministra al igual que el resto del contenido debe ser el color por defecto. Para este punto DEBE hacer uso del archivo styles.css.

## Punto 3 (JavaScript): 25%

* 20% Escriba en el archivo scripts.js una función que retorne el código html que contenga la tabla de sus cursos con la cantidad de créditos, y posteriormente el total de créditos (siga el ejemplo de la imagen S2_resultadoParte1) La función se debe llamar desplegarInformacion(). En el archivo script.js encontrará el objeto la lista que debe utilizar para este punto. Nota: tenga presente que la tabla puede ser más grande o pequeña en el momento de hacer pruebas.
Para ver el resultado agregue en el código del punto 1 debajo del texto "Cursos Actuales" el siguiente código:
```<p id="punto3a"></p>```

* 5%  Agregue debajo de todo el contenido:
```<hr> <p id="punto3b"></p>```
En la zona de <script> agregue una instrucción para que se despliegue el código de la función que definió en el punto 3a. 

**Nota:** No olvide modificar al final el título de la página con su usuario uniandes

## Parte 2

Diríjase al proyecto S2_parte2 y revise el archivo index.html, verifique los recursos que está cargando y su estructura. Observará que el archivo index se encuentra completo, al igual que el archivo mod.js.  

## Punto 1: 15%
Cree el archivo cities.ctrl.js para que realice la carga de los datos desde el archivo 'src/data/ciudades.json' y los ponga en el scope haciendo uso de $http.

## Punto 2: 20%
Escriba el html que permita desplegar la lista de ciudades (cargadas en el scope) por país como se muestra en la imagen S2_resultadoParte2. 
Solo tiene que escribir el html correspondiente en el archivo cities.list.html todo lo demás está dado.

Genere un release y envíe un correo a su profesor con el link de su repositorio y el nombre del release. No se recibirán releases posteriores a la hora acordada con el profesor.