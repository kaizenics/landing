declare module 'aos' {
    const aos: {
      init: (options?: AOSOptions) => void;
      refresh: () => void;
      [key: string]: any;
    };
  
    export default aos;
  
    interface AOSOptions {
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
      [key: string]: any;
    }
  }
  