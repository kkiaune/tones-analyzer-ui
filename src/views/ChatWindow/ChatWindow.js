import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import { styles } from './ChatWindow.styles';

const ChatWindow = ({ handleChange, handleClick, classes, messages, isLoading }) => {
    console.log('messages', messages);

    const getSmile = tone => {
        let smileToReturn = null;

        switch (tone) {
            case "Anger":
                smileToReturn = 'poo';
                break;
            case "Disgust":
                smileToReturn = 'poo';
                break;
            case "Fear":
                smileToReturn = 'tired';
                break;
            case "Joy":
                smileToReturn = 'smile';
                break;
            case "Sadness":
                smileToReturn = 'sad-tear';
                break;
            default:
                break;
        };

        return smileToReturn;
    }

    const getStyle = message => {
        let styleToReturn = null;

        switch (message.tones && message.tones.length > 0 && message.tones[0].tone) {
            case "Anger":
                styleToReturn = 'clientAnger';
                break;
            case "Disgust":
                styleToReturn = 'clientDisgust';
                break;
            case "Fear":
                styleToReturn = 'clientFear';
                break;
            case "Joy":
                styleToReturn = 'clientJoy';
                break;
            case "Sadness":
                styleToReturn = 'clientSadness';
                break;
            default:
                break;
        };

        return styleToReturn;
    }

    return (
        <Paper className={classes.paper} elevation={0}>
            {messages && messages.length > 0 && messages.map(message => (
                <React.Fragment>
                    <Grid container spacing={24}>
                        <Grid item xs={8}>
                            <Card key={`${message.text}_${message.tones.length}`} className={(classes.cardClient, classes[getStyle(message)])}>
                                <CardHeader
                                    avatar={
                                        <Avatar className={classes.avatarClient}>
                                            <FontAwesomeIcon icon="user" />
                                        </Avatar>
                                    }
                                    action={
                                        message.tones && message.tones.map(tone => (
                                        <Typography key={`${tone.tone}_${tone.score}`} color="textSecondary">
                                            {tone.LT_text} {tone.score}
                                            <FontAwesomeIcon className={classes.marginLeftCl} icon={getSmile(tone.tone)} />
                                        </Typography>)
                                        )
                                    }
                                    title="Client"
                                    subheader="2019-05-09 17:41"
                                />
                                <CardContent>
                                    <Typography component="p">
                                        {message.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4} />
                    </Grid>
                    {message.response && (
                        <Grid container spacing={24}>
                            <Grid item xs={4}></Grid>
                            <Grid item xs={8}>
                                <Card className={classes.cardBot}>
                                    <CardHeader dir="rtl"
                                        avatar={
                                            <Avatar className={classes.avatarBot}>
                                                <FontAwesomeIcon icon="robot" />
                                            </Avatar>
                                        }

                                        title="Chatbot"
                                        subheader="2019-05-09 17:41"
                                    />
                                    <CardContent>
                                        <Typography component="p">
                                            {message.response}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    )}
                </React.Fragment>
            ))}
            <Paper className={classes.root} elevation={1}>
                <InputBase className={classes.input} placeholder="Type the message ..." onChange={handleChange} />
                <Divider className={classes.divider} />
                {!isLoading ? (
                    <IconButton color="primary" className={classes.iconButton} aria-label="Directions" onClick={handleClick}>
                        <FontAwesomeIcon icon="arrow-alt-circle-right" />
                    </IconButton>) : (
                        <CircularProgress className={classes.progress} />
                    )}
            </Paper>
        </Paper>
    );
};
ChatWindow.propTypes = {
    classes: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default withStyles(styles, { withTheme: true })(ChatWindow)
