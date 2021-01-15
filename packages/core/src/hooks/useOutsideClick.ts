import { useEffect } from 'react';

const useOutsideClick = (ref: any, isActive: boolean, callback: any) => {
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
