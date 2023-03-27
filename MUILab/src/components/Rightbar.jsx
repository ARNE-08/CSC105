import React from 'react'
import { Box, Typography, ImageList, ImageListItem } from '@mui/material'

const image = [
    {
        img: 'src/assets/img1.jpg',
        title: 'day'
    },
    {
        img: 'src/assets/img2.jpg',
        title: 'dusk'
    },
    {
        img: 'src/assets/img3.jpg',
        title: 'dawn'
    },
    {
        img: 'src/assets/img4.jpg',
        title: 'twilight'
    },
]

function Rightbar() {
    return (
        <Box>
            <Typography variant='h5'>Latest Photos</Typography>
            <ImageList sx={{ width: 250}} cols={2}>
                {image.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={item.img}
                            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            // loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default Rightbar