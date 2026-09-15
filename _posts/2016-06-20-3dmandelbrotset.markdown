---
title: "Ploteando el Conjunto de Mandelbrot en 3D"
layout: post
date: 2016-06-20 20:00
published: true
image: "https://pbs.twimg.com/media/C9SbRNyWAAAHpAj.jpg"
headerImage: false
tag:
- Python
- Mayavi
- 3D
- Mandelbrot set
- Fractals
category: blog
author: rodferro
description: Ploteando el Conjunto de Mandelbrot en 3D.
# jemoji: '<img class="emoji" title=":ramen:" alt=":ramen:" src="https://assets.github.com/images/icons/emoji/unicode/1f35c.png" height="20" width="20" align="absmiddle">'
---

En este post se expone cómo se plotea el Conjunto de Mandelbrot en 3D usando Python (obviamente) y Mayavi.

<!-- Borrador agregado — verifica antes de publicar -->
El Conjunto de Mandelbrot se define iterando la función $z_{n+1} = z_n^2 + c$ para cada número complejo $c$ del plano, empezando en $z_0 = 0$: si la secuencia se mantiene acotada, $c$ pertenece al conjunto; si diverge, no. Normalmente se visualiza en 2D coloreando cada punto según qué tan rápido escapa, pero aquí usamos esa misma "velocidad de escape" como una tercera dimensión (altura), lo que convierte el fractal plano en una superficie.

El código resulta ser bastante sencillo: sólo importamos las librerías que utilizaremos (numpy y mayavi), creamos nuestra función que itere sobre nuestro subconjunto del plano complejo, iteramos alguna función sobre dicho subconjunto y ploteamos el resultado obtenido.

A continuación, se muestra el código utilizado:

```python
# Author: Rodolfo Ferro <ferro@cimat.mx>
# Plotting the Mandelbrot Set in 3D using mayavi

from mayavi import mlab
import numpy as np

# Set the max number of iterations
N = int(input("Max number of iterations: "))
epsilon = 1e-10

# Set the main function for [-2,2]x[-2,2] in C
def Mandelbrot(f,N,eps):
   x = np.linspace(-2,2,512)
   y = np.linspace(-2,2,512)
   Z = np.matrix([ [ complex(y[j],x[i]) for j in range(512) ] for i in range(512) ])
   C = Z
   IMG = np.zeros([512,512])

   vec_F = np.vectorize(f)
   for i in range(N):
      Z = vec_F(Z,C,2)
      IMG += 1.0*(abs(Z) > eps)
   return IMG

# Some functions to plot (f2 with N =2 is the Manselbrot set)
def f1(x,c,n): return c*np.exp(np.power(x,n))
def f2(x,c,n): return np.power(x,n)+c
def f3(x,c,n): return c*np.sinh(x)
def f4(x,c,n): return c*np.cosh(x)
def f5(x,c,n): return c*np.sin(np.power(x,n))
def f6(x,c,n): return c*np.cosh(np.power(np.sinh(x),n))+c

# Iterate the subset of the complex plane
img_Mandelbrot = Mandelbrot(f2,N,epsilon)

# Display it in 3d
mlab.figure(size=(400, 300))
mlab.surf(img_Mandelbrot, colormap='hot', warp_scale='auto', vmax=1.5)
mlab.view(65, 27, 322, [30., -13.7,  136])
mlab.show()
```

Y el resultado, con 50 iteraciones para f2 con n = 2:

<iframe width="560" height="310" src="https://www.youtube.com/embed/eK5baHhq-M0" frameborder="0" allowfullscreen></iframe>

Conoce más información sobre el <a href="https://en.wikipedia.org/wiki/Mandelbrot_set" target="_blank" rel="noopener"><span style="color: #0066cc;">Conjunto de Mandelbrot</span></a>.
