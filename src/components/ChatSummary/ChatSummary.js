import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const ChatSummary = ({ chat }) => (
    <ListItem button key={chat.id}>
    <ListItemIcon><FontAwesomeIcon icon={chat.icon} /></ListItemIcon>
    <ListItemText primary={chat.summary} />
</ListItem>
);


ChatSummary.propTypes = {
    chat: PropTypes.object.isRequired
}

export default ChatSummary
