import React from "react";
import AppBar from "material-ui/AppBar";
import Drawer from 'material-ui/Drawer';

export class Header extends React.Component<any, any> {
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


    render() {
        return (
            <AppBar onLeftIconButtonTouchTap={this.handleToggle}>
                <Drawer open={this.state.open}>
                    <AppBar title="Boilerplate" showMenuIconButton={false} />
                    
                </Drawer>
            </AppBar>
        )
    }
}