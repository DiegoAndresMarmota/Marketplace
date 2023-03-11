import './App.css';
import { Button, Container } from '@mui/material';
import { NavBar } from './common/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Container sx={{ mt: 9 }} maxWidth="xl">
        <Button fullWidth variant='contained'>
          Hi There!
        </Button>
      </Container>
    </div>
  );
}

export default App;
