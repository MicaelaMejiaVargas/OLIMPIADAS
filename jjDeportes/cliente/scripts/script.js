function cargarProducto(posicion){

    const carrito = document.querySelector("#prod_select");
    const div = document.createElement("div");

    const textoInfo = document.getElementById("textoInfo");
    const btnVaciar = document.querySelector(".noVisible");
    const total = document.querySelector(".total");

    alert("Producto comprado!!")
    div.innerHTML = `
    <h5>${producto[posicion].nombre} $${producto[posicion].precio}</h5>
    `
    carrito.append(div);

    if(textoInfo != null){
        textoInfo.remove();
        // total.remove();
        btnVaciar.style.display = "block";
    }

}

function vaciarCarrito() {
    const carrito = document.getElementById("carrito");
    carrito.innerHTML = `
        <div id="prod_select"></div>
            <p id = "textoInfo">Carrito vacio 😢</p>
        <div class="total">
            <p>Total: <span class="total-price"> $0</span>Ars</p>
        </div>
        <div class="noVisible">
            <button onclick="vaciarCarrito()" type="button" class="btn btn-danger">Vaciar Carrito</button>
        </div>
    `
}

let producto = [ //Estrutura Array
    { //Elemento 1 | posicion 0
        nombre: "ZAPATILLA",
        precio: 13000,
        id: 1 //Dato clave 
    },
    { //Elemento 2 | posicion 1
        nombre: "CAMPERA",
        precio: 12500,
        id: 2
    },
    { //Elemento 3 | posicion 2
        nombre: "RAQUETA",
        precio: 10500,
        id: 3
    },
    { //Elemento 4 | posicion 3
        nombre: "CUERDAS",
        precio: 1000,
        id: 4
    },
    { //Elemento 5 | posicion 4
        nombre: "MEDIAS",
        precio: 12000,
        id: 5
    },
    { //Elemento 6 | posicion 5
        nombre: "PELOTAS",
        precio: 12000,
        id: 6
    }
]