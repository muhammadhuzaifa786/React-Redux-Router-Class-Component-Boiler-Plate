import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {set_user} from '../Store/action'


class Home extends React.Component{
    constructor(){
        super()
        this.state={
            name:"Ali",
            product:"KeyBoard"
        }
    }

    componentDidMount(){
        console.log("This function runs only on first Render")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("This function runs initialy and after update of state and props")
        console.log(props.currentUsername,state.name)
        if(props.currentUsername === null && props.currentUsername !== state.name){
            return {name:state.name}
        }else{
            return{
                name:props.currentUsername
            }
        }
        
      }

    componentWillUnmount(){
        console.log("This function runs at component unmount OR after Update")
        
    }

    

    signin = ()=>{
        this.props.set_user("Huzaifa","huzaifa@gmail.com","www.google.com","123")
        this.setState({
            name:this.state.name
        })
        

    }
    


    render(){
        
        return(
            <>
                <h1>Home Page</h1>
                <h1>Welcome {this.state.name}</h1>
                <h1>Default User Is  {this.state.name}</h1>
                <h1>New User Is  {this.props.currentUsername}</h1>
                <button onClick={this.signin}>Set User</button>
                <br/>
                <Link to="/about">Go To About</Link>
                <Link to={{pathname:'/products/'+this.state.product}}>Go To Products</Link>
    
                
            </>
        )

    }

    
}


const mapStateToProps = (state) => ({
    hasUser:state.hasUser,
    currentUsername:state.currentUsername
})
  
const mapDispatchToProps = (dispatch) => ({
    set_user:(name,email,photoURL,uid)=> dispatch(set_user(name,email,photoURL,uid))
})
  
  
export default connect(mapStateToProps,mapDispatchToProps)(Home);