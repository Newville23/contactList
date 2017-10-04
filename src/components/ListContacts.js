import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {
    static PropTypes = {
        contacts: PropTypes.array.isRequired,
        deleteContact: PropTypes.func.isRequireds
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }

    clearQuery = () => {
        this.setState({
            query: ''
        })
    }

    render() {

        //Object destructuring -> to keep the code clean 
        const { contacts, deleteContact } = this.props
        const { query } = this.state

        let showingContacts;
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            showingContacts = contacts.filter((contact) => match.test(contact.name) )
        } else {
            showingContacts = contacts;
        }
        showingContacts.sort(sortBy('name'));

        return (
            <div className="list-contacts">
                <div className="contact-list-top">
                    <input 
                        className="search-contacts"
                        type="text"
                        placeholder="Search Contacts"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                { showingContacts.length !== contacts.length && (
                     <div className="showing-contacts">
                         <span> Showing {showingContacts.length} of {contacts.length} total </span>
                         <button onClick={this.clearQuery}>Show all</button>
                     </div>
                )}
                <ol className="contact-list">
                        { showingContacts.map(contact => (
                            <li key={contact.id} className="contact-list-item">
                                <div className="contact-avatar" style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}/>
                                <div className="contact-details">
                                    <p>{contact.name}</p>
                                    <p>{contact.email}</p>
                                </div>
                                <button onClick={() => deleteContact(contact)} className="contact-remove">
                                    remove
                                </button>
                            </li>
                        )) }
                </ol>
            </div>        

        )
    }
}

export default ListContacts; 