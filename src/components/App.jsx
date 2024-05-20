import { useState, useEffect } from 'react';
import { GlobalStyle } from "../GlobalStyle";
import shortid from 'shortid';
import { Section } from './Section';
import Form from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';

export default function App() {
  
  // === ХУКи состояния
  const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem('contacts')) ?? []});
  const [filter, setFilter] = useState('');

  // === ХУК Запись данных в LocalStorage
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // === Добавление нового контакта
  const handleSubmitData = data => {
    // Добавление id в объект контакта
    data.id = shortid.generate();
    // Проверка наличия контакта в state
    if (contacts.find(option => option.name.toLowerCase() === data.name.toLowerCase())) {
      return alert(`${data.name} is already in contacts.`);
    } else {
        setContacts([data, ...contacts]);
    }
  };

  // === Обновление filter в состоянии
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  // === Фильтрация контактов
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
	  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);
  }

  // === Удаление контакта
  const deleteContact = contactId => {
	  setContacts( 
		  contacts.filter(contact => contact.id !== contactId),
	  );
  };

    return (
      <div>

        <GlobalStyle />

        <Section title="Phonebook">
          <Form
            onSubmit={handleSubmitData} />
        </Section>

        <Section title="Contacts">
          <Filter
            value={filter}
            onChange={changeFilter} />
          <ContactsList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact} />
        </Section>

    </div>
    )
};