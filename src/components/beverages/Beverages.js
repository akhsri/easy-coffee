import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import BeverageItem from "./BeverageItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getBeverages } from "../../actions/beverageAction";
import Footer from "../layout/Footer";

const Beverages = ({ beverage: { beverages, loading }, getBeverages }) => {
  useEffect(() => {
    getBeverages();
    // eslint-disable-next-line
  }, []);

  if (loading || beverages === null) {
    return <Preloader />;
  }
  console.log(beverages);
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {!loading && beverages.length === 0 ? (
            <p className="center">No beverages to show...</p>
          ) : (
            beverages.map(beverage => (
              <BeverageItem beverage={beverage} key={beverage.id} />
            ))
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </Fragment>
  );
};
Beverages.propTypes = {
  beverage: PropTypes.object.isRequired,
  getBeverages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  beverage: state.beverage
});

export default connect(mapStateToProps, { getBeverages })(Beverages);
