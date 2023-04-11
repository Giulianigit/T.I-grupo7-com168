

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros
    
}
//valdacion nombre
const validarFormulario= (e) => { switch  (e.target.name) 
    { case "nombre":
        if (expresiones.nombre.test (e.target.value)) 
        { document.getElementById ("grupo--nombre").classList.remove("formulario--grupo-incorrecto");
            document.getElementById ("grupo--nombre").classList.add("formulario--grupo-correcto");} 
            else {document.getElementById ("grupo--nombre").classList.add("formulario--grupo-incorrecto");}
    break;
    case "apellido":
        if (expresiones.apellido.test (e.target.value)) 
        { document.getElementById ("grupo--apellido").classList.remove("formulario--grupo-incorrecto");
            document.getElementById ("grupo--apellido").classList.add("formulario--grupo-correcto");} 
            else {document.getElementById ("grupo--apellido").classList.add("formulario--grupo-incorrecto");}
    break;
    case "telefono":
        if (expresiones.telefono.test (e.target.value)) 
        { document.getElementById ("grupo--telefono").classList.remove("formulario--grupo-incorrecto");
            document.getElementById ("grupo--telefono").classList.add("formulario--grupo-correcto");} 
            else {document.getElementById ("grupo--telefono").classList.add("formulario--grupo-incorrecto");}
    break;
    case "email":
        if (expresiones.email.test (e.target.value)) 
        { document.getElementById ("grupo--email").classList.remove("formulario--grupo-incorrecto");
            document.getElementById ("grupo--email").classList.add("formulario--grupo-correcto");} 
            else {document.getElementById ("grupo--email").classList.add("formulario--grupo-incorrecto");}
    break;
}}

    
    
    
    

inputs.forEach((input)=> {
input.addEventListener("keyup",validarFormulario);
input.addEventListener("blur",validarFormulario);
});
formulario.addEventListener("submit", (e) => {e.preventDefault});


//esto no es mio
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}


