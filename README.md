FastActive
==========

FastActive is a javascript snippet that makes websites and web apps feel as responsive as native apps on touch devices. 

License: Open-source MIT license

Copyright 2013: Jonathan Stark

## Project Goals

The goal of FastActive is to make it simple for web developers to add instantaneous visual feedback for touch interactions to their websites and web apps. 

## Features

* Ultra-lightweight - way less than 1k minified.
* MIT license: use it wherever you want.
* Designed for responsive design: safe for use in cross-device development
* Framework-independent: use with any JS library, or none at all!

## Usage

1. Place a copy of FastActive.min.js on your web server.
2. Link to your copy of FastActive.min.js just before the the closing body tag of your HTML pages. 
3. There is no step 3!

Alternatively, you can just paste the FastActive source into a script tag at the bottom of your HTML pages to save yourself an HTTP request. 

Once you have added FastActive to your site, all it does is add a `active` class instantly (ontouchstart) to any tapped link. Therefore, you're going to want to make a couple changes to your CSS: 

1. Disable default touch browser tap highights, like so:

    ```
    a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    ```

2. Add distinct visual styles for any `a.active` elements, like so:

    ```
    a.active {
        background-color: magenta;
        color: white;
    }
    ```
    
__NOTE:__ You can change the class name from the default of `active` to whatever you like by editing the second param passed into the immediately invoked function expression (see the last line of the unminified snippet).

## More Info

For more info about the reasoning behind FastActive, please listen to [Episode 76 of the Nitch Podcast](http://nitch.cc/podcast/episode-76-tickle-class).
