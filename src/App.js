<<<<<<< HEAD
import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))

    ContactsAPI.remove(contact)
  }
  createContact = (contact) => {
    ContactsAPI.create(contact)
      .then((contact) => {
        this.setState((currentState) => ({
          contacts: currentState.contacts.concat([contact])
        }))
      })
  }
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
          />
        )} />
        <Route path='/create' render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )} />
=======
import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
  state = {
    contacts: [
      {
        id: 'karen',
        name: 'Karen Isgrigg',
        handle: 'karen_isgrigg',
        avatarURL: 'http://localhost:5001/karen.jpg'
      },
      {
        id: 'richard',
        name: 'Richard Kalehoff',
        handle: 'richardkalehoff',
        avatarURL: 'http://localhost:5001/richard.jpg'
      },
      {
        id: 'tyler',
        name: 'Tyler McGinnis',
        handle: 'tylermcginnis',
        avatarURL: 'http://localhost:5001/tyler.jpg'
      }
    ]
  };

  removeContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        prevContact => prevContact.id !== contact.id
      )
    }));
  };

  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
>>>>>>> starter-files-added
      </div>
    )
  }
}

export default App
