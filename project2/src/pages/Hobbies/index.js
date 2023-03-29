import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjV0cSYRp4z0sm20GyYjM8jybspFXzn1stg&usqp=CAU',
    title: 'Listening Music',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://pyxis.nymag.com/v1/imgs/160/7b8/be9b71674a92129013428120b1a0c699b7-howtogetintodrawing.rsquare.w1200.jpg',
    title: 'Drawing',
    
  },
  {
    img: 'https://images.news18.com/ibnlive/uploads/2021/08/sun-photo.jpg',
    title: 'Photography',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtW63lPsH5GS8mX1fNeUNgjYm1DK_eDc3YWw&usqp=CAU',
    title: 'PlayingLudo',
    
    cols: 2,
  },
  
    
  
    
];