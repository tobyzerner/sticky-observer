export declare type StickyObserverOptions = {
    root?: Element | Document;
};
export default class StickyObserver {
    private readonly el;
    private readonly callback;
    private readonly options;
    private observer;
    constructor(el: Element, callback: (stuck: boolean, el: Element) => void, options?: StickyObserverOptions);
    start(): void;
    stop(): void;
}
