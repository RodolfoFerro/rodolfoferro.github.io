---
title: "Modelando estrategias de mill en Commander mediante simulación de Montecarlo (parte II)"
subtitle: En este post se plantean las simulaciones de Montecarlo y se describen los resultados obtenidos.
layout: post
date: 2026-02-26 16:00
tag:
  - Probability
  - Simulation
  - Monte Carlo
  - Magic the Gathering
headerImage: false
projects: true
hidden: true # don't count this post in blog pagination
description: En este post se plantean las simulaciones de Montecarlo y se describen los resultados obtenidos.
category: blog
author: rodferro
---

<link rel="stylesheet" href="/assets/css/mtg-mc-mill-gallery.css">

Como hemos compartido anteriormente en la [parte I](https://rodolfoferro.xyz/mtg-mc-mill/), un caso interesante por modelar es el de la interacción entre **Altar of the Brood** y **Zellix, Sanity Flayer** en campo cuando se dispara un trigger de _milleo_.

{% include mtg-mc-mill-gallery-zellix-altar.html %}

Para poder correr una simulación de Montecarlo, es necesario plantear primero un experimento que consista en simular el _milleo_ de una carta y repetir el proceso hasta que la carta _milleada_ no sea una criatura. Es importante mencionar que este es un proceso **no determinístico**, dado que no se tiene la certeza de que la siguiente carta a _millear_ sea una criatura, sino que podemos decir que con cierta probabilidad lo es.


# Planteando el experimento para simular múltiples veces

Comencemos planteando un escenario base. <span class="evidence">Consideremos que en un mazo commander de 99 cartas, quedan $N$ cartas, de las cuales hay una cantidad $C$ de criaturas. Cada trigger _millea_ $k=1$ carta. Si la carta _milleada_ es criatura, se repite el trigger de _milleo_, pero si no, el proceso termina.</span>

Para simular que tenemos un mazo, podemos sencillamente definir un tamaño de cartas restantes en un mazo. Por simplicidad para este ejemplo, supongamos que quedan $N=8$ cartas, de las cuales $C=3$ son criaturas. Para representar esta información, podríamos crear una lista con valores 0 y 1, donde 1 representa una carta criatura y un 0 una carta no criatura. Además, podemos reordenar esta lista de valores, lo que consideraríamos como una "mezcla" de lo que queda del mazo. Para finalizar la representación del mazo, consideraremos que el lado izquierdo es el fondo del mazo y el derecho es el tope, es decir, de donde millearemos cartas.

Este siguiente bloque ilustra una representación del mazo en este sentido, donde claramente hay $C=3$ números 1, representando a las criaturas restantes en el mazo. (Si presionas el botón de "Mezclar" puedes simular un _shuffleo_ del mazo.) 

<div class="sim-container">
  <div class="sim-card">
    <div class="sim-title">Representación del mazo</div>
    <div class="sim-output" id="output">
      - - - - - - - -
    </div>
    <div class="d-flex justify-content-center gap-3">
      <button class="sim-btn sim-btn-primary" onclick="shuffleList()">
        Mezclar
      </button>
      <button class="sim-btn sim-btn-outline" onclick="resetList()">
        Reiniciar
      </button>
    </div>
  </div>
</div>
<br>

Ahora que tenemos una forma de representar un estado inicial, podemos remover el último elemento de la lista, lo que simula el _milleo_ de la carta del tope (quitando el último elemento de la lista). Este sigueinte bloque muestra un mensaje dependiendo del último valor de la lista obtenido, simulando si se extrajo o no una criatura. 
<div class="sim-container">
  <div class="sim-card">
    <div class="sim-title">Carta <i>milleada</i> (tope del mazo = última carta de la lista)</div>
    <div class="sim-result" id="result-text">
      —
    </div>
  </div>
</div>
<br>

Este proceso deberá repetirse 

```
Para cada simulación en número de simulaciones:
  - Generar un estado inicial (mazo mezclado)
  - Mientras 
```

<div class="breaker"></div>

### SOBRE EL USO DE INFORMACIÓN TOTAL O PARCIAL: 🔐
* Estos documentos fueron originalmente creados por el autor.
* Cualquier uso de estos documentos o sus contenidos están permitidos a través de la licencia provista y sus condiciones.
* Para cualquier aclaración, puedes contactar al autor: <https://rodolfoferro.xyz/>

**Copyright (c) 2026 Rodolfo Ferro**

<script src="/assets/js/mtg-mc-mill-II.js"></script>