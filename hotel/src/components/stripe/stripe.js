import React ,{Component}from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends Component {
  onToken = (token) => {
   
  //tener en mente la coleciion de reservation, tiene que tener el usuario id, el estado de si esta pagado o no. detalle / pago / fechas 
  //para calcular precio final: restas los dos timestamps y lo restas entre
  //ObserveContact para filtrar por usuario.

  }
  // ...
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken} stripeKey="pk_test_WL9oxOzrNIMQcUcNAkudoBq800BaehUXLY" className="button-stripe"/>
    )
  }
}