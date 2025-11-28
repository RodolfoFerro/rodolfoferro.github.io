---
title: "[Taller práctico] Introducción a las neuronas artificiales"
layout: post
date: 2025-11-27 00:00
published: true
image: 
headerImage: true
tag:
- Artificial Intelligence
- Artificial neurons
category: course
hidden: false # don't count this post in blog pagination
externalLink: false
author: rodferro
description: "[Taller práctico] Introducción a las neuronas artificiales"
---

## 👾 Neuronas artificiales: idea general, perceptrón

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

---

Puedes descargar los slides [aquí](https://rodolfoferro.xyz/assets/talks/intro-neuronas.pdf) o puedes consultarlos en directo a continuación.

Para abrir el cuaderno de trabajo, puedes dar click en el siguiente botón:

<center>
  <a href="https://colab.research.google.com/gist/RodolfoFerro/34b7f50775a338e33f5a24d5ca0862f5/introducci-n-a-las-neuronas-artificiales.ipynb" target="_blank">
    <img src="https://camo.githubusercontent.com/eff96fda6b2e0fff8cdf2978f89d61aa434bb98c00453ae23dd0aab8d1451633/68747470733a2f2f636f6c61622e72657365617263682e676f6f676c652e636f6d2f6173736574732f636f6c61622d62616467652e737667" width="200px">
  </a>
</center>

### Slides

<iframe src="https://rodolfoferro.xyz/assets/talks/intro-neuronas.pdf" width="100%" height="450px" frameborder="0"></iframe>



***

### SOBRE EL USO DE INFORMACIÓN TOTAL O PARCIAL: 🔐
* Estos documentos fueron originalmente creados por el autor.
* Cualquier uso de estos documentos o sus contenidos están permitidos a través de la licencia provista y sus condiciones.
* Para cualquier aclaración, puedes contactar al autor: <https://rodolfoferro.xyz/>

**Copyright (c) 2025 Rodolfo Ferro**
