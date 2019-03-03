import React, { Component } from "react";

const InputForms = props => {
  return (
    <div className="p-5">
      <div className="form-group">
        <label>Product Name</label>
        <input
          className="form-control"
          onChange={e => props.update("name", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Product Description</label>
        <input
          className="form-control"
          onChange={e => props.update("description", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Product Price</label>
        <input
          className="form-control"
          onChange={e => props.update("price", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Product Category</label>
        <select
          className="form-control"
          onChange={e => props.update("category", e.target.value)}
        >
          <option value="fashion">fashion</option>
          <option value="laptops">laptops</option>
          <option value="vocations">vocations</option>
        </select>
      </div>
      <div className="form-group">
        <label>Product Color</label>
        <input
          className="form-control"
          onChange={e => props.update("color", e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputForms;
