import React from 'react';
import AppHeader from "./header";
import AppMain from "./main_list";

const styles = {
   childContainer: {
       maxWidth: 500,
       width: "100%",
   },
    wrapper: {
       display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 500,
        width: "100%",
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentToDo: "",
            list: [

            ]
        }
    }

    componentDidMount() {
        let list = localStorage.getItem("listOfItems")
        this.setState({
            list: JSON.parse(list),
        })

    }

    getInputValue = (e) => {
        this.setState({
            currentToDo: e
        });

    };

    deleteItemField = (index) => {
        const list = this.state.list;
        list.splice(index, 1);
        localStorage.setItem("listOfItems", JSON.stringify(list) || [])
        this.setState({
            list: list,
        })
    }

    addInputValue = () => {
        const list = this.state.list;
        list.push(this.state.currentToDo);
        localStorage.setItem("listOfItems", JSON.stringify(list) || []);
        this.setState({
            list:list,
            currentToDo: ""
        });

    };

    render() {
        return (
            <React.Fragment>
                <div style={styles.wrapper}>
                    <AppHeader
                        onInputValueChange = {this.getInputValue}
                        addInputValueOnClick = {this.addInputValue}
                        initialValue={this.state.currentToDo}
                    />
                </div>
                <div style={styles.childContainer}>
                    <AppMain
                        deleteToDoItemFromList = {this.deleteItemField}
                        listArr={this.state.list}/>
                </div>
            </React.Fragment>
        );
    }


}

export default App;
