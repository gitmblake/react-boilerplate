import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

export const requireAuthentication = (Component) => {
    class Authenticated extends React.Component<any, any> {

        componentWillMount = () => {
            this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps = (nextProps) => {
            this.checkAuth(nextProps.isAuthenticated);
        }

        checkAuth = (isAuthenticated) => {
            if(!isAuthenticated) {
                const redirectAfterLogin = this.props.location.pathname;
                this.props
                    .dispatch(push(`/login?next=${redirectAfterLogin}`));
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }       
    }

    const mapStateToProps = (state, ownProps) => {
        return {
            token: state.auth.token,
            userName: state.auth.username,
            isAuthenticated: state.auth.isAuthenticated
        };
    };

    return connect(mapStateToProps)(Authenticated);
}

