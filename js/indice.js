const OPCION = (document.getElementById("dato")); //leer dato

function seleccionar() {

    let opcion = OPCION.value; //tomar valor dato y conversion a JS
    console.log(opcion);

    switch (opcion) {

        case 0:

            window.open('anyo.html?resultado=' + resultado, '_blank');

    }

}