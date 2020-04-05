import React, { useState, useEffect } from 'react';
import { FaExclamation } from 'react-icons/fa';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';

import * as dados from '../../services/card';
import './styles.css';

export default function AppsCovid() {
  const [showDontFind, setShowDontFind] = useState(false);
  const [cards, setCards] = useState([]);
  const [theLast, setTheLast] = useState(0);

  useEffect(() => {
    setCards(dados.cards);
  }, []);

  const changeCards = (value) => {
    setCards(value);
  };

  const finded = () => {
    setShowDontFind(false);
  };

  const DidntFind = () => {
    setShowDontFind(true);
  };


  return (
    <div className="container">
      <Header
        dados={cards}
        didntFind={DidntFind}
        finded={finded}
        changeDados={changeCards}
        setTheLast={setTheLast}
      />
      <div className="body">
        <Categories
          dados={cards}
          changeDados={changeCards}
          theLast={theLast}
          setTheLast={setTheLast}
        />
        <div className="body-container">

          {
            cards.map((card) => (
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
        </div>
        {
            showDontFind ? (
              <div className="dontFind">
                <div>
                  <FaExclamation size={50} color="#808080" />
                  <h1>
                    Resultado Não encontrado
                  </h1>
                </div>
              </div>
            )
              : null
          }
      </div>
      <Footer />
    </div>
  );
}
