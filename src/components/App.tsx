import React from "react";

export class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
};