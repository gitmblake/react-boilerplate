import React from "react";
import {Link} from 'react-router';

export const HomePage = () => {
    return (
        <div>Home page<br />
            <Link to="/about">Protected Content</Link>
        </div>
    );
};