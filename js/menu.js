const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Boton de WhatsApp
document.getElementById("whatsapp1").addEventListener("click", function() {
    const numeroGuatemala = "50259958008";
    const mensaje = " ";  
    const url = `https://wa.me/${numeroGuatemala}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
});

//Agregar Contacto
document.getElementById("btnContacto").addEventListener("click", function() {
    let vcard = `BEGIN:VCARD
VERSION:3.0
FN:Lic. Julio Morales
TEL;TYPE=CELL:+50259958008
EMAIL:jmoralesconsorciolegalmp@gmail.com
END:VCARD`;


    let blob = new Blob([vcard], { type: "text/vcard" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "LicJulioMorales.vcf"; 
    a.click();

    URL.revokeObjectURL(url);
    });


//Waze
function openWaze() {
    const address = encodeURIComponent('Géminis 10-12, Zona 10, Guatemala');
    const appUrl = `waze://?q=${address}&navigate=yes`;
    const webUrl = `https://www.waze.com/es/live-map/directions/geminis-10-12-calle-zona-10,-guatemala?navigate=yes&to=place.w.176619666.1766131124.388513`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // Redirigir a la app
        window.location = appUrl;

        // Si la app no existe, abrir la web después de 2 segundos
        setTimeout(() => {
            window.location = webUrl;
        }, 2000);
    } else {
        // En escritorio abrir la web directamente
        window.open(webUrl, '_blank');
    }
}

//Gmail
function openMail() {
    const email = "jmoralesconsorciolegalmp@gmail.com";
    const subject = encodeURIComponent("Consulta legal");
    const body = encodeURIComponent("Estimado Licenciado, ...");

    const appUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    const webUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        window.location = appUrl;

        setTimeout(() => {
            window.open(webUrl, "_blank");
        }, 2000);
    } else {
        window.open(webUrl, "_blank");
    }
}