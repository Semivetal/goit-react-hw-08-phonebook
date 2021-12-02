import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsSelectors } from '../../redux/contactForm';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import s from './ContactsWrapper.module.css';

function ContactsWrapper({ contacts }) {
  return (
    <div className={s.context}>
      <h1 className="text">Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <Filter />
          <h2 className="text">Contacts</h2>
        </>
      )}
      <ContactList />
    </div>
  );
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

ContactsWrapper.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, null)(ContactsWrapper);
