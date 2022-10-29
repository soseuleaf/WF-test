import * as React from 'react';

// mui
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

// icons & images
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PageviewIcon from '@mui/icons-material/Pageview';

// youtube
import YouTube from 'react-youtube';

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

const RecipeReviewCard = (props) => {
    const [expanded, setExpanded] = React.useState(false);
    const { backgroundColor, title, videoId } = props.content;
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: backgroundColor }} aria-label="recipe">
              <PageviewIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader="just test"
        />
        <YouTube
            videoId= {videoId}
            opts={{
                weight: "auto",
                height: "auto",
                playerVars: {
                  autoplay: 1, //자동재생 O
                  rel: 0, //관련 동영상 표시하지 않음
                  modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                }}}
            onEnd={(e)=>{e.target.stopVideo(0);}} //이벤트 리스너 
        />
        <CardMedia
            component="img"
            height="194"
            image={AnimalCrossingIMG}
            alt="pic"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            어쩌구 저쩌구
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
                Test1
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }


export default RecipeReviewCard;