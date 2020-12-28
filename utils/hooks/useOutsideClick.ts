import { MutableRefObject, useEffect } from 'react';

const useOutsideClick = (ref: MutableRefObject<any>, cb: () => void) => {
  const handleClick: EventListener = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      cb();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  });
};

export default useOutsideClick;
