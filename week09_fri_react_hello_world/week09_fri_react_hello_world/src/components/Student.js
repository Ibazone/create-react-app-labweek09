import React from 'react'

export default function Student(props) {
    var myStyle = { fontSize:'20px', color: 'blue' }
  return (
    <div>
        <p style={ {backgroundColor: 'red', fontSize:'50px'} }>Welcome</p>
        <h3 style={myStyle}>Student ID: {props.stud.id}</h3>
        <h3>Student Name: {props.stud.name}</h3>
        <h3>Student Age: {props.stud.age}</h3>
        <h3>Student Result: {props.stud.result}</h3>
    </div>
  )
}
