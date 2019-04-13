import React, { Component } from 'react';

import ContactService from '../services/ContactService'
import ContactList from '../components/ContactList'

class ContactPage extends Component {
  
  state = {
      contacts: []
  }

  async componentDidMount() {
      ContactService.getContacts().then(contacts =>{
          this.setState({contacts})
      })
  }

  render() {
    
    return (
        <div class="contatcs-list">
        <ContactList contacts={this.state.contacts}/>
        </div>
    );
  }
}

export default ContactPage;
