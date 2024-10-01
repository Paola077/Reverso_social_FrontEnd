import React, { useState } from 'react';
import './_DynamicTab.scss';

const DynamicTab = ({ label, onClick }) => {
    return (
      <div className="secctionTabContainer">
      <div className="secctionTab" onClick={onClick}>
        {label}
      </div>
      <div className="underlineTab" ></div>
      </div>
    );
  };
  
  export default DynamicTab;