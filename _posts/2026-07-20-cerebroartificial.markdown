---
title: "Del Micrófono al Cerebro Artificial"
layout: post
date: 2026-07-20 00:00
published: true
image:
headerImage: false
tag:
- Audio
- CNN
- Embedded Systems
- Clubes de Ciencia
category: course
hidden: false # don't count this post in blog pagination
externalLink: false
author: rodferro
description: "Taller de Clubes de Ciencia Aguascalientes 2026 sobre reconocimiento de emociones por voz en dispositivos embebidos."
---

Taller para **Clubes de Ciencia Aguascalientes 2026** (20-23 de julio), impartido junto con Hugo Mitre (CIMAT): **"Del Micrófono al Cerebro Artificial"**.

La pregunta que guía el taller: ¿puede una máquina saber si estás enojado solo por cómo suena tu voz? Para responderla, convertimos el sonido en datos (FFT, espectrogramas, MFCCs), extraemos patrones invisibles al oído humano, y entrenamos clasificadores — de perceptrones a redes convolucionales — para reconocer emociones en la voz.

Cerramos desplegando un modelo ligero (**MicroLightCNN**) en un microcontrolador ESP32-S3 con micrófono I2S y una matriz de LEDs MAX7219, para tener un reconocedor de emociones funcionando en hardware de bajo consumo.

Página del taller: [rodolfoferro.xyz/cerebroartificial](https://rodolfoferro.xyz/cerebroartificial/)<br>
Repositorio: [github.com/RodolfoFerro/cerebroartificial](https://github.com/RodolfoFerro/cerebroartificial)
