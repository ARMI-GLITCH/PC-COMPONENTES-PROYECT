const comprobar=document.getElementById('formulario')
const total=document.getElementById('total')

function comprobarProductos(event){
  event.preventDefault();
  if(total.value.length=="0"){
    console.log('Error: el carro de compras esta vacio')
  }
}

comprobar.addEventListener('submit', comprobarProductos)