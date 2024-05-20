import { ContactsInfo } from '../ContactsInfo';

export const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
        <div>
            <ul>
                {contacts.map(contact => 
                    <ContactsInfo
                        key={contact.id}
                        contact={contact}
                        onDeleteContact={onDeleteContact} />
                )}              
            </ul>
        </div>
    )
};