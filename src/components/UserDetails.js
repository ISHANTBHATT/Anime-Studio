import React from 'react'

function UserDetails({address,city}) {
    return (
        <div>
            <p>{address}</p>
            <p>{city}</p> 
        </div>
    )
}

export default UserDetails
