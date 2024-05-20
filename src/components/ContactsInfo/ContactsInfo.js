import { ContactListItem, ButtonDelete } from './ContactsInfo.styled';

export const ContactsInfo = ({ contact, onDeleteContact }) => {
    return (
            <ContactListItem key={contact.id}>{contact.name}: {contact.number}
                <ButtonDelete onClick={() => onDeleteContact(contact.id)}>Delete</ButtonDelete>
            </ContactListItem>
    )
}