import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        //console.log(props);
    }

    state = {
        id: this.props.id,
        date: this.props.date,
        content: this.props.content,
        likes: this.props.likes,
        shares: this.props.shares,
        tags: this.props.tags,
        img: this.props.img,
    }



    
    changeCounter_like = (event) => {
        this.setState({likes: this.state.likes + 1});
    }  

       
    changeCounter_share = (event) => {
        this.setState({shares: this.state.shares + 1});
    }
 

    share = () => {
        this.setState({
            share: this.props.shares + 1
        });
    };

    handleChange = ( event )=>{
        console.log("handleChange()", event.target.value );
        this.setState({ max: event.target.value });
        //console.log(event.target.value)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount() ");
    }

    
    
    render() {
        return (
         <>
                {/* post */}
                <div className="panel panel-default">
                    <div className="panel-body">
                        <p>{this.state.date}</p>
                        <img src = {this.props.img} width="50%"/>
                    </div>
                    <div className="panel-body">
                        <p>{this.props.content}</p>
                    </div>
                    <div className="panel-footer">
                         <button onClick= {this.changeCounter_like} className ="btn btn-default" >Likes: {this.state.likes}</button>
                        <button onClick= {this.changeCounter_share} className = "btn btn-default"> Shares: {this.state.shares}</button>
                     
                    </div>
                </div>
                {/* ./post */}
            </>
        );
    }
}