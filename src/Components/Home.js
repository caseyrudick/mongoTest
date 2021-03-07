// react
import React, { useState, useEffect } from 'react';
// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
// other libs/imports
import { connect } from 'react-redux';
import _ from 'lodash'
// actionCreators
import ConnectToMongo from "../ActionCreators/ConnectToMongo"


const Home = ({ConnectToMongo, getConnectionToMongoDBReducer}) => {

  // const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedCollection, setSelectedCollection] = useState("");

  useEffect(() => {
    ConnectToMongo()
  },[])


  const renderCollectionNames = () => {
    if (getConnectionToMongoDBReducer.status === "received") {
      // let listOfCollections = getConnectionToMongoDBReducer.response.collectionNames
      return (
        "Getting Closer"
      //   <Dropdown.Menu>
      //     {listOfCollections.forEach(collection => {
      //       return (
      //         <Dropdown.Item
      //           href=""
      //           key={`${collection}`}    
      //           // onClick={() => {
      //           //   setSelectedCollection(`${collection}`)
      //           // }}
      //         >
      //           {collection}
      //         </Dropdown.Item>
      //       )
      //     })}
      //   </Dropdown.Menu>
      )
    }
    else {
      return "Data Loading"
    }
  }

  const handleFetchCollection = () => {
    // insert collection to pull 
  }

  return (
    <Container>
      <Row>
        {renderCollectionNames()}
        {/* {connectToMongo()} */}

      </Row>
    </Container>
  )
}

const mapStateToProps = ({ getConnectionToMongoDBReducer }) => {
  return {
    getConnectionToMongoDBReducer
  } 
}
  
export default connect(mapStateToProps, {ConnectToMongo})(Home);
