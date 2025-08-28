let isSingleColumn = false;

function toggleColumnCount() {
    const contenido = document.querySelector('.Contenido');
    if (isSingleColumn) {
        contenido.style.columnCount = '2';
        contenido.style.columnGap = '2rem';
        document.querySelector('.Columnas').textContent = 'Cambiar a 1 columna';
    } else {
        contenido.style.columnCount = '1';
        contenido.style.columnGap = '0';
        document.querySelector('.Columnas').textContent = 'Cambiar a 2 columnas';
    }
    isSingleColumn = !isSingleColumn;
}

function toggleTitle() {
    const titulo = document.querySelector('h1');
    if (titulo.textContent === 'El ensayo sobre la ceguera') {
        titulo.textContent = '"HTML & CSS: Curso práctico avanzado”';
    } else {
        titulo.textContent = 'El ensayo sobre la ceguera';
    }
}

function toggleFontColor() {
    const contenido = document.querySelector('.Contenido');
    const titulo = document.querySelector('.Titulo-Contenido h2');

    if (contenido.style.fontFamily === 'Arial, sans-serif') {
        contenido.style.fontFamily = '';
        titulo.style.color = '#305966';
    } else {
        contenido.style.fontFamily = 'Arial, sans-serif';
        titulo.style.color = 'black';
    }
}


function toggleImage() {
    const portada = document.querySelector('.Portada');
    const nuevaURL = prompt('Ingresa la URL de la nueva imagen:');

    if (nuevaURL && nuevaURL.trim() !== '') {
        portada.src = nuevaURL;
    } else {
        alert('Esa no es una URL válida.');
    }
}  
