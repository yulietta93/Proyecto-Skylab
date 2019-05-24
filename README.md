# Naturae Hotel

### Demo 

http://github.com - automatic!
[GitHub](http://github.com)

## Introduction
Naturae es la pagina web de un hotel en plena naturaleza, pensado para desconectar y descansar.

Podría definirse como un ecoresort, dado que todo lo que ofrece es 100% natural y orgánico. 

En la web podremos reservar una habitación, ver información detallada de su servicio de: spa, masajes, restaurante (donde la comida es totalmente orgánica, de cercanía) para que la experiencia en tu estancia sea de 360º.

## Why did I decide to do this project?
Al tener que pensar un proyecto nuevo donde las funcionalidad era lo que mas trabajo llevaría, decidí diseñar la página web de un hotel, dado que actualmente me dedico a ser diseñadora digital  y una de mis funciones principales es diseñar paginas web de hoteles, y en cuanto estructura y funcionalidad sabía que era un tema que controlaba, y así podría invertir mas tiempo en la lógica. 

Esta vez a nivel de diseño he podido elegir todo, desde el principio hasta el final, algo que disfruto mucho. 

## Descripcion funcional

La pagina web es una muestra por todos los servicios y facilidades que te puede ofrecer el hotel. 

La función principal es la reserva de una habitación. Para poder reservada primero debes iniciar sesión o registrarte.

Una vez pongas las fechas y tipo de habitación en el motor de búsqueda buscara información en la base de datos Firebase y nos pintara la nuestra habitaciones disponibles / no disponibles, si la habitación no esta disponible el botón “Book now” estará deshabitalitado, sino nos dejará continuar con el proceso. 



En caso de que este disponible, nos llevará a la página para poder hacer la reserva, allí encontraremos una   descripción detallada de la habitación y un formulario para poder hacer la reserva coon nuestros datos. 



Una vez hayamos mandado nuestra información, nos llevará a una página con nuestro resumen de compra, y la pasarela de pago. 



De esta forma habremos reservado nuestra primera habitación.

### Description funcional graphic:

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

### Pages and Components
#### Pages:

* Home

* Login

* Signup

* Reservation

* RoomDetail

* ReservationDetail

* Habitaciones

* Habitacion01

* Habitacion02

* Habitacion03

* Ofertas

* Servicios

#### Components:

* Calendar

* Footer

* FormRoomDetail

* Header

* ListRoomsHome

* Modal

* Pactos

* Slider

* Stripe

### Build

* ReactJS
* React-router
* React-redux
* Bootstrap
* Sass
* Rodal-modal
* 
### Database: Firebase

* Authentication
* DataBase
* Hosting

#### Datebase: build

Users: {

	email: string,
    lastname: string,
    name: string,
    uid: string
}

Rooms: {

description: string,
image: string,
name: string,
price: number,
totalRooms: number,
typology: string,
reservation: array,
	endDate: map,
	startDate: map,
    
}

Reservation: {

name: string,
lastname: string,
phone: number,
price: number,
checkin: string,
checkout; string,
roomType: string,

}
