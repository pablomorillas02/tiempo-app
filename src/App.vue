<template>
  <WeatherApp />
</template>

<script>
import WeatherApp from "./components/WeatherApp.vue";

export default {
  name: "App",
  components: {
    WeatherApp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Nunito+Sans:opsz,wght@6..12,200&display=swap");
#app {
  font-family: "Nunito Sans", sans-serif;
}
</style>
