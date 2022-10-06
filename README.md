# Launchpad


Launchpad is a simple website that allows you to play music with a press of a key.

The idea came from the following website https://agile-spire-1086.herokuapp.com/. 

---
<br>

## Introduction
---
<br>

The design of the website was to mimick an actual Launchpad. Similar to that of the product, Novation - Launchpad.

<br>

#### How does it work?
---
Utilizing the `keydown` event listener and `keycodes`, each key was assigned to it's respective audio source. 

When a key is pressed, the audio is played. Repressing the same keys, restarts the audio time back to zero, allowing for multiple press of the key. 

---
<br>

#### Process of Creating Audio Source
---

The only necessary step was to create individual sounds from a full MP3 file.

The website did not utilize any pre made audio, such as drumkits, piano sounds, etc... Thus, all the audio sources had to be created. 

<b>GarageBand</b>

The MP3, <b>Boy & Bear - Pogo</b> was downloaded and uploaded into GarageBand.

The process consisted of spliting the file into multiple sections, saving the full audio where the split was created, deleting all the audio that will not be used, saving the individual clipped audio, then reloading the previously saved audio with the split section (this was to ensure that no individual clipped audio contained the previous audio).

Only portions of the MP3 file needs to be split and saved, as the song had repeated sections, so it was unnecessary to split everything. 

---
<br>

## Website Design
---
<br>

As previously mentioned, the inspiration was from the actual product by <b>Novation</b> and an online launchpad. 

When the website is loaded, the pads are lit up from the outermost keys and until it reaches the center.

To make the launchpad more intuitive, each pad displayed the key that was assigned to it, so users know what keys are available. 

When a key is pressed, it displays a sequence of lit pads, to mimick an actual launchpad. 

---
<br>

### Problems
---
<br>

<b>Creating the sequence of lights</b>


The use of `setTimeout()` was not working as planned when placed in a while loop or for loop. 

As the `setTimeout()` function is a callback function, it would only be executed once the loop had completed.

Thus, a function `setDelay(pad, key)` had to be created. The function would be invoked in a for loop taking passing the index of the for loop and the respective div pad. 

The timer was multiplied based on the index of the loop, so that visually, there was a sequence of pads that lit up and would turn off. If this step was not taken, then all of the pads would light up at the same time and turn off at the same time. 

<br>

<b>Audio Visualizer</b>

Goal - the audio file would display an audio visual in the background displaying the frequency of the respective audio file.

After multiple attempts, from my understanding, this was not possible, as the audio source was played locally and not through a server. Additionally, Chrome caused several problems, such as, <b>CORS Policy</b> and what not. 

---
<br>

## Credits
---

<br>

MP3 download for the song, <b>Boy & Bear - Pogo</b>.

https://archive.org/details/soundcloud-351778162

Some of the code utilized to create this launchpad was from a developer on Youtube, <b>Wes Bos</b>, who created a Drum Kit.

https://www.youtube.com/watch?v=VuN8qwZoego

Figuring out keycodes.

https://www.educba.com/javascript-keycodes/

Resolving setTimeout issue within loops, <b>Soyeong Oh</b>.

https://medium.com/@axionoso/watch-out-when-using-settimeout-in-for-loop-js-75a047e27a5f

Launchpad inspiration, <b>Daniel Weber</b>.

https://agile-spire-1086.herokuapp.com/