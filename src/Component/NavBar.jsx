import React from 'react';

export default class NavBar extends React.Component{

    render(){
        return(
            <>
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="index.html">Facebook</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                <li><a href="home.html">Home</a></li>
                <li><a href="profile.html">Profile</a></li>
                <li><a href="#">Logout</a></li>
                </ul>
            </div>
            </nav>
            </>
        )
    }
}