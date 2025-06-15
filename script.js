// Clave pública de prueba Mercado Pago
const mp = new MercadoPago("TEST-fb99ead5-854c-4ab9-b86c-c271bc09b3cc", {
  locale: "es-AR",
});

const buyBtn = document.getElementById("buyBtn");

buyBtn.addEventListener("click", () => {
  // Crear preferencia de pago
  fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer TEST-6328607060123793-061511-339bea87a076e4fa665cfd6398941472-387372969",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        {
          title: "Modelo de avión",
          quantity: 1,
          unit_price: 1000,
          currency_id: "ARS",
          picture_url: "https://via.placeholder.com/200x150.png?text=Modelo+de+avion",
          description: "Modelo de avión para descarga digital",
        },
      ],
      back_urls: {
        success: window.location.origin + "/gracias.html",
        failure: window.location.origin + "/gracias.html",
        pending: window.location.origin + "/gracias.html",
      },
      auto_return: "approved",
      external_reference: "modelo_avion_001",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // Abrir checkout de Mercado Pago
      window.location.href = data.init_point;
    })
    .catch((err) => {
      alert("Error creando la preferencia de pago");
      console.error(err);
    });
});
