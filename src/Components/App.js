import React from 'react'
import  { connect } from 'react-redux'
// react-bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Dashboard from "./Dashboard"

var mongoUtil = require( 'mongoUtil' );

const App = () => {
  return (
    <React.Fragment>
      <Dashboard/>
    </React.Fragment>
  )
}

export default App;
