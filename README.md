FastActive
==========

FastActive is a javascript snippet that makes websites and web apps feel as responsive as native apps on touch devices.

## Project Goals

The goal of FastActive is to make it simple for web developers to add instantaneous visual feedback for touch interactions to their websites and web apps with a minuscule amount of javascript. 

## Features

* Paste and done: you don't write any javascript!
* Ultra-lightweight: __516 bytes minified (280 bytes gzipped)!__
* MIT license: use it _wherever you want_.
* Responsive design friendly: safe for use in cross-device development.
* Framework-independent: use with any JS library, or none at all!

## Usage

For best results, paste the FastActive source into a script tag at the bottom of your HTML page right before the closing body tag. View source at the bottom of [this page](http://jonathanstark.com/) for an example.

Once you have added FastActive to your site, all it does is add and remove class names. It's up to you to create CSS rules that style the active links appropriately. Here are some suggestions:

* Disable default touch browser tap highlights, like so:

    ```
    a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    ```

* Define some default styles for links, like so:

    ```
    a {
        background-color: white;
        color: darkmagenta;
    }
    ```

* Add distinct visual styles for any `a.active` elements, like so:

    ```
    a.active {
        background-color: darkmagenta;
        color: white;
    }
    ```
    
* The `:hover` and `:active` pseudo class selectors are extremely unpredictable in touch browsers. To limit your `:hover` and `:active` style rules to desktop browsers, prepend the selectors with the `.no-touch` class selector, like so:

    ```
    .no-touch a:hover {
        background-color: magenta;
        color: white;
    }
    .no-touch a:active {
        background-color: darkmagenta;
        color: white;
    }
    ```

__NOTE:__ You can change the class name from the default of `active` to whatever you like by editing the third param passed into the immediately invoked function expression (see the last line of the unminified snippet).

## Discussion 

In my experience, the main reason that web apps feel slower than native is *not* that web based interfaces actually take longer to respond to user interaction, but that *they don't provide instant and predictable visual feedback to touch interactions.* 

If you watch for it, you'll see that it's not uncommon to wait for a second or two for an action to complete in a native iOS app (e.g., tapping a list item in the Settings app, for example, can take a while to actually complete the navigation to the target screen). The difference, however, is that in a native app, the UI *instantly* lets the user know that the tap was registered by providing visual feedback. This has the effect of reassuring the user that "Yes, we received your request and are working on it as fast as we can." 

Web developers can remove the lag on touch interactions in web apps by listening for touch events, but trying to actually respond to touch events as if they were clicks is a huge amount of work and fraught with xplat gotchas. I wanted to make a simple snippet that any n00b could slap into their markup that would create a native-like touch responsiveness without adding the complexity of jettisoning click events entirely. 

Hence, FastActive. FastActive basically does one thing and one thing only: it toggles an active class name on whatever links the user touches. With that single hook, devs can write simple CSS that will provide instantaneous visual feedback to the user. 

To date, FastActive has been tested in two simple websites, one simple web app, and one complex web app, and the effect has been pretty dramatic. That said, I'd love to get your feedback, so please give it a try and log issues or send pull requests. 

Cheers!

[Jonathan Stark](http://jonathanstark.com)

## Caveats

[@RickByers](https://twitter.com/RickByers) (Google dev working on Chrome and ChromeOS) pointed out on Twitter that listening to touch events can impose a performance penalty on page scrolling. It's pretty complicated but he does a great job explaining it [here](https://plus.google.com/app/basic/stream/z12oxpsjztabz1wip04cepebireehbbaltc0k). 

I haven't experienced any scroll jankiness myself but YMMV. PLMK if you do notice performance problems and I'll take a look at your page to see if there's something I can to do optimize the FastActive code. 

## More Info

For more info about the reasoning behind FastActive, please listen to [Episode 76 of the Nitch Podcast](http://nitch.cc/podcast/episode-76-tickle-class).

Thanks to [@paul_irish](https://twitter.com/paul_irish) for pointing me at [this excellent post](http://www.gauntface.co.uk/blog/2013/06/25/touch-feedback-for-mobile-sites/) by [@gauntface](https://twitter.com/gauntface) who deconstructs the issues involved using videos, demos, and interactive code examples. Great stuff!

