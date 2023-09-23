

console.log('homepage.js')

function quitarEnlarged(event){
    const contenedor = event.target;

    if (contenedor.classList.contains('enlarged')){
        contenedor.classList.remove('enlarged');
    }

}

function enfocarImagen(event){
    // acceder al padre del event

    const contenedor = event.target.parentNode;

    if (!contenedor.classList.contains('enlarged')){
        // contenedor.classList.remove('enlarged');
        contenedor.classList.add('enlarged');
        return;
    }
}

var formulario = document.getElementById('contact-form');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submit');
    document.getElementById('contact-form').reset();
    document.getElementById('submit-msg').style.display = 'block';
});

// Si clickea una imagen, que se ponga en el centro y se agrande

var enlarged = document.querySelectorAll('.enlarged');
enlarged.forEach((item) => {
    item.addEventListener('click', () => {
        console.log('click enlarged');
        item.classList.remove('enlarged');
    });
})
var images = document.querySelectorAll('.image-container');
images.forEach((item) => {
    const img = item.querySelector('img');
    
    img.addEventListener('click', enfocarImagen)
    item.addEventListener('click', quitarEnlarged)
})
