import React from 'react'
import CardPhoto from '../components/cards/cardPhoto/CardPhoto'


const PlanIgualdad = () => {
  const people = [
    {
      imageUrl: "src/components/cards/cardPhoto/Pilar.png",
      name: "Pilar Limón",
      title: "Software Engineer",
      linkedinUrl: "https://www.linkedin.com/in/pilar-lim%C3%B3n-b6135843/"
    },
    {
      imageUrl: "src/components/cards/cardPhoto/Lola.png",
      name: "Lola Martínez Cueto",
      title: "UX Designer",
      linkedinUrl: "https://www.linkedin.com/in/lolacoach/"
    },
    {
      imageUrl: "src/components/cards/cardPhoto/SR.png",
      name: "Susana",
      title: "Data Scientist",
      linkedinUrl: ""
    }
  ];
  return (
    <div>
      <div className="cardPhotoContainer">
    {people.map((person, index) => (
      <CardPhoto
        key={index}
        imageUrl={person.imageUrl}
        name={person.name}
        title={person.title}
        linkedinUrl={person.linkedinUrl}
      />
    ))}
  </div>

    </div>
  )
}

export default PlanIgualdad