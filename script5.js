document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const answer1 = document.getElementById("question1").value.toLowerCase().trim();
    const answer2 = parseInt(document.getElementById("question2").value);
    const answer3 = parseInt(document.getElementById("question3").value);

    const output = document.getElementById("output");

    const correct1 = answer1 === "parís";
    const correct2 = answer2 === 30;
    const correct3 = answer3 === 1969;
  
    if (correct1 && correct2 && correct3) {
      
      output.style.backgroundColor = "yellow";
      output.style.color = "green";
      output.textContent = "¡Es el ganador!";
    } else {
     
      output.style.backgroundColor = "red";
      output.style.color = "black";
      output.textContent = "Perdió. ¡Inténtalo de nuevo!";
    }
  });
  