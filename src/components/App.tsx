import React from "react";
import { Header } from "./common/Header";
import { Grid } from "./common/Grid";
import { connect } from "react-redux";

interface IAppProps {
    username: string,
    isAuthenticated: boolean
}

class App extends React.Component<IAppProps, any> {
    render() {
        return (
            <Grid.Row>
                <Grid.Col xs={12}>
                    <Header {...this.props} />
                    {this.props.children}
                </Grid.Col>
            </Grid.Row>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(App);

