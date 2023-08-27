function editarUsuario(idUser)
{
    
    fetch(`/conseguirInfoUsuario?idUser=${idUser}`)
    .then(response => response.json())
    .then(data => {
        let fechaIngresoDetalle = document.getElementById('fechaIngresoDetalle')
        let tipoUsuarioDetalle = document.getElementById('tipoUsuarioDetalle')
        let nroCelularDetalle = document.getElementById('nroCelularDetalle')
        let profesionUsuarioDetalle = document.getElementById('profesionUsuarioDetalle')
        let perfilUsuarioDetalle = document.getElementById('perfilUsuarioDetalle')
        let indUser = document.getElementById('indUser')


        fechaIngresoDetalle.value = data.fechaIngreso
        tipoUsuarioDetalle.value = data.tipoUsuario
        nroCelularDetalle.value = data.nroCelular
        profesionUsuarioDetalle = data.profesionUsuario
        perfilUsuarioDetalle.value = data.perfilUsuario
        indUser.innerHTML = data.idUser
    })
    console.log(idEditar)
    /*
    PREGUNTA 3
    Capturar informacion del usuario desde base de datos y llenar
    inputs dentro de la ventana modal de editar usuario, permiter que
    el usuario pueda editar los datos. No olvida de cargar el ID en el innerHTML
    dentro del elemento H1 cuyo id es cargaId

    Los campos a editar son:
    Nro de celular
    Profesion del usuario

    El resto de campos:
    Nombre
    Apellido
    Email
    Fecha Ingreso
    Colocarlos como solo lectura (propiedad readonly en el tag HTML)
    
    */
}

function actualizarUsuario()
{
    /*
    PREGUNTA 4
    Capturar los datos de los campos input's de la ventana de editar usuario,
    el id del usuario lo puedes capturar de la carga realizada en el elemento
    H1 cuyo id es cargaId. Con los datos capturados postearlos en la base de datos
    y actualizar la informacion del usuario
    */
}