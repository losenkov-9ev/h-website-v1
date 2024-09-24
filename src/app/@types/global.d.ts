declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare global {
  interface WindowEventMap {
    fullscreenchange: Event;
  }
}

/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob: (pattern: string, options?: { eager?: boolean; import?: string }) => Record<string, any>;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
}
