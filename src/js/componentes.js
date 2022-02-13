
import '../css/componentes.css';
//import evento_1 from '../assets/img/evento_1.jpg';

export const saludar = ( nombre = 'Sin nombre' ) => {
    console.log("Creando Etiqueta h4");
    const h4 = document.createElement("h4");
    h4.innerText = `Hola, ${nombre} !!`;
    document.body.append(h4);
}

export const crearImagen = ()=>{
    const img = document.createElement("img");
    img.src = './assets/img/evento_1.jpg';
    img.classList = "img-1";
    document.body.append(img);
}



