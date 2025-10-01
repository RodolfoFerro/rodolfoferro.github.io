---
title: "[Curso Intensivo] Fundamentos de la Inteligencia Artificial"
layout: post
date: 2025-10-01 00:00
published: true
image: 
headerImage: true
tag:
- Artificial Intelligence
- Machine Learning
- Graphs
category: course
hidden: true # don't count this post in blog pagination
externalLink: false
author: rodferro
description: "[Curso Intensivo] Fundamentos de la Inteligencia Artificial"
---

# Módulo 1. Introducción a la Inteligencia Artificial

## ¿Qué es Inteligencia Artificial (IA)? Definiciones y mitos comunes

- **Definición básica:** Son aquellos sistemas con capacidad para procesar datos de forma similar a un comportamiento inteligente, a través de algoritmos que (generalmente) resuelven tareas específicas.

#### Ejemplos de tareas típicas de IA
- Reconocer rostros en fotos (visión artificial).
- Recomendaciones en Netflix o Spotify (sistemas de recomendación).
- Traductores automáticos como Google Translate (procesamiento de lenguaje natural).
- Asistentes virtuales como Siri o Alexa.

#### Definiciones clásicas de IA
- **Russell y Norvig (2009):** _"El estudio de los agentes que perciben su entorno y realizan acciones que maximizan sus posibilidades de éxito."_

    Según Russell y Norvig en su libro _Inteligencia Artificial: Un Enfoque Moderno (2009)_, no ofrecen una única definición de IA, sino que abordan el concepto a través de ocho definiciones agrupadas en cuatro categorías principales. Estas categorías se basan en si los sistemas: 
    - Piensan o actúan.
    - Lo hacen de manera humana o racional.

    Aunque Russell y Norvig presentan las cuatro categorías, la mayor parte de su libro se concentra en la definición de la IA como el estudio y construcción de agentes racionales. Desde su perspectiva, un agente racional es un sistema que actúa de manera autónoma, percibe su entorno, persiste a lo largo del tiempo, se adapta a los cambios y persigue objetivos. 
- **John McCarthy (1956):** _"La ciencia e ingenio de hacer máquinas inteligentes."_

    Esta definición surgió en el contexto de la histórica Conferencia de Dartmouth, donde McCarthy acuñó el término. El concepto se refiere a la creación de sistemas que sean capaces de realizar tareas que requieren inteligencia humana, tales como: 
    - El razonamiento.
    - El aprendizaje.
    - La resolución de problemas complejos.
    - El reconocimiento de patrones.

#### Mitos comunes sobre IA

- **Mito:** La IA es igual a robots.<br>**Realidad:** La IA es un campo más amplio, los robots son solo una aplicación.
- **Mito:** La IA siempre es consciente.<br>**Realidad:** Hoy en día, la IA es no consciente; son algoritmos matemáticos y estadísticos.
- **Mito:** La IA reemplazará totalmente a los humanos.<br>**Realidad:** Se diseñan para asistir y automatizar tareas, no necesariamente para sustituir.

## Historia y evolución de la Inteligencia Artificial

- **Antes de 1940 — raíces filosóficas y matemáticas**
    - Lógica formal (Aristóteles → Boole → Frege), teoría de la computación y matemáticas que posibilitan el concepto de máquina que "procesa" símbolos.
    - **Relevancia:** sentaron la base teórica (lógica, algoritmos).
- **Años 1940–1950 — nacimiento conceptual**
    - Alan Turing (1950) propone la idea de la máquina universal y plantea el _Test de Turing_ (criterio práctico para "comportamiento inteligente").
    - McCulloch & Pitts (1943): modelo matemático de neurona binaria.
    - **Relevancia:** conexión entre computación y procesos cognitivos.
- **1956 — Dartmouth y la institucionalización**
    - Conferencia de Dartmouth (McCarthy, Minsky, Shannon, etc.) marca el arranque formal del campo "IA".
    - **Relevancia:** se define la agenda de investigación simbólica y de agentes.
- **Años 1960–1970 — IA simbólica y primeros éxitos**
    - Sistemas de razonamiento lógico, planificadores (p. ej. _General Problem Solver_), ELIZA (simulación de diálogo) y SHRDLU (manipulación de bloques en lenguaje natural, Winograd).
    - Perceptrón (Rosenblatt, 1958) como primer modelo de neurona entrenable.
    - **Relevancia:** demostración de que máquinas podían razonar en dominios restringidos.
- **1970s — primer "AI winter"**
    - Expectativas incumplidas, recortes de fondos (p. ej. informe Lighthill en Reino Unido, críticas a la viabilidad de programas generales).
    - **Relevancia:** la tecnología no cumplió promesas especulativas; importancia de ser realistas en objetivos.
- **Años 1980 — auge de sistemas expertos y vuelta del conexionismo**
    - Sistemas expertos (MYCIN, DENDRAL) alcanzan aplicaciones comerciales en diagnóstico y química; auge comercial y académico.
    - Re-descubrimiento del backpropagation (Rumelhart, Hinton, Williams, 1986) que permitió entrenar redes multicapa.
    - **Relevancia:** éxito comercial a corto plazo + método práctico para redes profundas (aunque en ese entonces se usaban redes relativamente pequeñas).
- **Finales de los 80 y principios de los 90 — segundo "AI winter"**
    - Colapso del mercado de sistemas expertos e impacto en financiación; expectativas otra vez desalineadas con resultados.
    - **Relevancia:** lección sobre la brecha entre prototipos y sistemas robustos/escala industrial.
- **Años 1990 — transición hacia métodos estadísticos**
    - Adopción de modelos probabilísticos (Bayesianos), HMMs para reconocimiento de voz, avance de SVMs (Cortes & Vapnik) y métodos de ensamble.
    - Ejemplos: proliferación de soluciones basadas en datos para tareas prácticas.
    - **Relevancia:** la IA comienza a apoyarse en estadística y teoría del aprendizaje.
- **2000s — datos, poder de cómputo y mejores algoritmos**
    - Disponibilidad de grandes datasets y mejoras en hardware (GPUs). Algoritmos como Random Forests, Boosting llegan a la práctica.
    - **Relevancia:** la combinación de datos + cómputo habilita modelos más complejos y precisos.
- **2012 → presente — renacimiento profundo (deep learning) y ahora "modelos a gran escala"**
    - AlexNet (2012) demuestra que redes profundas (CNNs) superan métodos clásicos en visión con GPUs y mucha data.
    - **Avances:** _CNNs_ (visión), _RNNs / LSTMs_ (secuencias), _GANs_ (modelos generativos), _DQN_ (Deep Q-Learning en RL), _AlphaGo_ (combina RL y búsqueda de árbol), _Transformers_ (2017) revolucionan NLP → años recientes: modelos de lenguaje a gran escala (LLMs) y modelos multimodales.
    - **Relevancia:** cambio de paradigma hacia pre-entrenamiento masivo, transferencia y modelos fundacionales que sirven como base para muchas aplicaciones.

## Paradigmas de la IA

#### Paradigma simbólico (IA clásica)

- Representación explícita de conocimiento con reglas y lógica.
- **Ejemplo:** "Si llueve, entonces lleva paraguas".
- **Aplicación:** sistemas expertos (ej. diagnósticos médicos basados en reglas).

#### Paradigma conexionista (aprendizaje basado en datos)

- Inspirado en las redes neuronales del cerebro humano.
- Aprende a partir de ejemplos, no de reglas explícitas.
- **Ejemplo:** red neuronal entrenada para reconocer perros en imágenes.

#### Paradigma evolutivo

- Inspirado en procesos biológicos como la evolución y la selección natural.
- Usa algoritmos genéticos para optimizar soluciones.
- **Ejemplo:** diseñar alas de avión con algoritmos evolutivos.

#### Paradigma híbrido

- Combinación de simbólico y conexionista.
- **Ejemplo:** un chatbot que usa reglas lingüísticas y redes neuronales.

## Diferencia entre IA débil y fuerte

#### IA Débil (Narrow AI)

- Especializada en una tarea concreta.
- Ejemplos:
    - Siri, Alexa (asistentes virtuales).
    - Google Maps (navegación).
- No tiene conciencia ni comprensión real.

#### IA Fuerte (General AI)

- Tendría capacidad similar a la inteligencia humana: razonamiento general, creatividad, sentido común.
- **Estado actual:** No existe aún, es un objetivo de investigación a largo plazo.
- **Ejemplo hipotético:** una IA que puede resolver problemas en cualquier dominio sin ser programada para cada tarea.

<br>
> **Resumen del módulo:**
> La IA no es magia: es una disciplina que combina matemáticas, estadística, computación e inspiración biológica. Su historia muestra avances y retrocesos, y hoy vivimos una época de auge gracias a la disponibilidad de datos y poder computacional.

---

# Módulo 2. Representación de problemas y búsqueda

## Agentes inteligentes y concepto de problema de búsqueda

#### Agente inteligente

- **Definición:** Entidad que percibe su entorno a través de sensores y actúa sobre él con actuadores para alcanzar un objetivo.
- **Ejemplo:**
    - Roomba: percibe paredes (sensores de proximidad) y actúa moviéndose para limpiar.
    - Jugador de ajedrez: percibe tablero y decide jugadas.
- **Modelo formal de un agente**
    - **Entrada:** percepción $P_t$.
    - **Función del agente:** $f:P^{\*} \rightarrow A$, donde $P^{\*}$ es la secuencia de percepciones y $A$ el conjunto de acciones posibles.
    - **Salida:** acción $A_t$.

#### Problema de búsqueda

- Un agente debe encontrar una secuencia de acciones que lo lleve desde un estado inicial hasta un estado meta.
- **Elementos clave:**
    - **Estados:** representaciones del mundo (ej. posición del agente en un mapa).
    - **Estado inicial:** punto de partida.
    - **Acciones:** movimientos posibles desde cada estado.
    - **Función de transición:** cómo una acción cambia el estado.
    - **Meta:** condición deseada.
    - **Costo de camino (opcional):** métrica de calidad (ej. distancia, tiempo).
- **Ejemplo clásico:** El problema del 8-puzzle
    - **Estado:** posiciones de las fichas en una cuadrícula 3×3.
    - **Estado meta:** fichas ordenadas.
    - **Acciones:** mover ficha en blanco arriba/abajo/izquierda/derecha.
    - **Transición:** cambia la configuración del tablero.
    - **Costo:** normalmente 1 por movimiento.

## Espacios de estados y estrategias básicas de búsqueda

- **Espacio de estados:** Grafo donde cada nodo = estado, arista = acción.
- **Estrategias de búsqueda:** Cómo explorar ese grafo.

#### Búsqueda en anchura (Breadth-First Search, BFS)

- Explora niveles del árbol desde la raíz hacia afuera.
- **Características:**
    - Garantiza encontrar la solución más corta en número de pasos (óptima si costo uniforme).
    - Requiere mucha memoria: almacena todos los nodos del nivel actual.
    - **Ejemplo:** Encontrar la ruta más corta en un laberinto.

#### Búsqueda en profundidad (Depth-First Search, DFS)

- Explora un camino hasta el final antes de retroceder (backtracking).
- **Características:**
    - Usa poca memoria (solo camino actual).
    - Puede quedar atrapada en ramas infinitas si el grafo no está acotado.
- **Ejemplo:** Resolver un laberinto explorando túneles hasta topar con un callejón sin salida.
- **Variantes útiles:** DFS limitado en profundidad, búsqueda iterativa en profundidad.

## Búsqueda heurística: glotones/voraces y A$^*$

- **Motivación:** BFS y DFS no consideran "qué tan cerca" está el objetivo → ineficientes en problemas grandes.
- Heurística = función de estimación $h(n)$: mide "qué tan prometedor" es un estado.
- **Ejemplo en 8-puzzle:** número de fichas mal colocadas, o suma de distancias Manhattan de cada ficha a su posición correcta.

#### Búsqueda Greedy (glotona o voraz)

- Expande el nodo con menor heurística $h(n)$.
- **Ventajas:** rápida, guía directamente hacia meta.
- **Desventajas:** no garantiza encontrar la solución óptima.
- **Ejemplo:** En un mapa, elegir siempre el camino que "parece" más corto a simple vista.

#### Búsqueda A$^*$ (A estrella)

- Combina costo real y estimación:
    <center>
        $f(n) = g(n) + h(n)$
    </center>
    donde:
    - $g(n)$ = costo acumulado desde inicio hasta $n$,
    - $h(n)$ = costo estimado desde $n$ hasta la meta.
- **Propiedades:**
    - Si la heurística es admisible ($h(n)$ nunca sobreestima), A$^*$ garantiza solución óptima.
- **Ejemplo:** Google Maps usando tiempo real de tráfico como parte de $g(n)$ + distancia restante como $h(n)$.

## Juegos y toma de decisiones simples

- **Problema:** en juegos hay oponentes → no basta con buscar un camino, debemos considerar que el adversario toma decisiones.
- **Ejemplo clásico:** Tic-Tac-Toe.

#### Modelo de juegos

- **Dos jugadores:** MAX (quiere maximizar utilidad) y MIN (quiere minimizarla).
- **Representación:** árbol de juego.
- Cada hoja tiene un valor (ganar/perder/empatar).

#### Algoritmo Minimax

- Supone que ambos jugadores juegan de manera óptima.
- **Función:**
- **En nodos MAX:** elegir acción con mayor valor.
- **En nodos MIN:** elegir acción con menor valor.

#### Poda alfa-beta

- Mejora minimax → evita explorar ramas innecesarias.
- Reduce tiempo de búsqueda sin afectar el resultado.
- **Ejemplo práctico:** En ajedrez, no se pueden explorar todas las jugadas (árbol enorme). La poda alfa-beta recorta ramas y permite evaluar más profundamente las jugadas relevantes.

<br>
> **Resumen del módulo:**
> - La IA clásica modela problemas como búsquedas en espacios de estados.
> - BFS y DFS son estrategias sistemáticas pero ciegas.
> - Las heurísticas (Greedy, A$^*$) aceleran la búsqueda usando conocimiento adicional.
> - En juegos, la búsqueda debe considerar adversarios (Minimax, alfa-beta).

---

# Módulo 3. Introducción al Aprendizaje Automático

## Paradigma basado en datos

#### Definición general
- El aprendizaje automático (Machine Learning, ML) es un enfoque de la IA en el que los sistemas aprenden patrones y reglas directamente a partir de datos, en lugar de ser programados explícitamente con reglas.
- En lugar de escribir "si $X$, entonces $Y$", se provee al sistema con ejemplos y este ajusta un modelo matemático.

#### Formalización básica

- Tenemos un conjunto de datos $D = \{ (x_i, y_i) \} ^N_{i=1}$, donde
    - $x_i$ = entrada (ej. imagen, texto, vector numérico).
    - $y_i$ = salida deseada (ej. etiqueta de clase, valor real).
- El modelo busca una función $f_{\theta}(x)$ con parámetros $\theta$ que aproxime la relación entre entrada y salida.
- Se ajusta $\theta$ minimizando un error
<center>
    $\theta^* = \arg\!\min_{\theta} \mathcal{L}(f_{\theta}(x), y) $
</center>
donde $\mathcal{L}$ es la función de pérdida (ej. error cuadrático medio, entropía cruzada, etc.).
- **Ejemplos cotidianos:**
    - Netflix aprende tus gustos a partir de tu historial → recomendaciones personalizadas.
    - Gmail aprende a detectar spam observando ejemplos de correos no deseados.
    - Un banco usa datos de clientes para predecir riesgo crediticio.

## Redes neuronales artificiales: idea general, perceptrón

- **Inspiración biológica:** Basadas en la analogía con neuronas del cerebro: reciben señales, las combinan y producen una salida si superan cierto umbral.

#### Modelo del perceptrón (neurona artificial)

- **Entradas:** $x_1, x_2, ..., x_n$.
- **Pesos:** $w_1, w_2, ..., w_n$.
- **Operación:**
    <center>
    $z = \Sigma_{i=1}^n w_ix_i + b$ <br>
    $y = \phi(z)$
    </center>
    donde $\phi$ es una función de activación (ej. escalón, sigmoide, ReLU, etc.).
- **Regla de aprendizaje del perceptrón (simplificada):**
    - Para una muestra $(x,y)$, si predicción $\neq$ etiqueta → actualizar pesos:
    <center>
    $w_i \leftarrow w_i + \eta (y - \hat{y})x_i$
    </center>
    donde $\eta$ es la tasa de aprendizaje.
- **Ejemplo práctico:**
    - Clasificar flores (Iris dataset) según medidas de pétalos y sépalos.
    - Cada característica = entrada; el perceptrón aprende a distinguir clases.

## Concepto de aprendizaje supervisado y no supervisado

#### Aprendizaje supervisado

- **Definición:** El modelo aprende a partir de ejemplos etiquetados $(x,y)$.
- **Objetivo:** predecir la salida correcta para nuevas entradas.
- **Ejemplos:**
    - Clasificación de correos: spam (1) vs. no spam (0).
    - Predicción de precios de casas a partir de tamaño, ubicación, etc.
- **Tipos principales:**
    - **Clasificación:** salida discreta (ej. "gato" o "perro").
    - **Regresión:** salida continua (ej. precio en dólares).

#### Aprendizaje no supervisado

- **Definición:** El modelo trabaja con datos no etiquetados, buscando descubrir estructura o patrones ocultos.
- **Ejemplos:**
    - Agrupar clientes de un supermercado según hábitos de compra (clustering).
    - Reducción de dimensionalidad para visualizar datos (ej. PCA).
- **Técnicas comunes:**
    - **Clustering (agrupamiento):** K-means, DBSCAN.
    - **Reducción de dimensionalidad:** PCA, t-SNE, autoencoders.

<br>
> **Resumen del módulo:**
> - En ML, los algoritmos aprenden a partir de datos en vez de reglas fijas.
> - El perceptrón es la base de las redes neuronales modernas.
> - Supervisado = con etiquetas, No supervisado = sin etiquetas.

---


***

### SOBRE EL USO DE INFORMACIÓN TOTAL O PARCIAL: 🔐
* Estos documentos fueron originalmente creados por el autor.
* Cualquier uso de estos documentos o sus contenidos están permitidos a través de la licencia provista y sus condiciones.
* Para cualquier aclaración, puedes contactar al autor: <https://rodolfoferro.xyz/>

**Copyright (c) 2025 Rodolfo Ferro**
