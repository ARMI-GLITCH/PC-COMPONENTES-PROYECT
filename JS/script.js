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
  const todoslosproductos = document.querySelectorAll("img[id]")
  contenedorSrc.src = itemImg.src  
  for(let f = 1; f <= 4; f++) {
    const contenedorenblanco = document.getElementById(`contenedor-imagen-${f}`)
    if(contenedorenblanco===contenedorSrc){
      console.log("Se detecto un producto");
    }
    for(const img of images){
      const price = parseFloat(img.getAttribute('data-price'))
      const chasis = document.getElementById("chasis")
      const discoduro = document.getElementById('disco-duro')
      if(price===1500&&itemImg===chasis){
        console.log("Se detecto el Chasis");
        const atributo = contenedorenblanco.setAttribute('name', "Chasis") 
      }else if(contenedorenblanco.getAttribute('name')==="Chasis"){
        totalsum += price
        total.value = 1500
      }
      if(price===1000&&itemImg===discoduro){
        console.log("Se detecto el Disco-Duro");
        const atributo = contenedorenblanco.setAttribute('name', "Disco-Duro") 
      }else if(contenedorenblanco.getAttribute('name')==="Disco-Duro"){
        totalsum += price
        total.value = 1000
      }
    }
  }
}

// Utiliza lo ID para verificar los productos


function consultarProductos () {
  for (let i = 1; i <= 4; i++) {
    contenedorImg = document.getElementById(`contenedor-imagen-${i}`)
    contenedorImg.addEventListener('dragover', e => (e.preventDefault()))
    contenedorImg.addEventListener('drop', cambiarImg)
  }
}
document.addEventListener("dragstart", consultarProductos)

form.addEventListener('submit', comprobarProductos)

