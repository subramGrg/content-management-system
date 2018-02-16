import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import styles from "../styles/Form.scss";
import CSSModules from "react-css-modules";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    submitForm(e) {
        const {
            name,
            author,
        } = this.state;

        this.props.add({ name, author, });
        e.preventDefault();
    }

    handleBlur(e) {
        const {
            name,
            value,
        } = e.target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        return(
            <MuiThemeProvider>
                <div styleName="new-user-forms">
                    <form
                        method="POST"
                        styleName="new-user"
                        onSubmit={this.submitForm}
                    >
                        <h3>Details of book:</h3>
                        <fieldset>
                            <TextField name="name"
                                hintText="Book name"
                                onBlur={this.handleBlur}
                                fullWidth={true}
                            />
                        </fieldset>

                        <fieldset>
                            <TextField name="author"
                                hintText="Author name"
                                onBlur={this.handleBlur}
                                fullWidth={true}
                            />
                        </fieldset>

                        <RaisedButton
                            type="submit"
                            label="Submit"
                        />
                    </form>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default CSSModules(Form, styles);
