document.getElementById("alquilerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const carType = document.getElementById("car-type").value;
  const rentalDays = parseInt(document.getElementById("rental-days").value);
  const output = document.getElementById("output");

  let price = rentalDays * 150; 
  let background = "";

  if (rentalDays <= 2) {
    background = "orange";
  } else if (rentalDays <= 5) {
    background = "yellow";
  } else if (rentalDays <= 10) {
    background = "green";
  } else {
    background = "blue";
  }

  output.style.backgroundColor = background;
  output.style.color = rentalDays > 5 ? "white" : "black";
  output.textContent = `Has alquilado un ${carType} por ${rentalDays} días. Precio total: $${price}`;
});

  