import React from "react";
import { connect } from "react-redux";
import { LoginPage } from "../components/login/LoginPage";
import { bindActionCreators } from "redux";
import { login } from "../actions/authActions";

interface IActions {
    login(username: string, password: string, redirect: string)
}

interface ILoginProps {
    actions: IActions,
    location: any
}

class Login extends React.Component<ILoginProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    login = (username: string, password: string) => {
        const redirect = this.props.location.query.next;
        this.props.actions.login(username, password, redirect);
    }

    render() {
        return (
            <LoginPage handleLogin={this.login}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators( { login }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);