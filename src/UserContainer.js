import React, {Component} from "react";
import addUser from './reduxUserActions/UserActions';
import {connect} from 'react-redux';

function UserContainer(props){
    return(
        <div>
            <h2>Number of Users - {props.numOfUsers}</h2>
            <button onClick={props.addUser}>Add User</button>
        </div>
    );
}

const mapStateToProps =  state => {
    return{
        numOfUsers: state.numOfUsers
    }
}

//This will dispatch an action like ADD_USER and map it react component props
const mapDispatchToProps = dispatch => {
    return{
        addUser: ()=>dispatch(addUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)