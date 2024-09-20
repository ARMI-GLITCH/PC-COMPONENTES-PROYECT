let contenedorImg;
let itemImg
let input;
let contenedor;

document.getElementById('recuperar').addEventListener('click', recuperar)
document.getElementById('borrar').addEventListener('click', borrar)

function recuperar () {
  const obtener = localStorage.getItem('tusproductos');
  console.log(obtener);
  if (obtener) {
    alert(`Se pudo recuperar:${obtener}`)
    const objeto = JSON.parse(obtener);
    const content1 = document.getElementById(`contenedor-imagen-1`)
    const producto = objeto[0].producto;
    content1.src = producto;
    const content2 = document.getElementById(`contenedor-imagen-2`)
    const producto2 = objeto[1].producto;
    content2.src = producto2;
    const content3 = document.getElementById(`contenedor-imagen-3`)
    const producto3 = objeto[2].producto;
    content3.src = producto3;
    const content4 = document.getElementById(`contenedor-imagen-4`)
    const producto4 = objeto[3].producto;
    content4.src = producto4;
  } else {
    alert(`No se puede recuperar:${obtener}`)
  }
}

function borrar () {
  const obtener = localStorage.getItem('tusproductos');
  if (obtener) {
    localStorage.removeItem('tusproductos')
    alert(`Tu borraste:${obtener}`)
  } else {
    alert(`No se puede borrar:${obtener}`)
  }
}


const form = document.getElementById('formulario')
const total = document.getElementById('total')
const error = document.getElementById('error')
const verificar_letras = /[a-zA-Z]/;


const producto = document.getElementsByClassName('imagen')
for (let item of producto) {
  item.addEventListener('dragstart', productosElegidos)
}

function comprobarProductos (event) {
  if (total.value == 0) {
    event.preventDefault();
    error.innerText = "Error: No hay productos en tu carro de compras"
  } else if (verificar_letras.test(total.value)) {
    console.log("Se ha calculado el precio de los productos");
  }
}

function productosElegidos (event) {
  itemImg = event.target;
}

function cambiarImg (event) {
  const contenedorSrc = event.target;
  contenedorSrc.src = itemImg.src;
  const images = document.querySelectorAll('img[data-price]')
  for (let img of images) {
    const chasis = document.getElementById('chasis')
    const discoduro = document.getElementById('discoduro')
    const disipadores = document.getElementById('disipadores')
    const fuentedealimentacion = document.getElementById('fuentedealimentacion')
    const memoriaram = document.getElementById('memoriaram')
    const placabase = document.getElementById('placabase')
    const procesador = document.getElementById('procesador')
    const tarjetadered = document.getElementById('tarjetadered')
    const value_of_dataprice = parseFloat(img.getAttribute('data-price'))
    if (itemImg === chasis && value_of_dataprice === 1500) {
      console.log("Se detecto el Chasis");
      contenedorSrc.setAttribute('data-price', "1500");
      sumarproductos()
      return;
    }
    if (itemImg === discoduro && value_of_dataprice === 1000) {
      console.log("Se detecto el Disco Duro");
      contenedorSrc.setAttribute('data-price', "1000");
      sumarproductos()
      return;
    }
    if (itemImg === disipadores && value_of_dataprice === 1800) {
      console.log("Se detecto los Disipadores");
      contenedorSrc.setAttribute('data-price', "1800");
      sumarproductos()
      return;
    }
    if (itemImg === fuentedealimentacion && value_of_dataprice === 800) {
      console.log("Se detecto el Fuente de Alimentacion");
      contenedorSrc.setAttribute('data-price', "800");
      sumarproductos()
      return;
    }
    if (itemImg === memoriaram && value_of_dataprice === 1250) {
      console.log("Se detecto la Memoria Ram");
      contenedorSrc.setAttribute('data-price', "1250");
      sumarproductos()
      return;
    }
    if (itemImg === placabase && value_of_dataprice === 2000) {
      console.log("Se detecto la Placa Base");
      contenedorSrc.setAttribute('data-price', "2000");
      sumarproductos()
      return;
    }
    if (itemImg === procesador && value_of_dataprice === 1780) {
      console.log("Se detecto el Procesador");
      contenedorSrc.setAttribute('data-price', "1780");
      sumarproductos()
      return;
    }
    if (itemImg === tarjetadered && value_of_dataprice === 1300) {
      console.log("Se detecto la Tarjeta de Red");
      contenedorSrc.setAttribute('data-price', "1300");
      sumarproductos()
      return;
    }
  }
}

function sumarproductos () {
  contenedores = [
    "contenedor-imagen-1",
    "contenedor-imagen-2",
    "contenedor-imagen-3",
    "contenedor-imagen-4"
  ]

  let totalsum = 0;

  for (const id of contenedores) {
    const media = /Media\/.*\.jpg$/
    const contenedor = document.getElementById(id)
    const srcatributo = contenedor.getAttribute('src')
    const precio = parseFloat(contenedor.getAttribute("data-price"))
    totalsum += precio
    if (srcatributo && media.test(srcatributo)) {
      let guardar = localStorage.getItem('tusproductos')
      let productos;
      if (guardar === null) {
        productos = [];
      } else {
        productos = JSON.parse(guardar);
      }
      
      let tusproductos = {
        producto: srcatributo,
        producto_precio: precio,
        contenedorId: id
      }
      

      const updateProduct = productos.findIndex((product) => product.contenedorId === id);
      if (updateProduct != -1) {
        productos[updateProduct].producto = srcatributo
        productos[updateProduct].producto_precio = precio
      } else {
        productos.push(tusproductos);
      }

      localStorage.setItem('tusproductos', JSON.stringify(productos))
    }
  }
  total.value = totalsum
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

