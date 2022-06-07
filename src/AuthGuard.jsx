import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router';
const AuthGuard = ({component: Component, ...rest}) => {
    // console.log(activeUser);
    const [activeUser, setActiveUser] = useState(null)
    useEffect(() => {
      let user = JSON.parse(localStorage.getItem('activeUser'));
      setActiveUser(user)
    }, [Component])
    
    return (
        <Route
        {...rest}
        render={(props) => activeUser
          ? <Component {...props} />
          : <Redirect to={{pathname: '/auth', state: {from: props.location}}} />}
      />
    )
}


// function mapStateToProps(state) {
//     return { activeUser: state.activeUser.data };
// }
export default AuthGuard
