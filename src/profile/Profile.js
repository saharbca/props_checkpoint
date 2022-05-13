import React from 'react'

const Profile = ({fullName,bio,profession,children,handleName}) => {
  return (
    
    <div>
      {handleName()}
      <h1>{fullName}</h1>
    <h1>{bio}</h1>
    <h1 style={{color: 'red'}}>{profession}</h1>
   {children}
  </div>
  )
}

export default Profile