function getHours() {
    const horaElement = document.getElementById("hora")
    const minutosElement = document.getElementById("minutos")
    const segundosElement = document.getElementById("segundos")

    const data = new Date()
    const hours = data.getHours().toString().padStart(2, '0');
    const minutes = data.getMinutes().toString().padStart(2, '0');
    const seconds = data.getSeconds().toString().padStart(2, '0');

    horaElement.innerHTML = `${hours}`;
    minutosElement.innerHTML = `${minutes}`;
    segundosElement.innerHTML = `${seconds}`;
} 
getHours();
setInterval(getHours, 1000);
