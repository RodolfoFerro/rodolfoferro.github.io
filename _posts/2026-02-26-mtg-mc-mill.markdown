---
title: "Modelando estrategias de mill en Commander mediante simulación de Montecarlo (parte I)"
subtitle: En este post se motiva el problema de milleo como forma de utilizar simulaciones Montecarlo y se describe el método.
layout: post
date: 2026-02-26 16:00
tag:
  - Probability
  - Simulation
  - Monte Carlo
  - Magic the Gathering
headerImage: false
projects: true
hidden: false # don't count this post in blog pagination
description: En este post se motiva el problema de milleo como forma de utilizar simulaciones Montecarlo y se describe el método.
category: blog
author: rodferro
---

<link rel="stylesheet" href="/assets/css/mtg-mc-mill-gallery.css">

# Motivación

Desde que juego [Commander en MTG](https://magic.wizards.com/en/formats/commander), llevo explorando varias estrategias de _milleo_ (o _"moler cartas"_, en español). Estas estrategias prácticamente nos llevan a buscar combos que nos permitan hacer que el oponente tire cartas desde el tope de su biblioteca directamente al cementerio, haciendo que pierda recursos importantes. La principal _win condition_ de esta estrategia consiste en _"millear"_ el deck completo, para que cuando sea turno de robo del oponente y no tenga qué robar, pierda directamente.

En general, las estrategias de mill en Commander suelen percibirse como algo caóticas y a veces difíciles de generalizar: algunas veces pueden dependender de si el mazo oponente es de reanimación (o si les ayuda tener cosas en cementerio en general), del número de criaturas restantes en el mazo y de interacciones encadenadas. Sin embargo, detrás de esa aparente aleatoriedad existe una estructura probabilística que puede ser bien definida.

Este análisis es particularmente relevante para comandantes como los siguientes:
{% include mtg-mc-mill-gallery-commanders.html %}


En cada caso, el rendimiento del plan de juego puede depender de diferentes eventos repetidos o de si queremos algo muy directo, como usar _2-card combos_ (como **Bruvac** + [**Maddening Cacophony**](https://gatherer.wizards.com/ZNR/en-us/330/maddening-cacophony)). 

En esta publicación me interesa describir un caso como el primero (que dependa de eventos repetidos), particularmente el siguiente:

> "Muele$^*$ $k$ cartas. Si entre ellas hay criatura, genera un nuevo trigger."
>
> <small>$^*$A partir de este momento dejaré de usar la palabra _"moler"_ y la cambiaré por _"millear"_. ¿_Moler_? Ni que fuera 🌶️ para preparar salsa.</small>

Este tipo de eventos se dispara con la interacción de 2 cartas en particular, las cuales compartiré en breve.

Las preguntas naturales que me interesa responder en esta publicación son las siguientes:

- ¿Cuántos triggers esperamos en promedio con una interacción básica?
- ¿Qué tan variable es el resultado de estos triggers?
- ¿Cómo cambia la distribución si aumentamos el número de cartas que se muelen? Es decir, si consideramos más efectos de otras cartas que abonen a este primer evento.

Para responder esto utilizaremos simulación de Montecarlo y, cuando sea posible, intentaremos describir resultados analíticos cerrados.

Comenzaremos planteando un escenario, de ahí, explicaremos qué es la simulación de Montecarlo y describiremos algunos experimentos.


# El caso base: Altar of the Brood + Zellix en campo

{% include mtg-mc-mill-gallery-zellix-altar.html %}

De **Altar of the Brood** podemos leer:
> "Siempre que otro permamente entre al campo de batalla bajo tu control, cada oponente _millea_$^*$ una carta."
>
> <small>$^*$De la carta de hecho leemos _"(...) cada oponente pone la primera carta del tope de su biblioteca en su cementerio"_, sin embargo, del [oráculo oficial](https://gatherer.wizards.com/KTK/es-es/216/altar-of-the-brood) podemos verificar que la regla que aplica es con la palabra "mill".</small>

De **Zellix, Sanity Flayer** podemos leer:
> "_Mente Colmena_ - Siempre que un jugador _millee_ una o más cartas de criatura, crea un token criatura Horror negra 1/1."

<span class="evidence">**Este caso base es el que <u>desata mi curiosidad por entender mejor las interacciones de <i>milleo</i></u>.**</span> En breve te compartiré por qué.

Consideremos el siguiente caso:
1. Ambas cartas están en campo.
2. Disparamos un efecto de _milleo_ (como pagar 1 mana y girar a Zellix para usar su habilidad activada).
3. Si en el proceso del paso 2 un oponente _millea_ una o más criaturas, se dispara la habilidad triggereada de **Zellix** y crea un token Horror negro 1/1.
4. Como entró un permamente bajo mi control se dispara el **Altar**, haciendo que mis oponentes _milleen_ una carta.
5. Si esa carta _milleada_ es una criatura, regresamos al paso 3.

Si lo pensamos, quizáaas bajo ciertas condiciones muy particulares podríamos tener un combo infinito de creación de tokens/_milleo_, de nuevo, sólo quizás... 🤔

Mi pregunta principal en mente es: **¿bajo qué condiciones podría tener un combo infinito?** Esto me lleva a plantearme una segunda pregunta: **¿cómo puedo verificar cuántas veces se _triggerea_ una habilidad así?** Quizás entendiendo esta segunda pregunta pueda responder la primera. 

Es por lo anterior que utilizaremos una simulación de Montecarlo para intentar describir en promedio cuántas veces se dispara el trigger del **Altar** + **Zellix**, si logramos verificar que se pueda disparar de una manera indefinida, podríamos asegurar un combo infinito, quizás bajo ciertas consideraciones.


# ¿Qué es una simulación de Montecarlo?

Una simulación de Montecarlo o Monte Carlo es un método numérico que permite estudiar fenómenos aleatorios cuando:

- El modelo matemático exacto puede ser complicado.
- La solución cerrada es difícil de obtener.
- O simplemente cuando queremos validar una aproximación teórica.

En lugar de resolver el problema de forma puramente algebráica, lo que hacemos es reproducir un experimento muchas veces y observar qué ocurre en el promedio de todos estos experimentos repetidos.

Formalmente, si $X$ es una variable aleatoria difícil de analizar de forma exacta, podemos aproximar:

$$\bar{X} = \mathbb{E}[X] = \frac{1}{n} \sum_{i=1}^{n} X_i,$$

donde cada $X_i$ es una realización independiente del proceso simulado. De aquí notemos que asumimos que cada $X_i$ es una variable aleatoria inependiente e identicamente distribuida (_i.i.d._).

<span class="evidence">En nuestro contexto, cada simulación representa una secuencia de _triggers_ disparados dentro de una partida hipotética bajo ciertas condiciones iniciales del mazo, la cual se detiene una vez se deja de _millear_ una criatura.</span>

Es decir, con esto podemos simular un mazo de 99 cartas con $C$ criaturas y simular que _milleamos_, contar cuántas veces se encadenó el combo **Altar** + **Zellix** y hacer esto miles de veces para calcular un promedio de estos resultados.

Hasta este punto espero haber explicado bien la idea de lo que queremos realizar, en la próxima publicación estaré compartiendo detalles de los resultados obtenidos de los experimentos simulados.

##### SPOILER:
<div class="spoiler"><p>Bajo ciertas condiciones, <b>sí</b> se podría alcanzar un combo de <i>milleo</i> de todo el mazo rival a partir de <b>Altar</b> + <b>Zellix</b>. Mantente en sintonía para conocer bajo qué condiciones puede ocurrir.</p></div>

# Referencias

Si quieres conocer más sobre las simulaciones de Montecarlo, te comparto las siguientes referencias:

- [¿Qué es la simulación de Monte Carlo?](https://www.ibm.com/mx-es/think/topics/monte-carlo-simulation)
- [Monte-Carlo Simulation](https://brilliant.org/wiki/monte-carlo/)
- [Mathematical Foundations of Monte Carlo Methods](https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/monte-carlo-methods-mathematical-foundations/expected-value.html)

<div class="breaker"></div>

### SOBRE EL USO DE INFORMACIÓN TOTAL O PARCIAL: 🔐
* Estos documentos fueron originalmente creados por el autor.
* Cualquier uso de estos documentos o sus contenidos están permitidos a través de la licencia provista y sus condiciones.
* Para cualquier aclaración, puedes contactar al autor: <https://rodolfoferro.xyz/>

**Copyright (c) 2026 Rodolfo Ferro**
