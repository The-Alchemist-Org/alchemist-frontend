import React, { useEffect } from 'react';

type Props = {
  callback: () => void;
  ref: React.RefObject<HTMLElement>;
};

export const useHandleClickOutside = ({ ref, callback }: Props) => {
  const handleClickOutside = ({ target }: MouseEvent) => {
    if (ref.current && !ref.current.contains(target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);
};
