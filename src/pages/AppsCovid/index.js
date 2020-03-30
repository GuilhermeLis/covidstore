import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MobileStoreButton from 'react-mobile-store-button';


// import Card from scomponents/Card'
import appleButton from '../../assets/aple-button.png'
import googleButton from '../../assets/google-button.png'
import './styles.css';

export default function AppsCovid() {
  return (
    <div class = "container">
        <div class = "header">
          <div class = 'header-item-1' >
                <div>
                  <div>
                    Aplicativo para corona virus
                  </div>
                  <button class= "button">
                    Voltar
                  </button>
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
              <p> @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
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
              <p> @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small' className = 'button-web'>
            web
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
              <p> @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
          <div class = 'img-button'>

          </div>
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
              <p> @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
            web
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
              <p> @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
            web
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
              <p> @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
            web
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
              <p> @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
            web
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
              <p> @instagram </p>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size='small'>
              <img src = {appleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
              <img src = {googleButton} alt = '' class = 'img-button'/>
            </Button>
            <Button size='small'>
            web
          </Button>
          </CardActions>
          
        </Card>

        </div>
      </div>
    </div>
  );
}


