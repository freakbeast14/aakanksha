import React from "react";
import "../css/furniture.css";

const Furniture = () => {
  return (
    <div className="furniture-holder">
      <div className="furniture-container">
        <div className="furniture-div">
          <div className="furniture-detail">
            <div className="furniture-detail-container fmr">
              <div className="furniture-heading">FURNITURE FOR EVERY ROOM!</div>
              <div className="furniture-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets .
              </div>
              <div className="furniture-link">
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
          <div className="furniture-image">
            <img
              src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="f-image"
            />
          </div>
        </div>
        <div className="furniture-div">
          <div className="furniture-image">
            <img
              src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="f-image"
            />
          </div>
          <div className="furniture-detail">
            <div className="furniture-detail-container fml">
              <div className="furniture-heading">FURNITURE FOR EVERY ROOM!</div>
              <div className="furniture-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets .
              </div>
              <div className="furniture-link">
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
