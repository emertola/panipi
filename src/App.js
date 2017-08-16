import React, { Component } from 'react';

import {Row, Col} from 'react-bootstrap';

import './App.css';

import AppForm from './components/AppForm';
import AppList from './components/AppList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lists: [
          {
              id: 1,
              content: "Seek first the kingdom of God and His righteousness, and all these things shall be added to you as well.",
              reference: "Matthew 6:33",
              favorite: true
          },
          {
              id: 2,
              content: "Whatever you fail to manage, you will lose.",
              reference: "Bishop Oriel Ballano",
              favorite: false
          }
      ]
    }

    this.onFavorite = this.onFavorite.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  addToList(newListObj) {
    const {lists} = this.state;
    this.setState((prevState) => ({
      lists: prevState.lists.concat(newListObj)
    }))
  }

  onFavorite(listID) {
      const {lists} = this.state;
      
      let indexToUpdate = lists.findIndex((list) => {
          return list.id === listID
      });

      let newFavorite = !lists[indexToUpdate].favorite ? true : false

      let listUpdateByID = {
          ...lists[indexToUpdate],
          favorite: newFavorite
      }

      let newListByID = [
          ...lists.slice(0, indexToUpdate),
          listUpdateByID,
          ...lists.slice(indexToUpdate + 1)
      ]
      
      this.setState((prevState) => ({ lists: newListByID }))
  }
  
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={3}>
            <AppForm
              addToList={this.addToList} />
          </Col>
          <Col xs={12} md={5}>
            <AppList
              lists={this.state.lists}
              onFavorite={this.onFavorite} />
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default App;
