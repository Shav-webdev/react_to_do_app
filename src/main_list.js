import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 500,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
    listItem: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#ccc",
        marginTop: ".5rem",
    }
}));

function AppMain(props) {

    const classes = useStyles();

    const handleToggle = (e, i) => {
        const checkSpan = e.target.parentElement;
        const text = checkSpan.parentElement.closest("div").previousSibling.firstChild.firstChild;

        if(e.target.checked){
            text.style.textDecoration = "line-through";
        }else{
            text.style.textDecoration = "none";
        }
    };

    const deleteToDoItem = index => props.deleteToDoItemFromList(index);
    const listArr = props.listArr;

    return (
        <List dense className={classes.root}>
            {(listArr.length) ? (listArr.map((listItem, index ) => {
                const labelId = `checkbox-list-label-${index}`;
                return (
                    <ListItem
                        className={classes.listItem}
                        key={index}
                        button>
                        <ListItemText id={labelId} primary={`${index + 1}. ${listItem}`} />
                        <ListItemSecondaryAction>
                            <Checkbox
                                color="primary"
                                edge="end"
                                onChange={event => handleToggle(event, index)}
                            />
                            <Button
                                onClick={deleteToDoItem.bind(this, index)}
                            >
                                <DeleteIcon />
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })):(<h1 align="center">Add new to do item</h1>)}
        </List>
    );
}

export default AppMain;
