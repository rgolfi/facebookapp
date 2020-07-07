import React from 'react';
import ReactDOM from 'react-dom';


class RightCol extends React.Component{
    render(){
        return(
                <>
                    {/* 3rd Column */}
                    <div className="col-md-3">
                    {/* friends */}
                    <div className="panel panel-default">
                        <div className="panel-body">
                        <h4>Friends</h4>
                        <ul>
                            <li>
                            <a href="#">Harvard University</a> 
                            <a className="text-danger" href="#">[unfriend]</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/* ./friends */}
                    </div>

                </>
        )

    }
}

export default RightCol;