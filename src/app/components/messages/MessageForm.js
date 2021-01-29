import React, {useState} from "react";
import {useDispatch} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: theme.spacing(1),
        width: '100%',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    formControl: {
        margin: theme.spacing(1),
    },
    formControlFilledInput: {
      width: '70%',
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
}));

const userName = 'Adeline';

const MessageForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [type, setType] = useState('public');
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'post', payload: { userName, text, type}})
    }

    return (
        <AppBar position="fixed" color="default" className={classes.appBar}>
            <Toolbar>
                <form onSubmit={handleSubmit} className={classes.root} >
                    <FormControl variant="filled" className={classes.formControlFilledInput}>
                        <InputLabel htmlFor="component-filled">Message</InputLabel>
                        <FilledInput id="component-filled" value={text} onChange={e => setText(e.target.value)} multiline required />
                    </FormControl>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup row aria-label="type" name="type" value={type} onChange={e => setType(e.target.value)}>
                            <FormControlLabel value="public" control={<Radio />} label="Public" />
                            <FormControlLabel value="private" control={<Radio />} label="Private" />
                        </RadioGroup>
                    </FormControl>
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                        Envoyer
                    </Button>
                </form>
            </Toolbar>
        </AppBar>
    )
}

export default MessageForm;