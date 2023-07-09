import { Component } from "react";

class newContact extends Component {
  state = { filter: "" };
  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  getFilterContact() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const filterValue = filter.toLowerCase();
    const filterContact = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });
    return filterContact;
  }
  render() {
    const { handleFilter, getFilterContact } = this;
    const contacts = getFilterContact();
    const elem = contacts.map(({ id, name, number }) => (
      <li  key={id}>
        {name} {number}
        <button onClick={() => this.removeContact(id)}>Delete</button>
      </li>
    ));
    return (
      <>
        <input
          onChange={handleFilter}
          name="filter"
          type="text"
          placeholder="Enter name"
        />
        <ul>{elem}</ul>
      </>
    );
  }
}
export default newContact;
