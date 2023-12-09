import startingPalettes from '../../palettes.json';

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageKey = (key) => {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getPalettes = () => {
  return getLocalStorageKey('palettes') || [];
};

export const setPalettes = (palettes) => {
  return setLocalStorageKey('palettes', palettes);
};

export const addPalette = (palette) => {
  const palettes = getPalettes();
  palettes.push(palette);
  setPalettes(palettes);
};

export const initPalettesIfEmpty = () => {
  if (getPalettes().length === 0) {
    setLocalStorageKey('palettes',startingPalettes);
  }
};

export const createPalette = (palette) => {
  const paletteCard = document.createElement('div');
  paletteCard.classList.add('palette-card');

  const title = document.createElement('h3');
  title.innerHTML = palette.title;
  paletteCard.appendChild(title);

  const colorsContainer = document.createElement('div');
  colorsContainer.classList.add('colors-container');

  palette.colors.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorsContainer.appendChild(colorDiv);
  });

  paletteCard.appendChild(colorsContainer);

  const tempLabel = document.createElement('p');
  tempLabel.innerHTML = `Temperature: ${palette.temperature}`
  paletteCard.appendChild(tempLabel);

  return paletteCard;
}
