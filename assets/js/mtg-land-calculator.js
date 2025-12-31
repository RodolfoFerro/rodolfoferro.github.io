// Reset calculator
function resetCalculator() {
    // Hide cards
    document.getElementById("summaryCards").classList.add("d-none");

    // Hide plot and table
    document.getElementById("chartContainer").classList.add("d-none");
    document.getElementById("tableContainer").classList.add("d-none");

    // Clean table
    document.getElementById("resultTable").innerHTML = "";

    // Destroy plot
    if (chart) {
        chart.destroy();
        chart = null;
    }
}


// Compute combination (n in k)
function combination(n, k) {
    if (k < 0 || k > n) return 0;
    k = Math.min(k, n - k);
    let result = 1;
    for (let i = 1; i <= k; i++) {
        result *= (n - (k - i));
        result /= i;
    }
    return result;
}

// Hypergeometric distribution
function hypergeometric(N, K, n, k) {
    const numerator = combination(K, k) * combination(N - K, n - k);
    const denominator = combination(N, n);
    return numerator / denominator;
}

// Accumulated probabilities
function sumProbabilities(N, K, n, kMin, kMax) {
    let sum = 0;
    for (let k = kMin; k <= kMax; k++) {
        sum += hypergeometric(N, K, n, k);
    }
    return sum;
}

// Main computation + render in HTML
let chart = null;

function calculate() {
    const N = parseInt(document.getElementById("deckSize").value);
    const K = parseInt(document.getElementById("lands").value);
    const n = parseInt(document.getElementById("handSize").value);

    // Resúmenes
    const p3 = hypergeometric(N, K, n, 3);
    const p24 = sumProbabilities(N, K, n, 2, 4);
    const p01 = sumProbabilities(N, K, n, 0, 1);
    const p5 = sumProbabilities(N, K, n, 5, n);

    document.getElementById("p3").textContent = (p3 * 100).toFixed(2) + "%";
    document.getElementById("p24").textContent = (p24 * 100).toFixed(2) + "%";
    document.getElementById("p01").textContent = (p01 * 100).toFixed(2) + "%";
    document.getElementById("p5").textContent = (p5 * 100).toFixed(2) + "%";

    document.getElementById("summaryCards").style.display = "flex";

    // Tabla y gráfica
    const labels = [];
    const data = [];
    const table = document.getElementById("resultTable");
    table.innerHTML = "";

    for (let k = 0; k <= n; k++) {
        const p = hypergeometric(N, K, n, k);
        labels.push(k.toString());
        data.push(p);

        const row = document.createElement("tr");
        row.innerHTML = `
        <td>&nbsp; ${k}</td>
        <td>&nbsp; ${(p * 100).toFixed(2)}%</td>
        `;
        table.appendChild(row);
    }
    
    document.getElementById("summaryCards").classList.remove("d-none");
    document.getElementById("chartContainer").classList.remove("d-none");
    document.getElementById("tableContainer").classList.remove("d-none");

    renderChart(labels, data);
}

// Chart
function renderChart(labels, data) {
    const ctx = document.getElementById("probChart").getContext("2d");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "bar",
        data: {
        labels: labels,
        datasets: [{
            label: "Probabilidad",
            data: data,
            backgroundColor: "rgba(124, 58, 237, 0.7)", // purple-600
            borderRadius: 6
        }]
        },
        options: {
        plugins: {
            legend: {
            display: false
            }
        },
        scales: {
            x: {
            title: {
                display: true,
                text: "Tierras en mano",
                font: {
                size: 14,
                weight: "600"
                }
            }
            },
            y: {
            title: {
                display: true,
                text: "Probabilidad",
                font: {
                size: 14,
                weight: "600"
                }
            },
            beginAtZero: true,
            ticks: {
                callback: value => (value * 100).toFixed(0) + "%"
            }
            }
        }
        }
    });
}
