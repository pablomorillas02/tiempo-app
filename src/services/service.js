import axios from "axios";
import { ID, URL, LANG } from "../utils.js";

// Obtener localización actual del dispositivo para mostrar el tiempo en su zona
class Location {
  constructor() {
    this.location = "";

    this.update();
  }

  // Actualizar la ubicación
  update() {
    return new Promise((resolve, reject) => {
      if (navigator.onLine) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.updateForecast(position).then(resolve).catch(reject);
          },
          (err) => reject(err)
        );
      } else {
        reject("Offline");
      }
    });
  }

  // Obtener datos de la API tras tranformar la posición
  async updateForecast(position) {
    let data = position.coords.latitude + "," + position.coords.longitude;

    await this.getForecast(data);
  }

  // Mandar petición GET a la API y guarda el nombre de la ciudad
  async getForecast(data) {
    try {
      const response = await axios.get(URL, {
        params: {
          q: data, // Palabra para la búsqueda
          appid: ID,
          lang: LANG,
        },
      });

      // Obtención y separación de datos de la respuesta
      this.location = response.data.location.name;
    } catch (e) {
      console.error("Error al obtener datos de GPS:", e);
    }
  }
}

export default Location;
