import '/src/style.css';
import { v4 as uuidv4 } from 'uuid';
import { createPalette } from './local-storage-utils';

console.log("hello world");
document.querySelector("#app").innerHTML += '<h1>Hello world</h1>';


const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const formObj = Object.fromEntries(formData.entries());

  const newPalette = {
    uuid: uuidv4(),
    title: formObj.title,
    colors: [formObj.color1, formObj.color2, formObj.color3],
    temperature: formObj.temperature
  };
  const paletteElement = createPalette(newPalette);
  document.querySelector('#palettes-list').appendChild(paletteElement);
  event.target.reset();
}

const form = document.querySelector('#palette-form');
form.addEventListener('submit', handleSubmit);