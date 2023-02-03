import React from 'react';
import ShowGame from './ShowGame';


const CardList = () => (
    <div className="container">
      <div className="row">
        <div className="col-6 mb-3">
          <ShowGame />
        </div>
        <div className="col-6 mb-3">
          <ShowGame />
        </div>
        <div className="col-6 mb-3">
          <ShowGame />
        </div>
        <div className="col-6 mb-3">
          <ShowGame />
        </div>
        <div className="col-6 mb-3">
          <ShowGame />
        </div>
        <div className="col-6 mb-3">
          <ShowGame />
        </div>
      </div>
    </div>
  );
  

export default CardList;
