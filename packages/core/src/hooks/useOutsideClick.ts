import { useEffect } from 'react';

type returnValueTypes = void | (() => void);

const useOutsideClick = (
  ref: React.MutableRefObject<any>,
  isActive: boolean,
  callback: (e: MouseEvent) => void
): returnValueTypes => {
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
