import React, { useEffect, useState } from 'react';

const initialSize = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const WindowSizeContext = React.createContext({
  size: initialSize,
});

export const WindowSizeCtxProvider = props => {
  const [size, setSize] = useState(initialSize);

  const resizeWindowHandler = e => {
    setSize({
      width: e.target.innerWidth,
      height: e.target.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeWindowHandler);
  }, []);

  return (
    <WindowSizeContext.Provider
      value={{
        size: size,
      }}
    >
      {props.children}
    </WindowSizeContext.Provider>
  );
};

export default WindowSizeContext;
