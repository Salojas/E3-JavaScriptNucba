const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


//LLAMADO A HTML
const input = document.getElementById("contenedorInput");
const btn = document.getElementById("btnBusqueda");
const span = document.getElementById("cardSpan");


//FUNCION CREADORA



btn.addEventListener("click", () => {
  
  const ingreso = parseInt(input.value);

  if(isNaN(ingreso)) {
    mostrarError('Por favor ingresa un numero');
    return
  } 
  const pizza = pizzas.find(pizza => pizza.id == ingreso);
  if(pizza){ 
    mostrarPizza(pizza);
  } else if (pizza) {
    mostrarPizza(pizza);
    localStorage.setItem("pizza", JSON.stringify(pizza))
  } else{
    mostrarError("No tenemos pizza con ese numero de ID.")
  }
})

function mostrarPizza(pizza){
  const cardHTML =`
    <article>
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
      <h2>${pizza.nombre}</h2>
      <p>$${pizza.precio}</p>       
    </article>
    `
    span.innerHTML = cardHTML;
}

function mostrarError(mensaje){
  span.innerHTML = `<p>${mensaje}</p>`;
  
}


































