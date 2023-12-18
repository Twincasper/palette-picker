import startingPalettes from '../../palettes.json'

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

export const initPalettesIfEmpty = () => {
  const palettes = getPalettes();

  if (palettes.length === 0) {
    setLocalStorageKey('palettes', startingPalettes);
  }
};


export const addPalette = (palette) => {
  const palettes = getPalettes();
  palettes.push(palette);
  setPalettes(palettes);
};

export const removePalette = (uuid) => {
  setPalettes(getPalettes().filter((palette) => palette.uuid !== uuid));
}

