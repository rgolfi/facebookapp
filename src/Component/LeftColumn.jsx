import React from 'react';



class LeftColumn extends React.Component {
    render() {
        return (
            <>
                {/* 1st Column */}
                <div className="col-md-3">
                    {/* profile brief */}
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <img src="logo.jpg" width="60%" style={{ borderRadius: '50%' }} />
                            <h4>PeopleCert</h4>
                            <p>@peoplecert.org</p>
                        </div>
                    </div>
                    {/* ./profile brief */}
                    {/* edit profile */}
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h4>Edit profile</h4>
                            <form method="post" action="">
                                <div className="form-group">
                                    <input className="form-control" type="text" name="status" placeholder="Status" defaultValue />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="location" placeholder="Location" defaultValue />
                                </div>
                                <div className="form-group">
                                    <input className="btn btn-primary" type="submit" name="update_profile" defaultValue="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* ./edit profile */}
                </div>

            </>
        )
    }
}

export default LeftColumn