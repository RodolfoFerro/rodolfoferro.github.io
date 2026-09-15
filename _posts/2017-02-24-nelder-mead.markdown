---
title: "Nelder-Mead Method"
layout: post
date: 2017-02-17 20:00
published: false
image: "https://pbs.twimg.com/media/C9SbRNyWAAAHpAj.jpg"
headerImage: false
tag:
- Python
- Optimization
- Numerical methods
- Simplex method
category: blog
author: rodferro
description: Nelder-Mead Method.
# jemoji: '<img class="emoji" title=":ramen:" alt=":ramen:" src="https://assets.github.com/images/icons/emoji/unicode/1f35c.png" height="20" width="20" align="absmiddle">'
---

A while without posting...

Well, this is part of a set of exercises that I'll be solving for, you know, personal stuff. I'll do Copy-Paste of some stuff just to set the context and the idea, which was taken from the book Numerical Methods Using Matlab by John H. Mathews and Kurtis K. Fink. The implementation shown at the end was done all by me using Python.

# Nelder-Mead Method

A simplex method for finding a local minimum of a function of several variables has been devised by Nelder and Mead. For two variables, a simplex is a triangle, and the method is a pattern search that compares function values at the three vertices of a triangle. The worst vertex, where {% latex density=100 %}$f (x, y)${% endlatex %} is largest, is rejected and replaced with a new vertex. A new triangle is formed and the search is continued. The process generates a sequence of triangles (which might have different shapes), for which the function values at the vertices get smaller and smaller. The size of the triangles is reduced and the coordinates of the minimum point are found.

The algorithm is stated using the term simplex (a generalized triangle in $N$ dimensions) and will find the minimum of a function of $N$ variables. It is effective and computationally compact.
