import React from 'react'
import { connect } from 'react-redux'


class About extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    gotohome = ()=>{

        const { history } = this.props;
        history.push("/")

    }

    render(){
        return(
            <>
                <h1>About Page</h1>
                <button onClick={this.gotohome}>Go To Home</button>
            </>
        )
    }
    
}


const mapStateToProps = (state) => ({
    hasUser:state.hasUser,
    currentUser:state.currentUser
})
  
const mapDispatchToProps = (dispatch) => ({
})
  
  
export default connect(mapStateToProps,mapDispatchToProps)(About);