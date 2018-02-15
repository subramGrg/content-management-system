import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

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
                <div className="new-user-form">
                    <form
                        method="POST"
                        id="new-user"
                        onSubmit={this.submitForm}
                    >
                        <fieldset>
                            <TextField name="name"
                                hintText="Book name"
                                onBlur={this.handleBlur}
                            />
                        </fieldset>

                        <fieldset>
                            <TextField name="author"
                                hintText="Author name"
                                onBlur={this.handleBlur}
                            />
                        </fieldset>

                        <FlatButton
                            type="submit"
                            label="Submit"
                        />
                    </form>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Form;
