---
title: "Monitoreo emocional en terapia psicológica con FER"
subtitle: "Psychopathology FER Assistant — ganador del TensorFlow 2.0 Challenge (Devpost, #TFWorld)."
layout: post
date: 2023-03-25 00:00
published: true
image:
headerImage: false
tag:
- TensorFlow
- Facial Expression Recognition
- Mental Health
- Edge AI
projects: true
hidden: false # don't count this post in blog pagination
description: "Ganador del TensorFlow 2.0 Challenge — asistente que monitorea emociones de pacientes en terapia con FER."
category: project
author: rodferro
externalLink: false
---

🏆 **Ganador del TensorFlow 2.0 Challenge** (Devpost, #TFWorld).

<center>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Y1DfFQbkmYM" title="Psychopathology Assistant Project #TFWorld TF 2.0 Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

Plataforma que da seguimiento a las respuestas emocionales de pacientes en psicoterapia usando reconocimiento de expresiones faciales (FER): un modelo analiza la cámara del paciente durante la sesión para identificar emociones, ayudando al profesional de salud mental a monitorear el progreso del tratamiento y mantener un expediente asistido por IA.

<center>
  <img src="https://raw.githubusercontent.com/RodolfoFerro/psychopathology-fer-assistant/master/assets/7.png" alt="Dashboard de Psychopathology Assistant: login, expediente de pacientes y actividad de FER en tiempo real" width="100%">
</center>

**Stack técnico:**

- Red neuronal profunda extendida (EDNN) propia, entrenada con TensorFlow 2.0 en Google Colab.
- Cuantización del modelo con TensorFlow Lite para correr en el borde (edge).
- Despliegue en una Raspberry Pi 3B+ con OpenCV para la detección facial (~3% de uso de CPU).
- Dashboard con Flask + Dash (Dash Bootstrap Components) y persistencia en Firebase Realtime Database.

**Resultados:** ~47.4% de precisión en el dataset del reto de Kaggle (FER Challenge, 12 épocas); 95.6% de precisión al entrenar con la base de datos Radboud Faces, con muy pocos recursos.

Repositorio: [github.com/RodolfoFerro/psychopathology-fer-assistant](https://github.com/RodolfoFerro/psychopathology-fer-assistant)
