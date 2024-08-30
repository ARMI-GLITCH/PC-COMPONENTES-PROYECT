let contenedorImg;
let itemImg
let input;
let contenedor;

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
  let total = 0;
  contenedorSrc.src = itemImg.src;
  console.log(contenedorSrc);
  
  const images = document.querySelectorAll('img[data-price]')
  for (let j = 1; j <= 4; j++) {
    const contenedorenblanco = document.getElementById(`contenedor-imagen-${j}`)
    const price = parseFloat(contenedorenblanco.getAttribute("data-price"))
    for (let img of images) {
      const chasis =  document.getElementById('chasis')
      const discoduro = document.getElementById('discoduro')
      const value_of_dataprice = parseFloat(img.getAttribute('data-price'))
      if(itemImg===chasis&&value_of_dataprice===1500){
        console.log("Se detecto el Chasis");
        let atributo = contenedorSrc.setAttribute('data-price', "1500");
        return;
      }
      if(itemImg===discoduro&&value_of_dataprice===1000){
        console.log("Se detecto el Disco Duro");
        let atributo = contenedorSrc.setAttribute('data-price', "1000")
        return;
      }
    }
  }
}

// Le pones un atributo a el contenedor en blanco para darle un pinche valor

function consultarProductos () {
  for (let i = 1; i <= 4; i++) {
    contenedorImg = document.getElementById(`contenedor-imagen-${i}`)
    contenedorImg.addEventListener('dragover', e => (e.preventDefault()))
    contenedorImg.addEventListener('drop', cambiarImg)
  }
}
document.addEventListener("dragstart", consultarProductos)

form.addEventListener('submit', comprobarProductos)

