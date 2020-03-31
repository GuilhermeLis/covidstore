import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Header from '../../components/Header';
import Popup from '../../components/Popup';

import appleButton from '../../assets/aple-button.png'
import googleButton from '../../assets/google-button.png'
import dog from '../../assets/dogs.jpg'
import './styles.css';

export default function AppsCovid() {
  const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }
    const cards = [
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },
      {
        id: Math.random(),
        img: dog,
        title: 'Covidx',
        instagram: '@covidx',
        description: 'solução encontrada para combater o Covid-19 da melhor forma possível',
        appleStore: '/',
        googleSore: '/',
        website: '/'
      },

    ]
  return (
    <div className = "container">
      <Header togglePopup={togglePopup}/>
      <div className = "body">
        <div className = "body-container">

          {
            cards.map(card => (
              <Card className = "card" key = {card.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image= {card.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <p className= "subtitle" > {card.instagram} </p>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
                <a href={card.appleStore}>
                <Button size='small'>
                  <img src = {appleButton} alt = '' className = 'img-button'/>
                </Button>
                </a>
                <a href={card.googleSore}>
                <Button size='small'>
                  <img src = {googleButton} alt = '' className = 'img-button'/>
                </Button>
                </a>
                <a href={card.website}>
                <Button size='small' color="primary">
                <div className = "button-web" ><div>WEBSite</div></div>
                </Button>
                </a>
              </CardActions>
            </Card>
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


