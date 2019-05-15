import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataService from '../../services/dataService';
import ContactForm from '../../components/ContactForm';
import withUser from '../../helpers/withUser';


//ES SOLO  UN MODELO DE FORMULARIO

class ContactDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      contact: null
    }
  }

  async componentDidMount(){
    const contact = await DataService.getObjectDetail('contact', this.props.match.params.id);
    this.setState({contact, loading: false})
  }

  onSubmitForm = ({name, email}) => {
    const updateContact = {
      name, 
      email,
    }

    const { id } = this.props.match.params;
    const success = DataService.updateDetail('contact', id, updateContact);
    
    if(success) {
      this.props.history.push('/')
    }
  }

  render() {
    const {loading, contact} = this.state;

    return (
      <div className="contact-detail">
        <Link to="/home">Atrás</Link>
        {loading && <div>Loading</div>}
        {!loading && (contact ? 
          <ContactForm 
            name={contact.name}
            email={contact.email}
            onSubmitForm={this.onSubmitForm}
          /> :
          <div>No results - Contact detail</div>  
        )}
      </div>
    )
  }
}

export default withUser(ContactDetail)