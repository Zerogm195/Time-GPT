function moverCursorAlFinal(elemento) {
  if (!elemento) return;

  elemento.textContent += "\u00A0";

  elemento.focus();

  // Asegura que funcione en navegadores modernos
  if (typeof window.getSelection !== "undefined" && typeof document.createRange !== "undefined") {
    const rango = document.createRange();
    rango.selectNodeContents(elemento);
    rango.collapse(false); // false colapsa el rango al final del contenido
    
    const seleccion = window.getSelection();
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
  }
}

const meses = {
    1:"enero",
    2:"febrero",
    3:"marzo",
    4:"abril",
    5:"mayo",
    6:"junio",
    7:"julio",
    8:"agosto",
    9:"septiembre",
    10:"octubre",
    11:"noviembre",
    12:"diciembre"
};

//Variables de tiempo
var dia;
var mes;
var ano;
var tiempo = new Date();
var horaActual = tiempo.toLocaleTimeString('es-CO', {hour12: true});
var elementoDiv = document.querySelector("div#prompt-textarea"); //div, falta p

//Calcula la fecha y hora actual
function calcFechaHora(){
    tiempo = new Date();

    dia = tiempo.getDate();
    mes = tiempo.getMonth() + 1;
    ano = tiempo.getFullYear();
    horaActual = tiempo.toLocaleTimeString('es-CO', {hour12: true});
}

//Busca el elemento de la caja de texto de la pagina chatgpt y si esta vacia entonces pone la fecha/hora
async function buscarElementoDiv(elemento) {

    const BelementoM = new MutationObserver(() => {
        calcFechaHora();
        //console.log("Buscando elementoDiv");
        elementoDiv = document.querySelector("div#prompt-textarea");
        
        if (elementoDiv){
            //console.log(`${elementoDiv} Cargado`);
            BelementoM.disconnect()

            //console.log("elementoDiv es V");

            var texto = elementoDiv.querySelector('p');
            if (texto.textContent.trim() == ""){ //Cambio inicial del <p> si esta vacio
                //console.log("Introduciendo fecha y hora por primera vez");
                texto.textContent = `[${dia}/${meses[mes]}/${ano}][${horaActual}]`;
                moverCursorAlFinal(texto)
            }

            //tecla pulsada
            elementoDiv.addEventListener('keydown', (evento) => {
                tecla_presionada = evento.key
                shiftpresionado = evento.shiftKey
                
                //console.log(tecla_presionada,shiftpresionado); //Teclas presionadas
                
                if (tecla_presionada == "Enter" && shiftpresionado == false){ //Busca denuevo <p> que esta dentro del div
                    setTimeout(() => {
                    texto = elementoDiv.querySelector('p');

                    if (texto.textContent.trim() == ""){ //Cambio en el <p> si esta vacio
                        calcFechaHora();
                        //console.log("Introduciendo fecha y hora nuevamente tras mensaje");
                        texto.textContent = `[${dia}/${meses[mes]}/${ano}][${horaActual}]`; 
                        moverCursorAlFinal(texto)

                    }
                    },2000)

            }
                }

            )
            
            //detecta pulsaciones en la caja de texto
            elementoDiv.addEventListener('input', () => {

                texto = elementoDiv.querySelector('p');
                //console.log("Entrando en el eventListener");

            if (texto.textContent.trim() == ""){

                calcFechaHora();
                //console.log("Introduciendo fecha y hora");
            
                texto.textContent = `[${dia}/${meses[mes]}/${ano}][${horaActual}]`;

                moverCursorAlFinal(texto)
                
       
            }
        })
        }

    }) 

    BelementoM.observe(document.body,{childList:true,subtree:true})
}

buscarElementoDiv(elementoDiv)
