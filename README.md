# Naturae Hotel

### Demo 

----> [Demo Link](https://hotel-skylab.firebaseapp.com/) <---- Version Desktop

## Introduction
Naturae is the website of a hotel surrounded by nature and designed to disconnect and rest. It could be defined as an eco-resort since everything it offers is 100% natural and organic.

 On their website, we can easily book a room, see detailed information of their service: spa, massages, restaurant (where all the food is organic) so that the experience in your stay is 360.

## Why did I decide to do this project?
When I had to think about a new project where the functionality was what would be the most work, I decided to design a hotel's website. I am currently working as a digital designer, and one of my primary functions is the design of hotel websites. 

The familiarity of the subject gave me more time to focus on the program's logistics. This time at the design level I was able to choose everything, from the beginning to the end, something in which I really enjoyed doing.

## Descripcion funcional

This website is a sample for all the services and facilities that the hotel can offer you. The primary function of this site is the feasibility of reserving a room. To be able to execute a reservation, you must be able to login to your account or register for one. Once you filter in the dates and the type of room you would like, then the information will be put into a Firebase database. Moreover, there will be pictures of the rooms, and when the "book now" button appears, then you can proceed to the next page. If it does not appear, then the room is already booked by another customer.   

In case it is available, it will take you to the page to confirm the reservation,  there we will find a detailed description of the room and blank spaces to fill in your information. 
Once you have sent your information, it will take you to another page with the purchase summary, and this is where you can make the payment. 

In this way, we will have reserved our first room.

### Description funcional graphic:

![alt text](https://raw.githubusercontent.com/yulietta93/Proyecto-Skylab/master/hotel/driagrama-01.jpg)

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

* Users: {

	email: string,
    lastname: string,
    name: string,
    uid: string
}

* Rooms: {

description: string;
image: string,
name: string,
price: number,
totalRooms: number,
typology: string,
reservation: array,
	endDate: map,
	startDate: map,
    
}

* Reservation: {

name: string,
lastname: string,
phone: number,
price: number,
checkin: string,
checkout; string,
roomType: string,

}
