import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { styles } from './ChatWindow.styles';

class ChatWindow extends Component {
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar} />
                        }
                        action={
                            <IconButton>
                                <FontAwesomeIcon icon="info-circle" />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/paella.jpg"
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                </Card>
                <Paper className={classes.root} elevation={1}>
                    <InputBase className={classes.input} placeholder="Type the message ..." />
                    <IconButton color="primary" className={classes.iconButton} aria-label="Directions"><FontAwesomeIcon icon="arrow-alt-circle-right" />
                    </IconButton>
                </Paper>
            </React.Fragment>
        )
    }
}

ChatWindow.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(ChatWindow)
