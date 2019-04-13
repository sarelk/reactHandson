import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ContactList extends Component {
    render() {
        const contactList =
            this.props.contacts.map(contact =>
                (
                    <li key={contact._id}>
                        <a href={contact._id}>
                            {contact.name}
                        </a>
                    </li>
                )
            )
        return (
            <section>
                <h1>Contacts</h1>
                <ul>
                    {
                        contactList
                    }
                </ul>
            </section>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}