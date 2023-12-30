const ID = "3d6d28f142a14944922143358232612"; // Clave de la API
const URL = "http://api.weatherapi.com/v1/current.json?key=" + ID;
const SEARCH_URL = "http://api.weatherapi.com/v1/search.json?key=" + ID;
const LANG = "es"; // Idioma

// Arreglar texto
function decode(text) {
  try {
    return decodeURIComponent(escape(text));
  } catch (e) {
    return text; // En caso de error, devolver el texto sin cambios
  }
}

export { ID, URL, LANG, SEARCH_URL, decode };
