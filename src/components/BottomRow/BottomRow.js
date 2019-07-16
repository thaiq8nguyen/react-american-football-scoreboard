import React from "react";
import "./BottomRow.css";

const BottomRow = () => {
  return (
    <div className="level bottomRow">
      <div className="level-item down has-text-centered">
        <div>
          <h3 className="down__title heading">Down</h3>
          <div className="down__value">3</div>
        </div>
        
      </div>
      <div className="level-item toGo has-text-centered">
        <div>
          <h3 className="toGo__title heading">To Go</h3>
          <div className="toGo__value">7</div>
        </div>
        
      </div>
      <div className="level-item ballOn has-text-centered">
        <div>
          <h3 className="ballOn__title heading">Ball on</h3>
          <div className="ballOn__value">21</div>
        </div>
        
      </div>
      <div className="level-item quarter has-text-centered">
        <div>
          <h3 className="quarter__title heading">Quarter</h3>
          <div className="quarter__value">4</div>
        </div>
        
      </div>
    </div>
  );
};

export default BottomRow;
