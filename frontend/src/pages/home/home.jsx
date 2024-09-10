
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

    


const Home = () => {

  return (

    
    <div >
      <h1> welcome to RadioSmS</h1>
    
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="/public/image/politique.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Politique الاخبار السياسية
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}/>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link  to="/Detaille">Learn More </Link>
      </CardActions>
    </Card>
      

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="/public/image/education.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Education اخبار التعليم
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}/>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link  to="/Detaille">Learn More </Link>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="/public/image/meteo.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Meteo احوار الطقس
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}/>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link  to="/Detaille">Learn More </Link>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="/public/image/sport.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      Sport الاخبار الرياضية
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}/>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link  to="/Detaille">Learn More </Link>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="/public/image/culture.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Culture الاخبار الثقافية
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}/>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link  to="/Detaille">Learn More </Link>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="/public/image/sante.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      Santé الصحة
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}/>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link  to="/Detaille">Learn More </Link>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image="/public/image/satrs.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stars اخبار النجوم
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}/>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link  to="/Detaille">Learn More </Link>
      </CardActions>
    </Card>
  
    </div>
  
  );
}

export default Home;
