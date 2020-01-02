import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addBeverage } from "../../actions/beverageAction";
import M from "materialize-css/dist/js/materialize.min.js";

const AddBeverageModal = ({ addBeverage }) => {
  const [name, setBeverageName] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setimageLink] = useState("");

  const handleChange = event => {
    let newState = {};
    newState[event.target.id] = event.target.value;
    switch (event.target.id) {
      case "name":
        setBeverageName(event.target.value);
        break;
      case "cost":
        setCost(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "imageLink":
        setimageLink(event.target.value);
        break;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    if (name === "" || cost === "" || description === "" || imageLink === "") {
      M.toast({ html: "Please enter all fields" });
    } else {
      const newBeverage = {
        name,
        cost,
        description,
        imageLink
      };
      addBeverage(newBeverage);
      M.toast({ html: `${name} added!` });

      // Clear fields
      setBeverageName("");
      setCost("");
      setDescription("");
      setimageLink("");
    }
  };

  return (
    <div id="add-beverage-modal" className="container">
      <div className="row">
        <form className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="name"
                type="text"
                className="validate"
                value={name}
                onChange={handleChange}
              />
              <label htmlFor="name">Beverage Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="cost"
                type="number"
                className="validate"
                value={cost}
                onChange={handleChange}
              />
              <label htmlFor="cost">Cost</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="description"
                className="materialize-textarea"
                value={description}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="description">Description</label>
            </div>
          </div>
          <div className="file-field input-field">
            <textarea
              id="imageLink"
              className="materialize-textarea"
              value={imageLink}
              onChange={handleChange}
            />
            <label htmlFor="imageLink">Image Link</label>
          </div>
          <div>
            <button
              type="submit"
              className="modal-close waves-effect waves-blue waves-light btn"
            >
              Add Beverage
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
AddBeverageModal.propTypes = {
  addBeverage: PropTypes.func.isRequired
};

// const modalStyle = {
//   width: "75%",
//   height: "75%"
// };

export default connect(
  null,
  { addBeverage }
)(AddBeverageModal);
