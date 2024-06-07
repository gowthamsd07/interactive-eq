Skip to content
DEV Community
Search...
Powered by  Algolia
Log in
Create account

0
Jump to Comments
0
Save

Cover image for Scroll-Driven Image Sequence Animation
Barigbue Nbira
Barigbue Nbira
Posted on 29 Apr • Updated on 5 Jun


1
Scroll-Driven Image Sequence Animation
#
react
#
javascript
#
animation
#
css
I came across this interesting animation on the polaroid's i2 camera website recently.

GIFA GIF image of the Polaroid I-2 camera website

This technique involves rendering a sequence of images on a canvas at different scroll positions. As you scroll up or down the page, different images are rendered on the canvas to create a sense of motion (it feels like playing a video on scroll). This animation can be seen on the Apple, Samsung, and lots of creative websites out there.

Here's the same animation for the Apple airpod.



This technique adds visual interest and interactivity to your website. It can tell a story, showcase product(s), or simply enhance the visual appeal of your website

Prerequisites
Basic understanding of React and JavaScript.
A sequence of images (use online tools to convert a short video into individual frames).
Optimized images in WebP format (convert the image sequence to WebP for faster loading).
Getting Started
JSX Markup and Styling
First, create the component that will serve as a container for our animation:

function ScrollSequence(){


    return(
    <section className="png__sequence">
    <canvas  width = {window.innerWidth} height={window.innerHeight} className = "png__sequence__canvas"  id="canvas"> </canvas> 
    </section>)
}
In this component, we have:

A element that serves as a wrapper for our animation.
A element where our images will be rendered. The width and height of the canvas are set to the current width and height of the browser window using window.innerWidth and window.innerHeight.
Styling with SCSS
N/B: Don't forget to do your resets.
.png__sequence{
  width: 100%;
  height: 500vh;
  position: relative;

  &__canvas{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  max-height: 100vh;
  position: sticky;
  z-index: 1;
}
}

The png__sequence has a height of 500vh to ensure that our page has enough scroll length for the animation to work.

Creating the Canvas and Context
We want our animation to start as soon as the component mounts. To do this, we will use the useEffect hook to wrap our animation code, and get the canvas element and its 2D rendering context.
import "./scrollSequence.scss";
import {useEffect, useRef} from  "react";


function ScrollSequence(){
const canvasRef = useRef(null);

useEffect(() => {
// Get the canvas element and its 2D context
const canvas = canvasRef.current;
const context = canvas.getContext("2d");
}

return (<section className="png__sequence">
<canvas ref={canvasRef} width = {window.innerWidth} height={window.innerHeight} className = "png__sequence__canvas"  id="canvas"> </canvas> 
</section> 
    );
}
Preparing Images
The images in our animation would be rendered on the canvas in sequence, based on the user's scroll position.

Name the images in in a sequence that matches their intended order, for example, image001.jpg, image002.jpg, image003.jpg, and so on. Don’t worry about this, the tool you used in creating the image sequence will handle this automatically.

Naming them this way will help us keep track of the current image being rendered on the canvas.
// number of images to be sequenced
const frameCount = 147;

// Generates the filename of the image based on the current index
const currentFrame = (index) => {
      return `/src/assets/xioami-watch-3-hero-asset/Home_${index
        .toString()
        .padStart(3, "0")}.jpg`;
    };
}
The value of the frameCount variable represents the total number of images that will be included in the PNG sequence.

Drawing Images on Canvas
The next step is to load the images and draw them on the canvas.
// Drawing the initial image on the canvas
const img = new Image();
    img.src = currentFrame(0);
    img.onload = function () {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
The drawImage method takes 5 arguments:

The image
The x and y axis coordinate at which to place the top-left corner of the image on the canvas
canvas.width specifies The width to draw the image in the destination canvas
canvas.height specifies The height to draw the image in the destination canvas
Preloading Images
Preloading images ensures that they are downloaded and cached by the browser, so that they are ready to be displayed when needed. This can help to ensure a smoother animation experience, as the images will not need to be loaded while the animation is running.

To preload all the images before starting the animation, we can create a new Image object for each image and set its src property to the corresponding image filename. Once the images have been created, we can start the animation.
const preloadImages = () => {
      Array.from({ length: frameCount }, (_, i) => {
        const img = new Image();
        img.src = currentFrame(i);
      });
    };
Updating Images
Update the current image, so it can be drawn on the canvas as the user scrolls.
const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
Tracking Scroll Position
The animation is driven by the user's scroll position. As the user scrolls down or up the page, we calculate the scroll position and map it to the appropriate frame index.

The canvas is then updated with the image corresponding to the calculated frame index, giving the illusion of movement.
window.addEventListener("scroll", () => {
      const html = document.documentElement;
          const wrap = document.querySelector(".png__sequence");
      const scrollTop = html.scrollTop;
      const maxScrollTop = wrap.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });

    preloadImages();
html is the document.documentElement object, which represents the HTML document itself.

scrollTop is the current scroll position of the HTML document.

maxScrollTop is the maximum scroll position of the .png__sequence element.

scrollFraction is the ratio of the current scroll position to the maximum scroll position.

frameIndex is the index of the current frame, based on the scroll fraction.

The requestAnimationFrame function requests a new animation frame.

The updateImage function updates the image on the canvas to the image corresponding to the current frame index.

The window.addEventListener function listens for the scroll event and updates the frame index accordingly.

Putting it all together:
import { useEffect, useRef } from "react";


function scrollSequence() {
 const canvasRef = useRef(null);
 useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

// number of images to be sequenced
    const frameCount = 147;

// Function to generate the filename of the image based on the current index
    const currentFrame = (index) => {
      return `/src/assets/xioami-watch-3-hero-asset/Home_${index
        .toString()
        .padStart(3, "0")}.jpg`;
    };

// Drawing the initial images on the canvas
    const img = new Image();
    img.src = currentFrame(0);
    img.onload = function () {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

//preloading images 
     const preloadImages = () => {
      Array.from({ length: frameCount }, (_, i) => {
        const img = new Image();
        img.src = currentFrame(i);
      });
    };

//update images
     const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

// Tracking the user scroll position
     window.addEventListener("scroll", () => {
      const html = document.documentElement;
      const wrap = document.querySelector(".png__sequence");
      const scrollTop = html.scrollTop;
      const maxScrollTop = wrap.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });
    preloadImages();

  }, []);
  return (
<div className="png__sequence">
<canvas ref={canvasRef} width = {window.innerWidth} height={window.innerHeight} className = "png__sequence__canvas"  id="canvas"> </canvas> 
</div>

  );
}

This is my result.

GIFsequence scrolling  animation

Conclusion
That's it folks, thank you for getting to this point. You can go crazy with this by implementing smooth scrolling using the Lenis smooth scroll library, or add text at different scroll positions using GSAP animation library. Until next time, Happy coding!

👋 While you are here

Reinvent your career. Join DEV.

It takes one minute and is worth it for your career.

Get started

Top comments (0)
Subscribe
pic
Add to the discussion
Code of Conduct • Report abuse
profile
Auth0
PROMOTED

Auth0

Easy to implement, endless possibilities
With a few lines of code, you can have Auth0 by Okta integrated in any app written in any language and any framework. 🚀 Start building for free today.

Sign up now

Read next
dakota_day profile image
Python vs. JavaScript
Dakota Day - Jun 3

sh20raj profile image
How to Install and Configure Cloudflared on Linux
Sh Raj - Jun 3

jonathan-dev profile image
Next.js: Best Way to Organize Your Project Structure
Jonathan U - Jun 4

kingsley_uwandu profile image
Best Practices for Writing Clean and Maintainable Html, Css, and JavaScript Code
Kingsley Uwandu - Jun 3


Barigbue Nbira
Follow
I’m driven by a genuine desire to become better. Interested in Software, DevOps, Cloud, and Finance.
LOCATION
Port Harcourt, Nigeria
PRONOUNS
He/Him
JOINED
6 Apr 2024
Trending on DEV Community 
Ayantunji Timilehin profile image
Essential Helper Functions for Your JavaScript Projects
#react #nextjs #javascript
Arjun Rao profile image
The art of complaining effectively
#beginners #productivity #career #learning
Dhrutisundar Sahoo profile image
Take me to a Beach! T-T
#devchallenge #frontendchallenge #css #javascript
profile
Platform.sh
PROMOTED

Billboard image

Deploy faster with an optimized developer experience
Optimize your workflow with instant cloning with the Platform.sh PaaS:

🔄 On-demand preview environments to speed testing
🛠 Robust team collaboration, rapid iteration
🛡 Consistent, reliable, and risk-free

Spend more time on the projects that matter to you.

Learn more

import { useEffect, useRef } from "react";


function scrollSequence() {
 const canvasRef = useRef(null);
 useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

// number of images to be sequenced
    const frameCount = 147;

// Function to generate the filename of the image based on the current index
    const currentFrame = (index) => {
      return `/src/assets/xioami-watch-3-hero-asset/Home_${index
        .toString()
        .padStart(3, "0")}.jpg`;
    };

// Drawing the initial images on the canvas
    const img = new Image();
    img.src = currentFrame(0);
    img.onload = function () {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

//preloading images 
     const preloadImages = () => {
      Array.from({ length: frameCount }, (_, i) => {
        const img = new Image();
        img.src = currentFrame(i);
      });
    };

//update images
     const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

// Tracking the user scroll position
     window.addEventListener("scroll", () => {
      const html = document.documentElement;
      const wrap = document.querySelector(".png__sequence");
      const scrollTop = html.scrollTop;
      const maxScrollTop = wrap.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });
    preloadImages();

  }, []);
  return (
<div className="png__sequence">
<canvas ref={canvasRef} width = {window.innerWidth} height={window.innerHeight} className = "png__sequence__canvas"  id="canvas"> </canvas> 
</div>

  );
}

