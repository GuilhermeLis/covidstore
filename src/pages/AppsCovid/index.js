import React, { useState, useEffect} from 'react';

import Header from '../../components/Header';
import Popup from '../../components/Popup';
import Card from '../../components/Card';

import * as dados from '../../services/card'
import './styles.css';

export default function AppsCovid() {
  const [showPopup, setShowPopup] = useState(false);
  const [cards, setCards] = useState([])

  useEffect(()=>{
    setCards(dados.cards)
  },[])

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }


    
  return (
    <div className = "container">
      <Header togglePopup={togglePopup} dados = {cards}/>
      <div className = "body">
        <div className = "body-container">

          {
            cards.map(card=>(
              <Card
                key={card.id} 
                img={card.img}
                title={card.title}
                instagram={card.instagram}
                description={card.description}
                appleLink={card.appleStore}
                googleLink={card.googleStore}
                webLink={card.website}
                dataRelease={card.dataRelease}
              />
            ))
          }
        {showPopup ?  
            <Popup  
                    text='Aplicativos para o Covid-19'  
                    closePopup={togglePopup}  
                /> : null  }  
        </div>
      </div>
    </div>
  );
}


