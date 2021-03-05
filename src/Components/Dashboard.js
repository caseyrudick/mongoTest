import React from 'react'
import { connect } from 'react-redux'
// react-boostrap
import Tabs from 'react-bootstrap/Tabs'
import Tab from "react-bootstrap/Tab"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
// Styling 
import 'bootstrap/dist/css/bootstrap.min.css';
// ActionCreators
import ConnectToMongo from "../ActionCreators/ConnectToMongo"
// Components
import Home from "./Home"

const Dashboard = () => {
  return (
    <React.Fragment>
      <Jumbotron>
        <Container>
          <h1>
              Midland Drilling Capital Forecast Model
          </h1>
        </Container>
      </Jumbotron>
      <Tabs>
          <Tab eventKey="Home" title="Home">
              <Home/>
          </Tab>
      </Tabs>
    </React.Fragment>
  )
}

const mapStateToProps = ({ getConnectionToMongoDBReducer }) => {
  return {
    getConnectionToMongoDBReducer
  } 
}

export default connect(mapStateToProps, { })(Dashboard);