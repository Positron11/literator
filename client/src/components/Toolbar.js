// src/components/Toolbar.js
import React from 'react';
// import './Toolbar.css'; // split into own css file

const Toolbar = () => {
  return (
    <div id="toolbar">
      <div id="toolbar_buttons">
        <div className="toolbar-button">
          <img src="./images/Icons/top.svg" alt="Go to Top" />
        </div>
        <div className="toolbar-button">
          <img src="./images/Icons/bell.svg" alt="Updates" />
        </div>
        <div className="toolbar-button">
          <img src="./images/Icons/write.svg" alt="Continue" />
        </div>
        <div className="toolbar-button">
          <img src="./images/Icons/plus.svg" alt="New" />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
