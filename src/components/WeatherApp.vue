<template>
  <section id="section" class="vh-100">
    <HelpButton />

    <div style="position: relative; top: 15%">
      <SearchBar @getLocation="obtener" @selectLocation="obtener" />

      <div class="container py-2">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-8 col-lg-6 col-xl-4">
            <div
              class="card"
              style="
                color: #091540;
                border-radius: 35px;
                background-color: #ffffea;
              "
            >
              <div class="card-body p-4">
                <div class="d-flex">
                  <div class="flex-grow-1">
                    <h4>{{ decode(weatherLocation.name) }}</h4>
                    <h6>{{ decode(weatherLocation.region) }}</h6>
                  </div>
                  <img :src="weatherCondition.icon" />
                </div>

                <div class="d-flex flex-column text-center mt-5 mb-4">
                  <h6
                    class="display-4 mb-0 font-weight-bold"
                    style="color: #091540"
                  >
                    {{ weatherData.temp_c }} ºC
                  </h6>
                  <span class="small" style="color: #091540">{{
                    decode(weatherCondition.text)
                  }}</span>
                </div>

                <div class="d-flex align-items-center">
                  <div class="flex-grow-1" style="font-size: 1rem">
                    <div>
                      <font-awesome-icon
                        icon="wind"
                        style="width: 16px; height: 16px; color: #091540"
                      />
                      <span class="ms-1">
                        {{ weatherData.wind_kph }} km/h
                      </span>
                    </div>
                    <div>
                      <font-awesome-icon
                        icon="droplet"
                        style="width: 16px; height: 16px; color: #091540"
                      />
                      <span class="ms-1"> {{ weatherData.humidity }} % </span>
                    </div>
                    <div>
                      <font-awesome-icon
                        icon="cloud-rain"
                        style="width: 16px; height: 16px; color: #091540"
                      />
                      <span class="ms-1"> {{ weatherData.precip_mm }} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LocationButton @getCurrentLocation="obtener" />
    </div>

    <CreditsComponent />
  </section>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import LocationButton from "./LocationButton.vue";
import CreditsComponent from "./CreditsComponent.vue";
import HelpButton from "./HelpButton.vue";
import axios from "axios";
import { ID, URL, LANG, decode } from "../utils.js";
import Location from "../services/service.js";

export default {
  data() {
    return {
      locationService: new Location(),
      weatherLocation: {},
      weatherData: {},
      weatherCondition: {},
      decode,
    };
  },
  components: {
    SearchBar,
    LocationButton,
    CreditsComponent,
    HelpButton,
  },
  methods: {
    // LLamada a la API
    async obtener(query) {
      console.log("Se va a mandar la siguiente solicitud: " + query);
      try {
        const response = await axios.get(URL, {
          params: {
            q: query, // Palabra para la búsqueda
            appid: ID,
            lang: LANG,
          },
        });

        // Obtención y separación de datos de la respuesta
        this.weatherLocation = response.data.location;
        this.weatherData = response.data.current;
        this.weatherCondition = response.data.current.condition;
      } catch (error) {
        console.error("Error al obtener datos de localización:", error);
      }
    },
  },
  mounted() {
    this.locationService
      .update()
      .then(() => {
        this.obtener(this.locationService.location);
      })
      .catch((error) => {
        console.error("Error al obtener la ubicación:", error);
      });
  },
};
</script>

<style scoped>
#section {
  position: relative;

  background: rgb(118, 146, 255);
  background: -moz-radial-gradient(
    circle,
    rgba(118, 146, 255, 1) 0%,
    rgba(61, 81, 140, 1) 50%,
    rgba(9, 21, 64, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(118, 146, 255, 1) 0%,
    rgba(61, 81, 140, 1) 50%,
    rgba(9, 21, 64, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(118, 146, 255, 1) 0%,
    rgba(61, 81, 140, 1) 50%,
    rgba(9, 21, 64, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7692ff",endColorstr="#091540",GradientType=1);
}
</style>
