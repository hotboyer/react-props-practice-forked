import React from "react";
import Card from "./Card"
import contacts from "../contacts";


function createCard(newCard){
  return <Card 
  key = {newCard.id}
name={newCard.name}
imgURL={newCard.imgURL}
phone={newCard.phone}
email={newCard.email}
  />
}



function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
     {contacts.map(createCard)}

     
   

    </div>
  );
}

export default App;
