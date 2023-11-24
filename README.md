# Sticky Observer

**Observe when `position: sticky` elements become stuck and unstuck.**

Sets up an `IntersectionObserver` for the sticky element, using negative `rootMargin` values so that when the element reaches its sticky position, the observer will see the bounding box as being slightly off-screen.

![npm bundle size](https://img.shields.io/bundlephobia/minzip/sticky-observer)

## Installation

```
npm install sticky-observer --save
```

## Usage

```ts
import StickyObserver from 'sticky-observer';

// Construct the observer by passing the element to watch, and a
// callback to be run whenever the element becomes stuck or unstuck.
const observer = new StickyObserver(el, (stuck) => {
    el.classList.toggle('is-stuck', stuck);
});
```

### Options

You can pass options as the third argument:

```ts
const observer = new StickyObserver(el, callback, {
    // The element that is used as the viewport for checking the state of the
    // element. Defaults to the browser viewport if not specified.
    root: document,
});
```

### Methods

```ts
// Start observing the element. This is called automatically when the observer is
// constructed, so there's no need to call it again, unless you've stopped the
// observer previously. You can also call it to recalibrate the observer if you
// know that the element's sticky offset has changed.
observer.start();

// Stop observing the element.
observer.stop();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
