// declare module '*.mdx';

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

/* declare module '*.mdx' {
  import React from 'react';
  declare const component: React.ComponentType;
  export default component;
} */
