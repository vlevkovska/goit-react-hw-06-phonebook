import { connect } from 'react-redux';
import Container from '../Components/Container/Container';
import Section from '../Components/Section/Section';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactList/ContactList';
import * as actions from '../redux/actions';

function App({ items, filter, addContact, deleteContact, changeFilter }) {
  const applyFilter = value => {
    return items.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(value);
    });
  };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact}></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChangeFilter={changeFilter} />
        {filter === '' ? (
          <ContactList contacts={items} deleteContact={deleteContact} />
        ) : (
          <ContactList
            contacts={applyFilter(filter)}
            deleteContact={deleteContact}
          />
        )}
      </Section>
    </Container>
  );
}

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  addContact: value => dispatch(actions.addContact(value)),
  deleteContact: value => dispatch(actions.deleteContact(value)),
  changeFilter: value => dispatch(actions.changeFilter(value.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
