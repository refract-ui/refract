import { Button } from '@refract/core';
import { useIsomorphicLayoutEffect } from '@refract/utils';

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log('refract docs page');
  }, []);
  return (
    <div>
      <h1>refract Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
