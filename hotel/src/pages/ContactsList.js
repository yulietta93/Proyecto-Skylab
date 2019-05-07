import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DataService from '../services/dataService';
import StorageService from '../services/storageService';
import ContactForm from '../components/ContactForm/index';
import withUser from '../helpers/withUser'

import './contactlist.scss'


class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      loading: false
    }

    this.unobserveContacts = null;
  }

  updateContacts = (contacts) => {
    this.setState({contacts, loading: false})
  }

  async componentDidMount() {
    const {userInfo} = this.props;
    if(userInfo){
      this.unobserveContacts =  DataService.observeContacts(this.updateContacts, userInfo.uid);
    }
    // this.getData();
  }

  async componentDidUpdate(prevProps) {
    const {userInfo} = this.props;

    if(!prevProps.userInfo && userInfo){
      this.unobserveContacts =  DataService.observeContacts(this.updateContacts, userInfo.uid);
    } 
    
    if(prevProps.userInfo && !userInfo){
      this.updateContacts([]);
    }

  }

  componentWillUnmount(){
    this.unobserveContacts && this.unobserveContacts();
  }

  // async getData() {
  //   this.setState({loading: true});
  //   const contacts = await DataService.getContacts();
  //   this.setState({contacts, loading: false})
  // }

  onDeleteContact = async (contactId) => {
    // const success = await DataService.deleteContact(contactId);
    await DataService.deleteContact(contactId);
    
    // if(success) {
    //   this.getData();
    // }
  }

  

  onCreateContact = async ({name, email, message}) => {
    const { userInfo } = this.props;

    const newContact = {
      name, 
      email,
      message,
      userId: userInfo.uid
    }

    if(!name || !email || !message){
      this.setState({error: 'All fields are mandatory'})
    } else {
      this.setState({error: ''});
      const success = await DataService.addContact(newContact);

      if(success) {
        // this.getData();
      } else {
        this.setState({error: 'Error adding contact'})
      }
    }
  }

  render () {
    const { contacts, loading, error } = this.state;

    return (
      <div className="fireabse-app">
        <h1>Contacts manager</h1>
        {loading && <div>LOADING...</div>}
        {!loading && (
          contacts.length <= 0 ? 
          <p>No results</p> :
          (
            <div>
              <section>{this.renderContactsTable(contacts)}</section>
              <section>
                <ContactForm onSubmitForm={this.onCreateContact} />
              </section>
              <p>{error}</p>
            </div>
          )
        )}
      </div>
    );
  }

  renderContactsTable = (contacts) => {
    return (
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
          {contacts.map((c) => {
            return (
              <tr key={c.id}>
                <td><Link to={`/contact/${c.id}`} >{c.id}</Link></td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.message}</td>
                <td><button onClick={()=> this.onDeleteContact(c.id)}>Delete</button></td>
              </tr>
            )
          })}
          </tbody>
        </table>
    )
  }
}

export default withUser(ContactList);
