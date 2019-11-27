import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./App.css";

class AppHeader extends React.Component {
    onInputChange = (e) => {
        this.props.onInputValueChange(e.target.value);

    };

    onBtnClick = () => this.props.addInputValueOnClick();

    render() {
        let toDoItem = this.props.initialValue;
        const btnStyle = {
            marginLeft: "1rem",
        };
        return (

            <div style={{width:"100%"}}>
                <div className="App">
                    <TextField
                        id="new_to_do"
                        label="New to do"
                        value={toDoItem}
                        style={{width: "90%"}}
                        onChange={this.onInputChange}
                    />
                    <Button
                        style={btnStyle}
                        size="large"
                        variant="outlined"
                        color="primary"
                        onClick={this.onBtnClick}
                    >
                        Add
                    </Button>
                </div>
            </div>
        );
    }
}

export default AppHeader;
