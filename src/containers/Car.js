import { connect } from "react-redux";
import Car from "../components/Car";

const myStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(myStateToProps)(Car);
