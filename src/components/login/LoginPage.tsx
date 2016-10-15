import React from "react";

export class LoginPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        }
    }

    login = (e) => {
        e.preventDefault;


    }

    render() {
        return (
            <form>
                <div>
                    <input type="text" value={this.state.user} placeholder="Username" />
                    <input type="password" value={this.state.password} placeholder="Password" />
                </div>
                <button type="submit" onClick={this.login}>Submit</button>
            </form>
        );
    }
};