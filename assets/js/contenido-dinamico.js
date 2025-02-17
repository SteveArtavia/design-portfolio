// Nombre del cliente

let nombreClienteHTML = document.querySelector(".nombre-cliente");

const nombre = `nombre del cliente`;

nombreClienteHTML.innerHTML = nombre;

// Contacto Whatsapp
const telefono = ``;
const mensaje = `¡Hola ${nombre}! Quiero información sobre tus servicios`;
const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

const enlaceWhatsapp = document.querySelector('.fa-whatsapp');
enlaceWhatsapp.href = url;