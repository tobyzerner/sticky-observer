export type StickyObserverOptions = {
    root?: Element | Document;
};

export default class StickyObserver {
    private readonly el: Element;
    private readonly callback: (stuck: boolean, el: Element) => void;
    private readonly options: StickyObserverOptions;
    private observer?: IntersectionObserver;

    constructor(
        el: Element,
        callback: (stuck: boolean, el: Element) => void,
        options: StickyObserverOptions = {},
    ) {
        this.el = el;
        this.callback = callback;
        this.options = options;

        this.start();
    }

    public start() {
        this.stop();

        // Calculate negative margins based on the element's sticky offsets.
        // For sides that the element doesn't stick to, use 100% so
        // that the threshold will never be reached on that side.
        const style = getComputedStyle(this.el);
        const rootMargin = (['top', 'right', 'bottom', 'left'] as const)
            .map((side) =>
                style[side] === 'auto' || !style[side]
                    ? '100%'
                    : `${-1 * parseInt(style[side]) - 1}px`,
            )
            .join(' ');

        this.observer = new IntersectionObserver(
            (entries) => {
                this.callback(
                    !entries[entries.length - 1].isIntersecting,
                    this.el,
                );
            },
            {
                threshold: [1],
                rootMargin,
                root: this.options.root,
            },
        );

        this.observer.observe(this.el);
    }

    public stop() {
        this.observer?.disconnect();
    }
}
