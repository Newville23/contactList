
import React, { Component } from 'react';
import ListContacts from './components/ListContacts';
import * as contactsAPI from './utils/ContactsAPI';

class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    contactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
    contactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
       <ListContacts deleteContact={this.removeContact}  contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;