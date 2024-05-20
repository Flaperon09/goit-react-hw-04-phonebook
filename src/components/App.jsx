import React, { Component } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import shortid from 'shortid';
import { Section } from './Section';
import Form from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // === Добавление нового контакта
  handleSubmitData = data => {
    // Добавление id в объект контакта
    data.id = shortid.generate();
    
    // Проверка наличия контакта в state
    if (this.state.contacts.find(option => option.name.toLowerCase() === data.name.toLowerCase())) {
      return alert(`${data.name} is already in contacts.`);
    } else {
        this.setState(({ contacts }) => ({
          contacts: [data, ...contacts],
        }));
    }
  };
    
  // === Обновление filter в state
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // === Фильтрация контактов
  getVisibleContacts = () => {
	  const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
	  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);
  }

  // === Удаление контакта
  deleteContact = contactId => {
	  this.setState(prevState => ({
		  contacts: prevState.contacts.filter(contact => contact.id !== contactId),
	  }));
  };

  render() {
    return (
      <div>

        <GlobalStyle />

        <Section title="Phonebook">
          <Form
            onSubmit={this.handleSubmitData} />
        </Section>

        <Section title="Contacts">
          <Filter
            value={this.state.filter}
            onChange={this.changeFilter} />
          <ContactsList
            contacts={this.getVisibleContacts()}
            onDeleteContact={this.deleteContact} />
        </Section>

    </div>
    )
  }

};

export default App;
