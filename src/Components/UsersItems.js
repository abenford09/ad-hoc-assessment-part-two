import React from 'react'
import Address from './Address'

class UsersItems extends React.Component {
    render() {

        const { user, showAddress, addressStatesToggle } = this.props

        return (
            <div className="Listitem">
                <h1>Name: {user.name}</h1>
                <p>UserName:{user.username}</p>
                <p>Email:{user.email}</p>
                {showAddress && <Address user={user}/>}
            </div>
        )
    }
}

export default UsersItems
