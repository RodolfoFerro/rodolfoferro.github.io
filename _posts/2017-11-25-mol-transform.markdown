---
title: "<code>mol_transform</code> 💻⚗️"
subtitle: Molecular transformations for graphic displaying using Cartesian coordinates.
layout: post
date: 2017-11-25 22:00
tag:
  - Python
  - Chemistry
  - Academic
image: ../assets/posts/logo_v0.1.png
headerImage: false
projects: true
hidden: true # don't count this post in blog pagination
description: "Molecular transformations for graphic displaying using Cartesian coordinates."
category: project
author: rodferro
externalLink: false
---

Molecular transformations for graphic displaying using Cartesian coordinates.<br>
Repository: [https://github.com/RodolfoFerro/mol_transform](https://github.com/RodolfoFerro/mol_transform)

<!-- Borrador agregado — verifica antes de publicar -->
Molecule coordinate files (`.xyz`) don't always come centered or scaled the way you need them for a specific visualization or downstream calculation. `mol_transform` is a small command-line tool that takes a `.xyz` file and re-centers, translates or scales the atomic positions, writing the result to a new file — useful as a quick preprocessing step before plotting or feeding the structure into another tool.

## How to use it

#### Generalities:
The `-f` tag stands for `file` and will open the file named `input.xyz`, center the first position into the origin and translate the rest of positions to maintain the structure. The `-o` tag stands for `output`, meaning that you need to add the output path (in our example is `output.xyz`).
Both tags (`-f` and `-o`) are needed.


- ### Centering

Simply run:
```bash
python mol_transform.py -f input.xyz -o output.xyz
```
**PLEASE OBSERVE** that we won't need need any extra parameters for a molecule translation to the center of our Cartesian space.

- ### Translating

To translate a molecule using a specific vector `(a, b, c)`, we'll need to use the `-t` tag (that stands to `translate`) and run:
```bash
python mol_transform.py -f input.xyz -o output.xyz -t -a -b -c
```

For instance, we have the position `(0.47050, -0.66520, -1.79270)` in our file `C20.xyz` and if we want to translate it to the origin (and the rest of the positions to maintain the structure), we would have to run:
```bash
python mol_transform.py -f C20.xyz -o C20_translated.xyz -t -0.47050 0.66520 1.79270
```
**PLEASE OBSERVE** that we need the inverted signs of each value of the position, since we want a negative translation to that position. Also, in this example we will create the file `C20_translated.xyz` with the translated positions.


- ### Scaling

To scale the molecule along the 3-axis by a vector `(a, b, c)`, we'll need to use the `-s` tag (that stands to `scale`) and run:
```bash
python mol_transform.py -f input.xyz -o output.xyz -s a b c
```

For instance in our file `C20.xyz`, if we want to scale it to the double of size we would have to run:
```bash
python mol_transform.py -f C20.xyz -o C20_scaled.xyz -s 2 2 2
```

------

## LICENSE

MIT License

Copyright (c) 2017 Rodolfo Ferro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
