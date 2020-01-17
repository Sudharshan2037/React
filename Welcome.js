import React,{Component} from 'react';
class Welcome extends Component{
    
    render()
    {
        const{name}=this.props
    return (<div> HELLO {name}<br/><p></p></div>)
    }
}
export default Welcome