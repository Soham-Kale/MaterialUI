import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import { Add as AddIcon, DateRange, DateRangeOutlined, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import React, { useState } from 'react'


const Add = () => {
    const StyledModal = styled(Modal)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })
    const UserBox = styled(Box)({
        display: 'flex',
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px"
    })
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={(e) => setOpen(true)} title="Delete"
                sx={{
                    position: "fixed", bottom: 20,
                    left: { xs: "calc(50% -25px)", md: 30 },
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="Styledmodal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} 
                    bgcolor={"background.default"} 
                    color={"text.primary"}
                    p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign='center'>Create post</Typography>
                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }}
                            alt="Remy Sharp"
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                        />
                        <Typography variant='span'>John</Typography>
                    </UserBox>

                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='uccess' />
                        <PersonAdd color='error' />
                    </Stack>

                    <ButtonGroup 
                        fullWidth
                        variant="contained" aria-label="Basic button group">
                        <Button>Post</Button>
                        <Button
                            sx={{width: "100px"}}>
                            <DateRangeOutlined/></Button>
                    </ButtonGroup>

                </Box>
            </StyledModal>
        </>
    )
}

export default Add;