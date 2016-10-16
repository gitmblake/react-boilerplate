import React from "react";

interface ILoginPageProps {
    handleLogin(username: string, password: string)
}

interface ILoginPageState {
    username?: string,
    password?: string
}

export class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    login = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state.username, this.state.password);
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleUsernameChange} />
                    <input type="password" value={this.state.password} placeholder="Password" onChange={this.handlePasswordChange} />
                </div>
                <button type="submit" onClick={this.login}>Submit</button>
            </div>
        );
    }
};