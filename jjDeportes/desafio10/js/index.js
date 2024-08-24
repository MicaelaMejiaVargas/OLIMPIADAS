// const botones = document.querySelectorAll(".btnComprar");
// console.log(botones);

// for(btn of botones){
//     console.log(btn)
//     btn.addEventListener("click" , function(){
//         alert("Producto comprado!!")
//     })
// }

function cargarProducto(posicion){

    const carrito = document.querySelector("#carrito");
    const div = document.createElement("div");

    const textoInfo = document.getElementById("textoInfo");
    const btnVaciar = document.querySelector(".noVisible")

    if(textoInfo != null){
        textoInfo.remove();
        btnVaciar.style.display = "block";
    }


    console.log(div)
    alert("Producto comprado!!")
    div.innerHTML = `
    <h4>${producto[posicion].nombre}</h4>
    <h4>${producto[posicion].precio}</h4>
    `
    carrito.appendChild(div);
}

function vaciarCarrito() {
    const carrito = document.getElementById("carrito");
    carrito.innerHTML = `
        <p id="textoInfo">Carrito vacio 😢</p> 
        <div class="noVisible">
            <button onclick="vaciarCarrito()" type="button" class="btn btn-danger">Vaciar</button>
        </div>
    `
}

let producto = [ //Estrutura Array
    { //Elemento 1 | posicion 0
        nombre: "Camiseta de argentina",
        precio: 13000,
        marca: "",
        talle: "M",
        color: "Celeste",
        stock: 6,
        descripcion: "...",
        id: 1 //Dato clave 
    },
    { //Elemento 2 | posicion 1
        nombre: "Camiseta de portugal",
        precio: 12500,
        marca: "",
        talle: "S",
        color: "Verde",
        stock: 16,
        descripcion: "...",
        id: 2
    },
    { //Elemento 3 | posicion 2
        nombre: "Camiseta suplente de brasil",
        precio: 10500,
        marca: "",
        talle: "M",
        color: "azul",
        stock: 16,
        descripcion: "...",
        id: 3
    },
    { //Elemento 3 | posicion 2
        nombre: "Camiseta de inglaterra",
        precio: 12000,
        marca: "",
        talle: "M",
        color: "azul",
        stock: 16,
        descripcion: "...",
        id: 4
    }
]