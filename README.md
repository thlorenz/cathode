# cathode

Example for react server side rendering without the fluff.

**Warning**: before looking into this project or any related hype, please make sure first that you really, really need
to render server side. Bots got a lot better at figuring out your pages and you may not need this in the beginning.
Maybe just build your page/app first and then add server side rendering later?

OK, convinced you need SSR, then start here, understand each piece and then progress incrementally when you have a need
for more features and or performance improvements.

This is way better than buying into some _"platform"_ that just generates (dumps) a huge amount of code into a folder
and calls it your app. It is much harder to understand that than if you built it yourself ... believe me. On the other
hand if you're happy to use a black box as the basis of your app _yo_ u can just run that generator now ;) ...

## To Use

```
npm install && npm start
```

Or the below

## Run Server

```
make serve
```

## Build vendor bundle

```
make vendor
```

## Watch our bundle

```
make watch
```

## Perf Improvements

If you run into performance problems (and only then) you can have a look into the following:

- [above the fold rendering](https://github.com/electrode-io/above-the-fold-only-server-render)
  - render only server side what you need to show the first part of the page 
  - all else is rendered client side (i.e. when the user scrolls the page)
  - no magic there, you still need to manually configure which components to show
- [cache server side rendered components](https://github.com/electrode-io/electrode-react-ssr-caching)
  - please measure first that you actually need this
  - then double check that the _template_ "cache" option really gives you the hoped for improvements, as it still needs
    to do some string manipulation to produce the html
- assuming you didn't fully drink the cool-aid you could think of some alternative options for caching as [explained
  here](https://ateev.in/react-js-achieving-20ms-server-response-time-with-server-side-rendering-1ea80e420d88#.ui0fosjal)
