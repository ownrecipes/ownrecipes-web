import { useEffect, useState } from 'react';

export default function useIsScreenMdUp(): boolean {
  const [isScreenMdUp, setIsScreenMdUp] = useState<boolean>(false);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setIsScreenMdUp(e.matches);
    window.matchMedia('(min-width: 768px)').addEventListener('change', handler);
    setIsScreenMdUp(window.matchMedia('(min-width: 768px)').matches);
  }, []);

  return isScreenMdUp;
}
