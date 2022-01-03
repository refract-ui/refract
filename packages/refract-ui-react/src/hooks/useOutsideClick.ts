import { useEffect } from 'react';

/**
 * useOutsideClick
 *
 * @param {React.MutableRefObject<any>} ref - a ref to the target element
 * @param {boolean} isActive - indicates if the outsideClick callback should be active
 * @param {(e: MouseEvent) => void} callback - function to be called on outside click
 */
const useOutsideClick = (
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  ref: React.MutableRefObject<any>,
  /* eslint-enable @typescript-eslint/no-explicit-any */
  isActive: boolean,
  callback: (e: MouseEvent) => void
): void => {
  const handleClick = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener('click', handleClick);
    } else {
      document.removeEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
