declare module '@glidejs/glide' {
  export default class Glide {
    constructor(selector: string, options?: any);
    mount(extensions?: any): this;
    destroy(): this;
    go(pattern: string): this;
    on(event: string, callback: (...args: any[]) => void): this;
    update(options: any): this;
  }
}
declare module '@glidejs/glide/dist/glide.modular.esm' {
  import Glide from '@glidejs/glide';
  export default Glide;

  export const Controls: any;
  export const Breakpoints: any;
}
