import React, { Component } from 'react';
// import shortid from 'shortid';
import { FormData, FormLabel, FormLabelName, FormInputName } from './Form.styled';

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    // === Обновление state при вводе в <input>
    handleChange = event => {
	  const { name, value } = event.currentTarget;
        this.setState({ [name]: value, });
    };

    // === Добавление нового контакта
	handleSubmit = event => {
        event.preventDefault();
        // Возврат нового контакта в App
        this.props.onSubmit(this.state);
        // Очистка формы после отправки данных
        this.reset();
  };

    // === Очистка формы
    reset = () => {
        this.setState({ name: '', number: '', });
    };
    
    render() {
        const { name, number } = this.state;
        return (
            <div>
                <FormData onSubmit={this.handleSubmit}>
                    <FormLabel>
                        <FormLabelName>Name</FormLabelName>
                        <FormInputName
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name} onChange={this.handleChange}
                        />
                        <FormLabelName>Number</FormLabelName>
                        <FormInputName
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number} onChange={this.handleChange}
                            />
                    </FormLabel>
                    <button type="submit">Add contact</button>
                </FormData>
            </div>
        )
    }
};

export default Form;