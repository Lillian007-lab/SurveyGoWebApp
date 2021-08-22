import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../css/styles.css";

const Payments = (props) => {
  return (
    <StripeCheckout
      name="SurveyGo"
      description="$5 for 5 email credits"
      amount={500}
      token={(token) => props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    >
      <button className="btn ButtonAddCreditsNext button HeaderTextColor">
        Add Credits
      </button>
    </StripeCheckout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleToken: (token) => dispatch(actions.handleToken(token)),
  };
};

export default connect(null, mapDispatchToProps)(Payments);
