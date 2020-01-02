import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteBeverage, setCurrent } from "../../actions/beverageAction";

import M from "materialize-css/dist/js/materialize.min.js";

const BeverageItem = ({
  beverage: { _id, name, cost, description, imageLink },
  deleteBeverage,
  setCurrent
}) => {
  const onDelete = () => {
    deleteBeverage(_id);
    M.toast({ html: "Beverage deleted" });
  };
  return (
    <Fragment>
      <a className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src={imageLink} alt="Card image cap" />

                <a
                  onClick={onDelete}
                  className="btn-floating halfway-fab waves-effect waves-light red"
                >
                  <i className="material-icons">remove</i>
                </a>
              </div>

              <div className="card-content">
                <span className="card-title">{name}</span>
                <p>₹{cost}</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      
    </Fragment>
  );
};

BeverageItem.propTypes = {
  beverage: PropTypes.object.isRequired,
  deleteBeverage: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteBeverage, setCurrent })(BeverageItem);
