import React from 'react';

export const useScrollbarWidth = () => {
  const doc = document.documentElement;
  const getScrollbarWidth = () => {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
    doc.style.setProperty('--scrollbar-width', `${scrollWidth}px`);
  };

  React.useEffect(() => {
    getScrollbarWidth();
  }, []);
};
