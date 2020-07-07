import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './Component/NavBar';
import LeftColumn from './Component/LeftColumn';
import MiddleColumn from './Component/MiddleColumn';
import RightColumn from './Component/RightColumn';

import './css/style.css';
import './css/bootstrap.min.css';


ReactDOM.render(<NavBar></NavBar>, document.getElementById("navbar"));
ReactDOM.render(<LeftColumn></LeftColumn>, document.getElementById("leftcolumn"));
ReactDOM.render(<MiddleColumn></MiddleColumn>, document.getElementById("middlecolumn"));
ReactDOM.render(<RightColumn></RightColumn>, document.getElementById("rightcolumn"));