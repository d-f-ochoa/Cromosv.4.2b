if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.js").then(
      function (registration) {
        console.log("ServiceWorker registrado con éxito: ", registration.scope);
      },
      function (err) {
        console.log("Fallo en el registro del ServiceWorker: ", err);
      }
    );
  });
}
