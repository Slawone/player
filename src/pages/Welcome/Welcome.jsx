import Box from '@mui/material/Box';
import { Container, Typography, Stack } from '@mui/material';
import Button from '@mui/material/Button';

export const Welcome = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Container>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h1" component="h1" sx={{ color: '#fff' }}>
            Personal Web Player
          </Typography>
          <Typography component="p" sx={{ color: '#fff', fontSize: 30, mb: "30px" }}>
            Welcome to our music listening app
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="text"
              sx={{ color: '#fff' }}
              size="large"
            >
              Sign in
            </Button>
            <Button
              variant="outlined"
              sx={{ color: '#fff', borderColor: '#fff' }}
              size="large"
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
