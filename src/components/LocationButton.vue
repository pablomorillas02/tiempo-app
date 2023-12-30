<template>
  <div class="container p-3">
    <div class="d-flex justify-content-center">
      <button
        class="btn btn-primary btn-lg rounded-circle"
        type="button"
        @click="getCurrentLocation()"
      >
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          style="color: #091540"
        />
      </button>
    </div>
  </div>
</template>

<script>
import Location from "../services/service.js";

export default {
  data() {
    return {
      currentLocation: new Location(),
    };
  },
  methods: {
    getCurrentLocation() {
      // Actualizar ubicación
      this.currentLocation
        .update()
        .then(() => {
          this.$emit("getCurrentLocation", this.currentLocation.location);
        })
        .catch((error) => {
          console.error("Error al actualizar la ubicación:", error);
        });
    },
  },
};
</script>

<style scoped>
.rounded-circle {
  background-color: #d8d8d8;
  border-color: #d8d8d8;
}

.rounded-circle:hover {
  background-color: #ffffea;
  border-color: #ffffea;
}
</style>