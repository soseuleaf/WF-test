// React Base
import React, {useState, useEffect} from "react";

// MUI material
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

// MUI Icons
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

// React Player
import ReactPlayer from 'react-player'

const Widget = styled('div')(() => ({
    width: 300,
    padding: 16,
    borderRadius: 16,
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
    width: 50,
    height: 50,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
        width: '100%',
    },
});

const MediaPlayer = (props) => {
    const [playTime, setPlayTime] = useState(0);
    const [instance, setInstance] = useState(null);
    const [volume, setVolume] = useState(0.1);
    const [playing, setPlaying] = useState(false);
    const [movedTime, setMovedTime] = useState(0);
    const [seeking, setSeeking] = useState(0);

    const music_img = props.img;
    const music_title = props.title;
    const music_url = props.url;

    useEffect(() => {
        if (instance) {
            instance.seekTo(movedTime)
        }
    }, [movedTime])

    const autoPlay = () => {
        setPlaying(true);
    }

    const handleSeekChange = e => {
        setSeeking(true)
        setPlayTime(parseFloat(e.target.value));
    }

    const handleSeekMouseUp = (_, v) => {
        setSeeking(false)
        setMovedTime(v)
    }

    const handleProgress = state => {
        if (!seeking) {
            setPlayTime(state.played)
        }
    }
    
    const handleVolumeChange = e => {
        setVolume(parseFloat(e.target.value))
    }

    const handlePlayPause = () => {
        setPlaying(!playing)
    }

    return (
        <>
            <ReactPlayer
                className='react-player'
                width='0'
                height='0'  

                url={music_url}
                loop={true}
                playing={playing}
                volume={volume}

                ref={setInstance}
                onReady={autoPlay}
                onProgress={handleProgress}
            />

            <Widget>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CoverImage>
                        <img src={`/images/${music_img}`} />
                    </CoverImage>
                    <Box sx={{ ml: 1.5, minWidth: 0 }}>
                        <Typography noWrap variant="subtitle1">
                            {music_title}
                        </Typography>
                    </Box>
                </Box>

                <Slider
                    aria-label="time-indicator" size="small"
                    min={0} max={0.999999} step={0.0001}
                    value={playTime}
                    onChange={handleSeekChange}
                    onChangeCommitted={handleSeekMouseUp} 
                    sx={{
                        color: '#000',
                        height: 4,
                        '& .MuiSlider-thumb': {
                            width: 8,
                            height: 8,
                            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                            '&:before': {
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: `0px 0px 0px 8px ${'rgb(255 255 255 / 16%)'}`,
                            },
                            '&.Mui-active': {
                                width: 20,
                                height: 20,
                            },
                        },
                        '& .MuiSlider-rail': {
                        opacity: 0.28,
                        },
                    }}
                />

                <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
                    <IconButton aria-label={playing ? 'pause' : 'play'} onClick={handlePlayPause}>
                        {playing ? (
                            <PauseRounded sx={{ color: '#000', fontSize: '3rem' }} />
                        ) : (
                            <PlayArrowRounded sx={{ color: '#000', fontSize: '3rem' }} />
                        )}
                    </IconButton>
                    <VolumeDownRounded />
                    <Slider
                        min={0} max={1} step={0.001}
                        value={volume} 
                        onChange={handleVolumeChange} 
                        aria-label="Volume"
                        defaultValue={0.1}
                        sx={{
                        color: '#000',
                        '& .MuiSlider-track': {
                            border: 'none',
                        },
                        '& .MuiSlider-thumb': {
                            width: 24,
                            height: 24,
                            backgroundColor: '#000',
                            '&:before': {
                            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible, &.Mui-active': {
                            boxShadow: 'none',
                            },
                        },
                        }}
                    />
                    <VolumeUpRounded />
                </Stack>
            </Widget>
        </>

    )
}

export default MediaPlayer;