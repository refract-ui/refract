import { useEffect } from 'react';

type returnValueTypes = void | (() => void);

const useOutsideClick = (
  ref: React.MutableRefObject<any>,
  isActive: boolean,
  callback: () => void
): returnValueTypes => {
  const handleClick = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
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
