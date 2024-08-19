let contenedorImg;
let itemImg
let input;

const form = document.getElementById('formulario')
const total = document.getElementById('total')
const error = document.getElementById('error')
const verificar_letras = /[a-zA-Z]/;

const producto = document.getElementsByClassName('imagen')
for (let item of producto) {
  item.addEventListener('dragstart', productosElegidos)
}

function comprobarProductos (event) {
  event.preventDefault();
  if (total.value == 0) {
    error.innerText = "Error: No hay productos en tu carro de compras"
  }else if(verificar_letras.test(total.value)){
    error.innerText = "Se ha calculado el precio de los productos"
  }
}
function productosElegidos (event) {
  itemImg = event.target;
}

function cambiarImg (event) {
  const contenedorSrc = event.target;
  let totalsum = 0;
  const images = document.querySelectorAll('img[data-price]')
  contenedorSrc.src = itemImg.src
  for(let f = 1; f <= 4; f++) {
    const contenedorenblanco = document.getElementById(`contenedor-imagen-${f}`)
    const chasis = contenedorenblanco.setAttribute('name', "Chasis")
    const discoduro = contenedorenblanco.setAttribute('name', "Disco-duro")
    images.forEach(img => {
      if(contenedorenblanco===contenedorSrc&&contenedorenblanco.getAttribute('name')==="Chasis"){
        console.log("Se detecto un producto");
        const price = parseFloat(img.getAttribute('data-price'))
        console.log(price);
        if(price===1500){
         suma = totalsum += price;
         total.value = 1500
        }else if(contenedorenblanco===contenedorSrc&&contenedorenblanco.getAttribute('name')==="Disco-duro"){
          console.log("Se detecto un producto");
      }else if(price===1000){
        
      }
      } 
    });
  }
}


function consultarProductos () {
  for (let i = 1; i <= 4; i++) {
    contenedorImg = document.getElementById(`contenedor-imagen-${i}`)
    contenedorImg.addEventListener('dragover', e => (e.preventDefault()))
    contenedorImg.addEventListener('drop', cambiarImg)
  }
}
document.addEventListener("dragstart", consultarProductos)

form.addEventListener('submit', comprobarProductos)

