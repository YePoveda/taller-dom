document.getElementById("nominaForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const ingresos = parseFloat(document.getElementById("ingresos").value);
    const egresos = parseFloat(document.getElementById("egresos").value);
    const output = document.getElementById("output");
  
    const salarioTotal = ingresos - egresos;
  
    output.innerHTML = `
      <p>Ingresos: $${ingresos.toFixed(2)}</p>
      <p class="negative">Egresos: $${egresos.toFixed(2)}</p>
      <p>Salario Total: $${salarioTotal.toFixed(2)}</p>
    `;
  
    if (salarioTotal < 0) {
      output.style.backgroundColor = "red"; 
      output.style.color = "white";
    } else {
      output.style.backgroundColor = "#007bff"; 
      output.style.color = "white";
    }
  });
  