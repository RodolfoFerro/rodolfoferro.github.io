---
title: "My @JuliaSetBot: A (python) bot that Tweets fractals. 🤖"
layout: post
date: 2017-04-14 20:00
published: true
image: "https://pbs.twimg.com/media/C9SbRNyWAAAHpAj.jpg"
headerImage: false
tag:
- Python
- Bots
- Tweepy
- Bot
- Fractals
category: blog
author: rodferro
description: My fractal Twitter bot.
# jemoji: '<img class="emoji" title=":ramen:" alt=":ramen:" src="https://assets.github.com/images/icons/emoji/unicode/1f35c.png" height="20" width="20" align="absmiddle">'
---

![JuliaSetBot](https://pbs.twimg.com/media/C9SbRNyWAAAHpAj.jpg)


<a href="https://www.python.org" target="_blank">Python</a> is a language that can be easily learnt and used for many things. A cool thing about Python is that many interesting stuff has already been developed. An example of this is <a href="http://www.tweepy.org" target="_blank">Tweepy</a>, which is an easy-to-use Python library for accessing the Twitter API.

I really like to try integrating different technologies, so I gave myself the task of trying to build a Twitter bot using Tweepy. The result: I built a bot that everyday at 11:00 UTC (6:00 in Mexico) it generates a random complex number, then it iterates it in a function in order to generate a Julia set, and finally the bot Tweets the fractal generated. You can check it out at <a href="https://twitter.com/JuliaSetBot" target="_blank">@JuliaSetBot</a>.

An example of what it does is embed here:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Random complex: 0.147 +0.87i <br>Iterations: 50<br>Fractal generated on: Mon Dec 18 23:08:34 2017 UTC. <a href="https://t.co/BPRwrp1oBO">pic.twitter.com/BPRwrp1oBO</a></p>&mdash; Julia Sets (@JuliaSetBot) <a href="https://twitter.com/JuliaSetBot/status/942894390900674561?ref_src=twsrc%5Etfw">December 18, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


Awesome right? 🤖
