import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree chaitanya" src="https://content3.jdmagicbox.com/comp/karimnagar/r1/9999px878.x878.180820235825.x2r1/catalogue/sree-chaitanya-institute-of-technological-sciences-karimnagar-engineering-colleges-b636ezca1p.jpg"/>
        </ListItemAvatar>
        <ListItemText
          primary="Sree chaitanya institute of technological science"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                60% CGPA
              </Typography>
              {" — B Com Computer Applications, Information Technology"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri chaitanya" src="https://content.jdmagicbox.com/comp/hyderabad/76/040p8400176/catalogue/sri-chaitanya-girls-residential-college-nizampet-hyderabad-colleges-r141wgvgei.jpg?clr=38382e" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri chaitanya Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                73% CGPA
              </Typography>
              {" — Intermediate studies with mpc"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar></ListItemAvatar>
          <Avatar alt="Bhagavathi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2U6WVkXqQYY30beMcthUJCDGd0ZRX-xdNg&usqp=CAU"/>
        <ListItemText
          primary="Bhagavathi High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                90% CGPA
              </Typography>
              {"-Higher Secondary Education With Computer Classes"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}