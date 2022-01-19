// DECLARACION DE VARIABLES GLOBALES***********************************************************

var textoIngresado;
var textoEncriptado;
var textoDesencriptado;
var textoCopiado;
var validacion=false;

// VALIDACION DE TEXTO*************************************************************************

function validarTexto(){

  var textoIngresado = document.getElementById("input-texto").value;  
  
    if (/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(textoIngresado)||
        (/[0-9]/.test(textoIngresado))||
        (/[A-Z]/.test(textoIngresado))){
  
          alert("No se permiten caracteres especiales ni mayusculas");    
          validacion=false;
    }

    else if ((textoIngresado=="")){

          alert("Ingrese un mensaje para encriptar / desencriptar");    
          validacion=false;
    }
  
    else{
  
      validacion=true;
      
    }
    }

// ENCRIPTACION**********************************************************************************

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

function encriptar(){

  var textoIngresado = document.getElementById("input-texto").value;

  validarTexto();

    if (validacion==true){

      var textoEncriptado = textoIngresado.replace(/e/g,"enter");
      var textoEncriptado = textoEncriptado.replace(/i/g,"imes");
      var textoEncriptado = textoEncriptado.replace(/a/g,"ai");
      var textoEncriptado = textoEncriptado.replace(/o/g,"ober");
      var textoEncriptado = textoEncriptado.replace(/u/g,"ufat");

      document.getElementById("msg").value = textoEncriptado;
      document.getElementById("input-texto").value = '';

      var titulo = document.querySelector("h2");
      titulo.textContent="Mensaje Encriptado:";

    }
}

// DESENCRIPTACION*********************************************************************************

/* Reglas de encriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras 
*/

function desencriptar() {

    var textoIngresado = document.getElementById("input-texto").value;

    validarTexto();

    if (validacion==true){

        var textoDesencriptado = textoIngresado.replace(/enter/g, "e")
        var textoDesencriptado = textoDesencriptado.replace(/imes/g,"i");
        var textoDesencriptado = textoDesencriptado.replace(/ai/g,"a");
        var textoDesencriptado = textoDesencriptado.replace(/ober/g,"o");
        var textoDesencriptado = textoDesencriptado.replace(/ufat/g,"u");
    
        document.getElementById("msg").value = textoDesencriptado;
        document.getElementById("input-texto").value = '';
        
        var titulo = document.querySelector("h2");
        titulo.textContent="Mensaje Desencriptado:";
        
      }
}
  
// COPIAR******************************************************************************************

function copiar() {

  var textoCopiado = document.getElementById("msg");
  textoCopiado.select();
  navigator.clipboard.writeText(textoCopiado.value);

  var titulo = document.querySelector("h2");
  titulo.textContent="Mensaje Copiado:";
  
}

// EVITAR RECARGA DE FORMULARIO*********************************************************************

function evitarRecarga(event){

  event.preventDefault();
  return false;

}
