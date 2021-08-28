import React from 'react'
import {Card} from 'react-bootstrap'

const User = ({list}) => {
    return (
        <div>
            
      <Card>
  
  <Card.Body>
    <Card.Title>name: {list.name}</Card.Title>
    <Card.Text>username : {list.username}</Card.Text>
    <Card.Text>email : {list.email}</Card.Text>
    <Card.Text>address : {list.address}</Card.Text>
    <Card.Text>street : {list.street}</Card.Text>
    <Card.Text>suite : {list.suite}</Card.Text>
    <Card.Text>city : {list.city}</Card.Text>
    
  </Card.Body>
</Card>
    </div>
  )
}



export default User
