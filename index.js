function calcularPrecioConDescuento (precio, descuento) {
    const precioConDescuento =  (precio * descuento) / 100;
    return precioConDescuento;
  }
  
  
  function onClickButtonPriceDiscount() {  //  Llamada de la function con el boton creado en html paara sacarnos el resultado
  const inputPrice = document.getElementById("InputPrice"); // El input del precio interactuado con el id del html
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount"); // El input del descuento interactuado con el id del html
  const discountValue = inputDiscount.value;
  const dinero = document.getElementById("moneda");  // el select de la moneda interractuando con html
  const dineroValue = dinero.value;
  
  const precioConDescuento =  calcularPrecioConDescuento(priceValue, discountValue);   // Aquí llamamos la function de la operación arriba realizada
  const ResultPrice = document.getElementById("ResultPrice");   // interactuamos con el espacio que hemos creado en html para sacar el resultado
  ResultPrice.innerText = `Tienes que pagar:   ${precioConDescuento }  ${dineroValue} de diezmo`;
  
  }
  console.log(PrecioConDescuento(10000,10))