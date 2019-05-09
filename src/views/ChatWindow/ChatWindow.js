import React, { Component } from 'react';
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

import { styles } from './ChatWindow.styles';

class ChatWindow extends Component {
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                {/* <Grid container spacing={24}>
                    <Grid item xs={9}> */}
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container spacing={24}>
                            <Grid item xs={8}>
                                <Card className={(classes.cardClient, classes.clientAnger)}>
                                <CardHeader
                                avatar={
                                    <Avatar className={classes.avatarClient}>
                                    <FontAwesomeIcon icon="user" />
                                    </Avatar>
                                }
                                title="Client"
                                subheader="2019-05-09 17:41"
                                />
                                <CardContent>
                                <Typography component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={8}>
                                <Card className={(classes.cardClient, classes.clientDisgust)}>
                                <CardHeader
                                avatar={
                                    <Avatar className={classes.avatarClient}>
                                    <FontAwesomeIcon icon="user" />
                                    </Avatar>
                                }
                                title="Client"
                                subheader="2019-05-09 17:41"
                                />
                                <CardContent>
                                <Typography component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={8}>
                                <Card className={(classes.cardClient, classes.clientFear)}>
                                <CardHeader
                                avatar={
                                    <Avatar className={classes.avatarClient}>
                                    <FontAwesomeIcon icon="user" />
                                    </Avatar>
                                }
                                title="Client"
                                subheader="2019-05-09 17:41"
                                />
                                <CardContent>
                                <Typography component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={8}>
                                <Card className={(classes.cardClient, classes.clientJoy)}>
                                <CardHeader
                                avatar={
                                    <Avatar className={classes.avatarClient}>
                                    <FontAwesomeIcon icon="user" />
                                    </Avatar>
                                } action={
                                    
                     
                                            <Typography color="textSecondary">
                                               Anger:  1.6  
                                                <FontAwesomeIcon className={classes.marginLeftCl}icon="poo" />
                                                </Typography>
                                      
                            
                                  }
                                title="Client"
                                subheader="2019-05-09 17:41"
                                />
                                <CardContent>
                                <Typography component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={8}>
                                <Card className={(classes.cardClient, classes.clientSadness)}>
                                <CardHeader
                                avatar={
                                    <Avatar className={classes.avatarClient}>
                                    <FontAwesomeIcon icon="user" />
                                    </Avatar>
                                }
                                title="Client"
                                subheader="2019-05-09 17:41"
                                />
                                <CardContent>
                                <Typography component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}></Grid>
                        </Grid>
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Paper className={classes.root} elevation={1}>
                        <InputBase className={classes.input} placeholder="Type the message ..." />
                        <Divider className={classes.divider} />
                        <IconButton color="primary" className={classes.iconButton} aria-label="Directions"><FontAwesomeIcon icon="arrow-alt-circle-right" />
                        </IconButton>
                        </Paper>
                    </Paper>
                    {/* </Grid> */}




                    {/* <Grid item xs={3}>
                    <Paper className={classes.paper}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paper>
                    </Grid> */}
                {/* // </Grid> */}

            </React.Fragment>
        )
    }
}

ChatWindow.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(ChatWindow)
