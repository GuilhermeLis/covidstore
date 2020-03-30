import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {AiFillExclamationCircle} from 'react-icons/ai'

// import Card from scomponents/Card'
import appleButton from '../../assets/aple-button.png'
import googleButton from '../../assets/google-button.png'
import './styles.css';

export default function AppsCovid() {
  return (
    <div class = "container">
        <div class = "header">
          <div class = 'header-item-1' >
            <div class = 'header-item-2' >
              <div>
                    <div class = "title-icon">
                      <p>
                      Aplicativo para corona virus
                      </p>
                      <button class = "button-icon">
                        <AiFillExclamationCircle size ='2em' color='green'/>
                      </button>
                    </div>
                    <button class= "button">
                      Voltar
                    </button>
                </div>
            </div>
          </div>
      </div>

      <div class = "body">
        <div class = "body-container">
         <Card className = "card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="../../assets/apple-logo.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <p class= "subtitle" > @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <a>
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            </a>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small' color="primary">
            <div class = "button-web" ><div>WEBSite</div></div>
          </Button>
          </CardActions>
        </Card>


        <Card className = "card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="../../assets/apple-logo.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <p class= "subtitle" > @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <a>
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            </a>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small' color="primary">
            <div class = "button-web" ><div>WEBSite</div></div>
          </Button>
          </CardActions>
        </Card><Card className = "card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="../../assets/apple-logo.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <p class= "subtitle" > @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <a>
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            </a>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small' color="primary">
            <div class = "button-web" ><div>WEBSite</div></div>
          </Button>
          </CardActions>
        </Card><Card className = "card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="../../assets/apple-logo.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <p class= "subtitle" > @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <a>
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            </a>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small' color="primary">
            <div class = "button-web" ><div>WEBSite</div></div>
          </Button>
          </CardActions>
        </Card><Card className = "card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="../../assets/apple-logo.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <p class= "subtitle" > @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <a>
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            </a>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small' color="primary">
            <div class = "button-web" ><div>WEBSite</div></div>
          </Button>
          </CardActions>
        </Card><Card className = "card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="../../assets/apple-logo.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <p class= "subtitle" > @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <a>
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            </a>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small' color="primary">
            <div class = "button-web" ><div>WEBSite</div></div>
          </Button>
          </CardActions>
        </Card>

        </div>
      </div>
    </div>
  );
}


