import React from "react";
import { Header } from "./common/Header";

export class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
};