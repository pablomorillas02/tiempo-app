<template>
  <div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <form @submit.prevent="getLocation">
          <div class="input-group">
            <span class="input-group-text">
              <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                style="color: #091540"
              />
            </span>
            <input
              type="text"
              id="input"
              class="form-control"
              placeholder="Busca un lugar..."
              v-model="location"
            />
            <div class="input-group-append">
              <button class="btn" type="submit">Buscar</button>
            </div>
          </div>
        </form>
        <div class="list-group py-2" v-if="results.length">
          <a
            class="list-group-item list-group-item-action"
            v-for="result in results"
            :key="result.id"
            @click="selectLocation(result.id)"
          >
            <div>
              <h5>{{ decode(result.name) }}</h5>
            </div>
            <div id="result-id" hidden>{{ result.id }}</div>
            <div>
              {{ decode(result.region) }} ({{ decode(result.country) }})
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ID, SEARCH_URL, LANG, decode } from "../utils.js";
import axios from "axios";

export default {
  data() {
    return {
      location: "",
      submittedLocation: "",
      results: [],
      decode,
    };
  },
  methods: {
    // Este método obtiene la query del buscador y la manda a la función que realiza la petición
    getLocation() {
      if (this.location) {
        this.submittedLocation = this.location;

        this.results = [];

        this.$emit("getLocation", this.submittedLocation);
      }
    },
    // Este método manda una petición tipo SEARCH para obtener un resultado de coincidencias
    async fetchResults() {
      if (!this.location.trim()) {
        // Si no hay nada escrito no se manda nada
        this.results = [];
        return;
      }

      try {
        const response = await axios.get(SEARCH_URL, {
          params: {
            q: this.location,
            appid: ID,
            lang: LANG,
          },
        });

        this.results = response.data;
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    },
    // Este método actualiza la localización a la elegida del listado
    selectLocation(id) {
      let query = "id:" + id.toString();

      let input = document.getElementById("input");
      input.value = "";

      this.results = [];

      this.$emit("selectLocation", query);
    },
  },
  watch: {
    // Listener para actualizar cada vez que se introduce un caracter
    location() {
      this.fetchResults();
    },
  },
};
</script>

<style scoped>
.input-group-text,
.input-group-text {
  border-right: none;
  background-color: #d8d8d8;
  border-radius: 35px 0 0 35px;
}

.input-group-append .btn {
  background-color: #d8d8d8;
  border-radius: 0 35px 35px 0;
  color: #091540;
}
.input-group-append .btn:hover {
  background-color: #ffffea;
  border-color: #ffffea;
}

.input-group .form-control {
  border-left: none;
  background-color: #ffffea;
  color: #091540;
  border-radius: 35px;
}

.form-control::placeholder {
  color: #091540;
  opacity: 50%;
}

.form-control:focus {
  border-color: #ffffea;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.list-group {
  position: absolute;
  z-index: 999;
}

.list-group-item {
  background-color: #ffffea;
  color: #091540;
}

.list-group-item:hover {
  background-color: #d8d8d8;
}
</style>
