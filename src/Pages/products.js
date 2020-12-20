import React from 'react'
import { connect } from 'react-redux'


class Products extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <>
                <h1>Products Page</h1>
    
                <h1>Product Name is {this.props.match.params.product}</h1>
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
  
  
export default connect(mapStateToProps,mapDispatchToProps)(Products);