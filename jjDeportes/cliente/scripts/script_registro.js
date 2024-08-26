const usuario=document.querySelector('input[name="username"]').value;
console.log(usuario);  
document.getElementById("formulario").addEventListener("submit", async function(event) {
    event.preventDefault();  
    const formData = {
        username: document.querySelector('input[name="username"]').value,
        correo: document.querySelector('input[name="correo"]').value,
        passw: document.querySelector('input[name="passw"]').value,
        accType: document.querySelector('input[name="accType"]:checked').value,
    };
    console.log(formData)
    await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Usuario Creado!");
        document.getElementById("formulario").reset();
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Ha ocurrido un error al crear tu usuario. Intente de nuevo.")
    });
});
