function downloadPDF() {
    const element = document.getElementById('businessCard');
    const button = document.getElementById('downloadButton');
    button.style.display = 'none'; // Ocultar el botón
   
    html2pdf(element, {
        margin: 1,
        filename: 'tarjeta_presentacion_Juan_Perez.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).then(() => {
        button.style.display = 'block'; // Volver a mostrar el botón
    });
}