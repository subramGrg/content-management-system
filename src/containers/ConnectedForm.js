import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBook } from "../actions";
import Form from "../components/Form.jsx";

const mapDispatchToProps = (dispatch, props) => (
    bindActionCreators( { add: addBook, }, dispatch)
);

const connectedForm = connect(null, mapDispatchToProps)(Form);

export default connectedForm;
