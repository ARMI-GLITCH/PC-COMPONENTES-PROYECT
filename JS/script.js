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
  contenedorSrc.src = itemImg.src;
  const images = document.querySelectorAll('img[data-price]')
  for (let j = 1; j <= 4; j++) {
    const contenedorenblanco = document.getElementById(`contenedor-imagen-${j}`)
    for (let img of images) {
      const chasis =  document.getElementById('chasis')
      const discoduro = document.getElementById('discoduro')
      const disipadores = document.getElementById('disipadores')
      const fuentedealimentacion = document.getElementById('fuentedealimentacion')
      const memoriaram = document.getElementById('memoriaram')
      const placabase = document.getElementById('placabase')
      const procesador =  document.getElementById('procesador')
      const tarjetadered = document.getElementById('tarjetadered')
      const value_of_dataprice = parseFloat(img.getAttribute('data-price'))
      if(itemImg===chasis&&value_of_dataprice===1500){
        console.log("Se detecto el Chasis");
        let atributo = contenedorSrc.setAttribute('data-price', "1500");
        sumarproductos()
        return;
      }
      if(itemImg===discoduro&&value_of_dataprice===1000){
        console.log("Se detecto el Disco Duro");
        let atributo = contenedorSrc.setAttribute('data-price', "1000");
        sumarproductos()
        return;
      }
      if(itemImg===disipadores&&value_of_dataprice===1800){
        console.log("Se detecto los Disipadores");
        let atributo = contenedorSrc.setAttribute('data-price', "1800");
        sumarproductos()
        return;
      }
      if(itemImg===fuentedealimentacion&&value_of_dataprice===800){
        console.log("Se detecto el Fuente de Alimentacion");
        let atributo = contenedorSrc.setAttribute('data-price', "800");
        sumarproductos()
        return;
      }
      if(itemImg===memoriaram&&value_of_dataprice===1250){
        console.log("Se detecto la Memoria Ram");
        let atributo = contenedorSrc.setAttribute('data-price', "1250");
        sumarproductos()
        return;
      }
      if(itemImg===placabase&&value_of_dataprice===2000){
        console.log("Se detecto la Placa Base");
        let atributo = contenedorSrc.setAttribute('data-price', "2000");
        sumarproductos()
        return;
      }
      if(itemImg===procesador&&value_of_dataprice===1780){
        console.log("Se detecto el Procesador");
        let atributo = contenedorSrc.setAttribute('data-price', "1780");
        sumarproductos()
        return;
      }
      if(itemImg===tarjetadered&&value_of_dataprice===1300){
        console.log("Se detecto la Tarjeta de Red");
        let atributo = contenedorSrc.setAttribute('data-price', "1");
        sumarproductos()
        return;
      }
    }
  }
}

function sumarproductos(){
  contenedores = [
    "contenedor-imagen-1",
    "contenedor-imagen-2",
    "contenedor-imagen-3",
    "contenedor-imagen-4"
  ]
  
  let totalsum = 0;

  for (const id of contenedores) {
    const contenedor = document.getElementById(id)
    const precio = parseFloat(contenedor.getAttribute("data-price"))
    totalsum += precio
  }
  console.log(totalsum);
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

