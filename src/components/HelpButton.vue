<template>
  <div style="position: relative">
    <a
      class="btn btn-primary"
      data-bs-toggle="offcanvas"
      href="#offcanvasExample"
      role="button"
      aria-controls="offcanvasExample"
    >
      Ayuda
    </a>
  </div>

  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
    style="background-color: #ffffea"
  >
    <div class="offcanvas-header">
      <h4
        class="offcanvas-title"
        id="offcanvasExampleLabel"
        style="color: #091540; font-weight: bolder"
      >
        Ayuda
      </h4>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <h5 style="color: #091540; font-weight: bold">
          ¿Cómo uso la aplicación?
        </h5>
      </div>
      <div style="color: #091540">
        <p>
          La aplicación tomará la ubicación del dispositivo y mostrará el tiempo
          actual en dicho lugar.
        </p>
        <p>Pero puedes ver el tiempo de cualquier lugar del mundo.</p>
      </div>
      <div style="color: #091540">
        <h6 style="font-weight: bold">¿Cómo hago para buscar una zona?</h6>
        <p>
          Tienes que buscar la zona en la barra de búsqueda, en caso de que
          aparezca más de un resultado, tendrás que hacer click en el lugar que
          quieras.
        </p>
        <p>
          Puedes usar varios formatos para buscar, para más información visita
          el siguiente
          <a
            href="https://www.weatherapi.com/docs/#intro-request"
            style="color: #7692ff"
            >sitio</a
          >
        </p>
      </div>
      <div>
        <h6 style="font-weight: bold">
          ¿Y si quiero volver a ver el tiempo en mi ubicación?
        </h6>
        <p>
          Simplemente haz click en el botón circular que se encuentra en la
          parte inferior.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.btn {
  background-color: #d8d8d8;
  border-color: #d8d8d8;
  color: #091540;
  position: absolute;
  top: 10px;
  right: 10px;
}
.btn:hover {
  background-color: #ffffea;
  border-color: #ffffea;
}
</style>
