import React from "react";
import { Box, Card, Typography, CardMedia, CardContent, Grid } from "@mui/material";

const TextStyle = {

}

function Content() {
    return (
        <Box>
            <Box>
                <Typography variant="h4" sx={{marginBottom: "10px"}}>Welcome to My Website</Typography>
                <Typography variant="body1" display="block" sx={{
                    alignItems: "left",
                    marginBottom: "10px"
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    fringilla nec diam in eleifend. Suspendisse feugiat elit in massa auctor
                    porta. Nullam eget lectus libero. Vestibulum in nibh ut odio tempor
                    varius. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Mauris tincidunt tristique arcu, nec suscipit
                    nisi tincidunt ac. Donec vitae est aliquam, auctor odio non, rhoncus
                    neque. Proin ut velit sed turpis pulvinar sagittis. Aliquam dapibus quis
                    nibh nec sodales. In hac habitasse platea dictumst. Nullam cursus erat
                    quis rutrum pulvinar. Etiam condimentum sem mauris, et tempor enim
                    gravida vitae. Maecenas vel varius enim. Curabitur lacinia facilisis
                    odio, sit amet euismod augue.
                </Typography>
                <Typography variant="body1" display="block" sx={{
                    alignItems: "left",
                    marginBottom: "20px"
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    fringilla nec diam in eleifend. Suspendisse feugiat elit in massa auctor
                    porta. Nullam eget lectus libero. Vestibulum in nibh ut odio tempor
                    varius. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Mauris tincidunt tristique arcu, nec suscipit
                    nisi tincidunt ac. Donec vitae est aliquam, auctor odio non, rhoncus
                    neque. Proin ut velit sed turpis pulvinar sagittis. Aliquam dapibus quis
                    nibh nec sodales. In hac habitasse platea dictumst. Nullam cursus erat
                    quis rutrum pulvinar. Etiam condimentum sem mauris, et tempor enim
                    gravida vitae. Maecenas vel varius enim. Curabitur lacinia facilisis
                    odio, sit amet euismod augue.
                </Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item md={6} sm={12} xs={12}>
                    <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="src/assets/CardIMG.jpg"
                            title="sky"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Card Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                fringilla nec diam in eleifend. Suspendisse feugiat elit in massa auctor
                                porta.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="src/assets/CardIMG.jpg"
                            title="sky"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Card Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                fringilla nec diam in eleifend. Suspendisse feugiat elit in massa auctor
                                porta.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="src/assets/CardIMG.jpg"
                            title="sky"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Card Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                fringilla nec diam in eleifend. Suspendisse feugiat elit in massa auctor
                                porta.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Content;
