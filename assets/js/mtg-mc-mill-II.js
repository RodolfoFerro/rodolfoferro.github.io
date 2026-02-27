// Deck representation
const baseNumbers = [1,1,1,0,0,0,0,0];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleList() {
    const shuffled = shuffle([...baseNumbers]);

    // Mostrar lista
    document.getElementById("output").textContent = shuffled.join(" ");

    // Tomar último valor
    const lastValue = shuffled[shuffled.length - 1];
    const resultDiv = document.getElementById("result-text");

    if (lastValue === 1) {
    resultDiv.textContent = "Es criatura";
    resultDiv.className = "sim-result sim-creature";
    } else {
    resultDiv.textContent = "No es criatura";
    resultDiv.className = "sim-result sim-noncreature";
    }
}

function resetList() {
    document.getElementById("output").textContent = "- - - - - - - -";
    document.getElementById("result-text").textContent = "—";
    document.getElementById("result-text").className = "sim-result";
  }