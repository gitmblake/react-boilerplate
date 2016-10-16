import React from "react";

interface IRowProps {

}

interface IColProps {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number
}

export namespace Grid {
    export class Row extends React.Component<IRowProps, any> {
        render() {
            return (
                <div className="row">
                    {this.props.children}
                </div>
            );
        }
    }
    export class Col extends React.Component<IColProps, any> {
        getClassName = () => {
            let className = [];
            if(this.props.xs) {
                className.push("col-xs-" + this.props.xs);
            }
            if(this.props.sm) {
                className.push("col-sm-" + this.props.sm);
            }
            if(this.props.md) {
                className.push("col-md-" + this.props.md);
            }
            if(this.props.lg) {
                className.push("col-lg-" + this.props.lg);
            }            

            return className.join(" ");
        }

        render() {
            return (
                <div className={this.getClassName()}>
                    {this.props.children}
                </div>
            )
        }
    }
}
