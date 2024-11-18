document.getElementById("competitionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const dog1 = document.getElementById("dog1").value;
    const dog2 = document.getElementById("dog2").value;
    const dog3 = document.getElementById("dog3").value;

    const winnerList = document.getElementById("winnerList");
    winnerList.innerHTML = ""; 

    const winners = [
      { puesto: 1, raza: dog1, precio: "$2000", image: "/imagen/perro1.jpg" },
      { puesto: 2, raza: dog2, precio: "$1500", image: "/imagen/perro2.jpg" },
      { puesto: 3, raza: dog3, precio: "$1000", image: "/imagen/perro3.jpg" }
    ];
  
    winners.forEach((winner) => {
      const dogCard = document.createElement("div");
      dogCard.classList.add("dog-card", `puesto-${winner.puesto}`);
  
      dogCard.innerHTML = `
        <img src="${winner.image}" alt="Perro ${winner.raza}">
        <h3>Puesto ${winner.puesto}: ${winner.raza}</h3>
        <p>Nuevo Precio: ${winner.precio}</p>
      `;
  
      winnerList.appendChild(dogCard);
    });
  });
  