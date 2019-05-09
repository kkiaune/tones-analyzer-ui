import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { styles } from './HomePageContainer.styles';
import ClientEmotionsContainer from '../ClientEmotions/ClientEmotionsContainer';
import ChatSummary from '../../components/ChatSummary/ChatSummary';
import ChatWindow from '../ChatWindow/ChatWindow';

import { availableChatsMock } from './mock';

export class HomePageContainer extends Component {
    constructor() {
        super();

        this.state = {
            isDrawerOpen: false,
            availableChats: availableChatsMock
        };

        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }

    handleDrawerOpen() {
        this.setState(prevstate => ({ isDrawerOpen: !prevstate.isDrawerOpen }));
    }

    getEmotions(text) {
        // api.getTones({text: text}).then(data => {
        //     console.log('data', data);
        //     this.setState({clientEmotions: data});
        // });
    }

    render() {
        const { theme, classes } = this.props;
        const { isDrawerOpen, availableChats } = this.state;

        console.log('isDrawerOpen', isDrawerOpen);

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
                            Mini variant drawer
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
                    <ChatWindow />
                    <ClientEmotionsContainer />
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

