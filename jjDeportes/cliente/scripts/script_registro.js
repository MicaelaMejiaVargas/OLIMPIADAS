document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    const formData = new FormData(this);

    fetch("http://localhost:3000/user/", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
        alert("Usuario Creado con Éxito!")
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Ha ocurrido un error al crear tu usuario. Intente de nuevo.")
    });
});
