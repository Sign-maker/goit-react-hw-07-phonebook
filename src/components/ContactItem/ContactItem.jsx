import { Button, ContactInfo, Item } from './ContactItem.styled';
import { useContacts } from 'hooks/useContacts';

export const ContactItem = ({ id, name, number }) => {
  const { deleteContact } = useContacts();

  return (
    <Item>
      <ContactInfo>
        <span>{name}</span>
        <span>{number}</span>
      </ContactInfo>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};
