import React from "react";
import { connect } from "react-redux";
import { LoginPage } from "../components/login/LoginPage";
import { bindActionCreators } from "redux";
import { login } from "../actions/loginActions";

interface ILoginProps {
    actions()
}

class Login extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    login = (username: string, password: string) => {
        
    }

    render() {
        return (
            <LoginPage />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(login, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);