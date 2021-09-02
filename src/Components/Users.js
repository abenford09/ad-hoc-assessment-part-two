import React from 'react'
import UsersItems from './UsersItems'

class Users extends React.Component {
    render() {

        const { users, addressStatesToggle, showAddress  } = this.props

        const toggleClick = () => {
            addressStatesToggle()
        }

        return (
            <div className="container">
                <button className='btn' onClick={toggleClick}>Address Toggle</button>
                {users.map(user => (
                    <UsersItems user={user}
                    key={user.id}
                    addressStatesToggle={addressStatesToggle}
                    showAddress={showAddress}
                    />
                ))}
            </div>
        )
    }
}

export default Users
