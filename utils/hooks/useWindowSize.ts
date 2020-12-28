import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<[number | null, number | null]>([
    null,
    null,
  ]);

  const handleResize = () =>
    setWindowSize([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
