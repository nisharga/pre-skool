"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';


const usePreviousRoute = () => {
  const location = usePathname();
  const previousLocation = useRef(location);

  useEffect(() => {
    previousLocation.current = location;
  }, [location]);

  return previousLocation.current;
};

export default usePreviousRoute;