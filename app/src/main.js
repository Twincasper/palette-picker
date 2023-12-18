import './style.css';
import { v4 as uuidv4 } from 'uuid';
import { getPalettes, setPalettes, initPalettesIfEmpty, addPalette, removePalette } from './modules/local-storage-utils.js';
import startingPalettes from '../palettes.json';

const renderPalettes = () => {
  // const {title, temperature, colors, uuid} = startingPalettes;
  // const li = document.createElement('li');
  // li.innerHTML = `${uuid}, ${title}, ${temperature}, ${colors}`;
  // document.querySelector('#app').append(li);
}

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
  
  addPalette(newPalette);
  renderPalettes();

  event.target.reset();
};

const form = document.querySelector('#palette-form');
const main = () => {
  initPalettesIfEmpty();
  form.addEventListener('submit', handleSubmit);

};

main();