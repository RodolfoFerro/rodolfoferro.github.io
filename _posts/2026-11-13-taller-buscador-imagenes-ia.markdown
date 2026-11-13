---
title: "Buscador de imágenes con IA: embeddings, similitud y clasificación con pocos datos"
layout: post
date: 2026-11-13 00:00
published: true
image:
headerImage: false
tag:
- Computer Vision
- Embeddings
- CLIP
- Remote Sensing
- Datostada
category: talk
hidden: false # don't count this post in blog pagination
externalLink: false
author: rodferro
description: "Taller de nivel intermedio en Datostada 2026: un buscador y clasificador de imágenes satelitales con embeddings de CLIP, sin entrenar ninguna red neuronal."
pdf: /assets/talks/buscador-imagenes-ia.pdf
pdf_name: buscador-imagenes-ia.pdf
---

Taller para **[Datostada 2026](https://datostada.mx)**: **"Buscador de imágenes con IA: embeddings, similitud y clasificación con pocos datos"** 🛰️

En menos de dos horas construimos un pequeño sistema de visión por computadora **sin entrenar ninguna red neuronal**. Con un modelo preentrenado (CLIP) convertimos imágenes satelitales de EuroSAT en vectores de números y, con ellos, visualizamos el dataset con PCA y UMAP, armamos un buscador de imágenes similares, clasificamos solo con texto (*zero-shot*) y vimos cómo unos pocos ejemplos etiquetados llevan la exactitud de 45% a 86%.

La pregunta que guía el taller: **¿basta un modelo de IA general para entender imágenes de un dominio específico, o necesitamos nuestros propios datos?**

**Material:**

- Notebook en Google Colab: [rodolfoferro.xyz/buscador-imagenes-notebook](/buscador-imagenes-notebook/)
- Repositorio: [github.com/RodolfoFerro/buscador-imagenes-ia](https://github.com/RodolfoFerro/buscador-imagenes-ia)
- Serie en el blog: [parte I, de píxeles a vectores](/buscador-imagenes-ia/) y [parte II, clasificar con (casi) cero etiquetas](/buscador-imagenes-ia-II/)

Slides del taller, embebidos abajo (o descárgalos directamente).
