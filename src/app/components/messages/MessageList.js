import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    inline: {
        display: 'inline',
    },
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
}));

const MessageList = () => {
    // const dispatch = useDispatch; Permet d'envoyer une action au reducer
    const messages = useSelector(state => state.messages);
    const classes = useStyles();

    // Call à l'api pour fetch tout les messages

    // useEffect(() => {
    //      fetchMessages();
    // }, [])

    // const fetchMessages = async () => {
    //      try {
    //          const response = await fetch("https://api.example.com/messages");
    //          const data = await response.json();
    //          dispatch({type:'initial', payload: data});
    //      } catch (e) {
    //          dispatch({type: 'error', payload: e});
    //      }
    // }

    return (
        <>
            <Typography className={classes.text} variant="h5" gutterBottom>
                Messages
            </Typography>
            <List className={classes.root}>
                {messages.map(message => {
                    return (
                        <>
                            <ListItem alignItems="flex-start" key={message.id}>
                                <ListItemAvatar>
                                    <Avatar alt={message.userName} src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {message.text}
                                        </Typography>
                                    </React.Fragment>}
                                    secondary={message.type}
                                />
                            </ListItem>
                            <Divider variant="fullWidth" component="li" />
                        </>
                    )
                })}
            </List>
        </>
    )

}

MessageList.defaultProps = {
    messages: [],
}

MessageList.propTypes = {
    messages: PropTypes.array,
};

export default MessageList;