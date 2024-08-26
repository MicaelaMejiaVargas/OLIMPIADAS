document.getElementById("formulario").addEventListener("submit", async function(event){
    event.preventDefault(); 
    const formData = {
        username: document.querySelector('input[name="username"]').value,
        // correo: document.querySelector('input[name="correo"]').value,
        passw: document.querySelector('input[name="passw"]').value,
        // accType: document.querySelector('input[name="accType"]:checked').value,
    };
    await fetch(`http://localhost:3000/user/${formData.username}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // if(data. != formData.username || data.passw != formData.passw){
        //     const msjError=document.querySelector("#oculto");
        //     return msjError.style.display="block";
        // }
        console.log("Success:", data);
        if (data.accType && data.redirect) {  // Si es true, es Vendedor
            window.location.href = "/vendedor_registro_productos.html";
        } else {  // Si es false, es Usuario Común
            if(data.redirect){
                window.location.href = "/usuario_vista_productos.html";
            }
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Ha ocurrido un error al crear tu usuario. Intente de nuevo.")
    });
})