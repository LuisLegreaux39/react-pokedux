import './styles.css';
import React, { FC, PropsWithChildren } from 'react';
import Menu from '../Menu';

const Layout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className='Layout-content' style={{ display: "flex", justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
