import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

  state = {
    query: ''
  };

  clearQuery() {
    this.updateQuery('');
  }

  updateQuery(query) {
    this.setState(() => ({
      query: query.trim()
    }));
  }

  render() {
    const { contacts, onDeleteContact } = this.props;
    const { query } = this.state;

    const showingContacts =
      query === ''
        ? contacts
        : contacts.filter(contact =>
            contact.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="listContacts">
        <div className="list-contact-top">
          <input
            type="text"
            className="search-contacts"
            placeholder="Search Contacts"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
        {/* Guard Operator */}
        {query !== '' && (
          <div className="showing-contacts">
            <span>
              Now showing {showingContacts.length} of {contacts.length} total
            </span>
            <button onClick={() => this.clearQuery()}>Show All</button>
          </div>
        )}
        <ol className="contact-list">
          {showingContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}
              ></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>@{contact.handle}</p>
              </div>
              <button
                className="contact-remove"
                onClick={() => onDeleteContact(contact)}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
