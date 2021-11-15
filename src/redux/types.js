export const getContacts = state => state.contacts.contacts;
const actions = {
  ADD: 'contacts/Add',
  DELETE: 'contacts/Delete',
  CHANGE: 'filter/Change',
  APPLY: 'filter/Apply',
};

export default actions;
