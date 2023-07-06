// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const lista = document.querySelector('.lista-de-productos');
const $entrada = document.querySelector('.input');

for (let i = 0; i < productos.length; i++) {
  var div = document.createElement("div");
  div.classList.add("producto");

  var parrafo = document.createElement("p");
  parrafo.classList.add("titulo");
  parrafo.textContent = productos[i].nombre;
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  div.appendChild(parrafo);
  div.appendChild(imagen);

  lista.appendChild(div);
}

// displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const texto = $entrada.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var div = document.createElement("div");
    div.classList.add("producto");
  
    var parrafo = document.createElement("p");
    parrafo.classList.add("titulo");
    parrafo.textContent = productosFiltrados[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    div.appendChild(parrafo);
    div.appendChild(imagen);
  
    lista.appendChild(div);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  