import React from "react";
import {Link} from 'react-router';

export const HomePage = () => {
    return (
        <div>Home page<br />
            <Link to="/about">Protected Content</Link>
            <div className="row">
                <div className="col-sm-8">a</div>
                <div className="col-sm-4">b</div>
            </div>
        </div>
    );
};