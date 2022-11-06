// React Base
import React, { useState } from "react";

// MUI Material
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// MUI Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Media Player
import MediaPlayer from './MediaPlayer';

// User Data
import { UserDatas } from '/src/data/UserData';

const ExpandMore = styled((props) => {
  const { expand, ...more } = props;
  return <IconButton {...more} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCard = (props) => {
    const [checked, setChecked] = useState(false);
    const { user_id, post_title, post_content, music_img, music_title, music_url } = props.post;
    const userData = UserDatas[user_id];
  
    const handleExpandClick = () => {
      setChecked(!checked);
    };

    return (
      <Card sx={{ width: '400px', alignItems: 'center' }}>
        <CardHeader
          avatar={ <Avatar alt="Avatar" src={`/images/${userData.user_profile}`}/> }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={ userData.user_name }
        />
        
        <MediaPlayer 
          img = {music_img} 
          title = {music_title} 
          url = {music_url}
        />

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <CardContent>
          <div>
            <Collapse in={checked} collapsedSize={60}>
              <Typography gutterBottom variant="h5" component="div">
                {post_title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post_content}
              </Typography>
            </Collapse>
          </div>
        </CardContent>

        <CardActions disableSpacing>
          <ExpandMore
            expand={checked}
            onClick={handleExpandClick}
            aria-expanded={checked}
            aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </Card>
    );
  }


export default PostCard;