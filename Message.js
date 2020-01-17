import React,{Component} from 'react';
class Message extends Component{
    constructor()
    {
        super()
        
            this.state={
                message:'Welcome Visitor!',
                count:1
            }
        
    }
    changemessage()
    {
        this.setState({
            message:'Thanks for Subcribing!!!!!',
            count:this.count+1
        })
    }
    render()
    {
    return (<div> <p>{this.state.message}  {this.state.count}</p>
        <button onClick={()=> this.changemessage()}>Subcribe</button></div>)
    }
}
export default Message