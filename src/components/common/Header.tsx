import React from "react";
import AppBar from "material-ui/AppBar";
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import { push } from "react-router-redux";

interface IHeaderProps {
    username: string,
    isAuthenticated: boolean,
    dispatch?
}

export class Header extends React.Component<IHeaderProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleRedirect = (path) => {
        this.props.dispatch(push(path));
        this.handleToggle();
    }

    render() {
        return (
            <AppBar 
                onLeftIconButtonTouchTap={this.handleToggle}
                iconElementRight={this.props.isAuthenticated ? <FlatButton label="Logout" /> : null}
                >
                <Drawer open={this.state.open}>
                    <AppBar 
                        title="Boilerplate"
                        showMenuIconButton={false} 
                        onRightIconButtonTouchTap={this.handleToggle} 
                        iconElementRight={<IconButton><NavigationClose /></IconButton>} 
                        onTitleTouchTap={() => this.handleRedirect("/")}
                        titleStyle={{cursor:'pointer'}}
                        />
                    <MenuItem 
                        onTouchTap={() => this.handleRedirect("about")} 
                        primaryText="About" 
                        />
                </Drawer>
            </AppBar>
        )
    }
}