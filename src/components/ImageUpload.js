import React, { Component, Fragment } from "react";

const ImageUpload = props => {
  var myInput;
  const popForm = () => {
    myInput.click();
  };
  return (
    <Fragment>
      <input
        type="file"
        onChange={e => {
          props.update(e);
        }}
        ref={input => (myInput = input)}
        style={{ display: "none" }}
      />
      <div
        className="p-5"
        onClick={popForm}
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
        <div className="upload-platform">
          {props.backgroundImage ? (
            <h4>
              Image Name <br /> {props.backgroundImage.name} <br />{" "}
              <small>
                Click here <br /> To replace image
              </small>{" "}
            </h4>
          ) : (
            <h4>
              Click here <br /> To upload image
            </h4>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ImageUpload;
