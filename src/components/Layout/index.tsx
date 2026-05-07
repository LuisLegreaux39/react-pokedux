import './styles.css';
import React, { FC, PropsWithChildren } from 'react';
import Menu from '../Menu';

const Layout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className='Layout-content' style={{ display: "flex"}}>
        {children}
        {/* <div style={{ backgroundColor:"black" }}>
          here goes the vertical
        </div> */}
      </div>
    </div>
  );
};

export default Layout;
