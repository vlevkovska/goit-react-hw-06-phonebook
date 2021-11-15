import { Routes, Route } from 'react-router-dom';
import Container from './Components/Container/Container';
import Phonebook from './views/Phonebook';

function App() {
  return (
    <Container>
      <Routes>
        <Route exact path="/" element={<Phonebook />} />
      </Routes>
    </Container>
  );
}

export default App;
