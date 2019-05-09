import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { styles } from './HomePageContainer.styles';
import ChatSummary from '../../components/ChatSummary/ChatSummary';
import ChatWindow from '../ChatWindow/ChatWindow';

import { availableChatsMock } from './mock';

import Grid from '@material-ui/core/Grid';

export class HomePageContainer extends Component {
    constructor() {
        super();

        this.state = {
            isDrawerOpen: false,
            availableChats: availableChatsMock,
            text: '',
            allTexts: [],
            messages: [],
            isLoading: false,
            inputValue: ''
        };

        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getEmotions = this.getEmotions.bind(this);
    }

    handleDrawerOpen() {
        this.setState(prevstate => ({ isDrawerOpen: !prevstate.isDrawerOpen }));
    }

    getEmotions() {
        const { inputValue, messages } = this.state;

        this.setState({ isLoading: true });

        axios({
            method: 'POST',
            url: 'http://192.168.43.211:5000/function/0',
            data: {
                text: inputValue
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            messages.push({ tones: result.data, text: inputValue, response: "Ačiū už jūsų žinutę.", date: new Date().toLocaleString('lt-LT') });
            console.log('messages', messages);
            this.setState({ messages: messages, isLoading: false, inputValue: '' });
        })
            .catch((err) => {
                this.setState({ isLoading: false });
                console.log('err', err);
            });;
    }

    handleChange(obj) {
        this.setState({ inputValue: obj.target.value });
    }

    render() {
        const { theme, classes } = this.props;
        const { isDrawerOpen, availableChats, messages, isLoading, inputValue } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: isDrawerOpen,
                    })}
                >
                    <Toolbar disableGutters={!isDrawerOpen}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: isDrawerOpen,
                            })}
                        >
                            <FontAwesomeIcon icon="bars" />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Tone Analyzer (Telia - Lietuvos draudimas)
            </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: isDrawerOpen,
                        [classes.drawerClose]: !isDrawerOpen,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: isDrawerOpen,
                            [classes.drawerClose]: !isDrawerOpen,
                        }),
                    }}
                    open={isDrawerOpen}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerOpen}>
                            {theme.direction === 'rtl' ? <FontAwesomeIcon icon="arrow-right" /> : <FontAwesomeIcon icon="arrow-left" />}
                        </IconButton>
                    </div>
                    {availableChats && availableChats.length > 0 && availableChats.map(chat => <ChatSummary chat={chat} />)}
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <ChatWindow handleChange={this.handleChange} handleClick={this.getEmotions}
                                messages={messages} isLoading={isLoading} inputValue={inputValue} />
                        </Grid>
                    </Grid>
                </main>
            </div>
        )
    }
}

HomePageContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(HomePageContainer);

