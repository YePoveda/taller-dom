document.getElementById("parkingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const hours = parseFloat(document.getElementById("hours").value);
    const output = document.getElementById("output");
  
    if (isNaN(hours) || hours <= 0) {
      output.textContent = "Por favor, ingrese un tiempo válido.";
      return;
    }
  
    const roundedHours = Math.ceil(hours);

    const ratePerHour = 1500; 
    const totalCost = roundedHours * ratePerHour;

    output.textContent = `Tiempo utilizado: ${hours.toFixed(2)} horas (${roundedHours} horas facturadas).
  Costo total: $${totalCost}`;
  });
  