FastActive
==========

In my experience, a big reason that web apps feel slower than native is *not* that  that web based interfaces actually take longer to respond to user interaction, but that *they don't provide instant visual feedback to touch interactions.* 

If you watch for it, you'll see that it's not uncommon to wait for a second or two for an action to complete in a native iOS app (e.g., tapping a list item in the Settings app, for example, can take a while to actually complete the navigation to the target screen). The difference, however, is that in a native app, the UI *instantly* lets the user know that the tap was registered by providing visual feedback. This has the effect of reassuring the user that "Yes, we received your request and are working on it as fast as we can." 

Web developers can remove the lag on touch interactions in web apps by listening for touch events, but trying to actually respond to touch events as if they were clicks is a huge amount of work and fraught with xplat gotchas. I wanted to make a simple snippet that any n00b could slap into their markup that would create a native-like touch responsiveness without adding the complexity of jettisoning click events entirely. 

Hence, FastActive. FastActive basically does one thing and one thing only: it toggles an active class name on whatever links the user touches. With that single hook, devs can write simple CSS that will provide instantaneous visual feedback to the user. 

To date, FastActive has been tested in two simple websites, one simple web app, and one complex web app, and the effect has been pretty dramatic. That said, I'd love to get your feedback, so please give it a try and log issues or send pull requests. 

Cheers!

[Jonathan Stark](http://jonathanstark.com)

License: Open-source MIT license

Copyright 2013: Jonathan Stark

## Project Goals

The goal of FastActive is to make it simple for web developers to add instantaneous visual feedback for touch interactions to their websites and web apps. 

## Features

* Ultra-lightweight: way less than 1k minified.
* MIT license: use it wherever you want.
* Designed for responsive design: safe for use in cross-device development
* Framework-independent: use with any JS library, or none at all!

## Usage

1. Place a copy of FastActive.min.js on your web server.
2. Link to your copy of FastActive.min.js just before the the closing body tag of your HTML pages. 
3. There is no step 3!

Alternatively, you can just paste the FastActive source into a script tag at the bottom of your HTML pages to save yourself an HTTP request. 

Once you have added FastActive to your site, all it does is add a `active` class instantly (ontouchstart) to any tapped link. Therefore, you're going to want to make a couple changes to your CSS: 

1. Disable default touch browser tap highlights, like so:

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
