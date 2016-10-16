import React from "react";
import {Link} from 'react-router';

export const HomePage = () => {
    return (
        <div>Home page
            <Link to="/about">Protected Content</Link>
        </div>
    );
};