// Nombre del cliente

let nombreClienteHTML = document.querySelector(".nombre-cliente");

const nombre = `nombre del cliente`; // Agregar

nombreClienteHTML.innerHTML = nombre;

// Telefono (siempre debe llevar codigo del pais)
const telefono = `+50689545745`; // Agregar 

const numeroDeTelefono = document.querySelector(".fa-phone");
numeroDeTelefono.href = `tel:${telefono}`;

// Email
const email = `cliente@gmail.com`;

const urlEmail = `mailto:${email}`
const enlaceEmail = document.querySelector(".fa-envelope");
enlaceEmail.href = urlEmail;

// Whatsapp
const mensaje = `¡Hola ${nombre}! Quiero información sobre tus servicios`;

const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

const enlaceWhatsapp = document.querySelector('.fa-whatsapp');
enlaceWhatsapp.href = urlWhatsapp;

// Facebook 
const urlFacebook = ``; // Agregar

const enlaceFacebook = document.querySelector(".fa-facebook-f");
enlaceFacebook.href = urlFacebook;

// Instagram
const urlInstagram = ``; // Agregar

const enlaceInstagram = document.querySelector(".fa-instagram");
enlaceInstagram.href = urlInstagram;

// LinkedIn
const urlLinkedin = ``; // Agregar

const enlaceLinkedin = document.querySelector(".fa-linkedin");
enlaceLinkedin.href = urlLinkedin;

// Behance
const urlBehance = ``; // Agregar

const enlaceBehance = document.querySelector(".fa-behance");
enlaceBehance.href = urlBehance;

// Twitter
const urlTwitter = ``; // Agregar

const enlaceTwitter = document.querySelector(".fa-twitter");
enlaceTwitter.href = urlTwitter;