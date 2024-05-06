import React from 'react';
import './Menu.css';

export const Menu = ({menu, information1, information2, information3, information4}) => {
  return (
    <div className={menu}>
       <nav>
         <ul>
            <a href="">{information1}</a>
            <a href="">{information2}</a>
            <a href="">{information3}</a>
            <a href="">{information4}</a>
        </ul>
      </nav>
    </div>
  );
};
