import {Header} from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { AppRouting } from "./routes";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div>
      <Header />
      <Container style={{padding:"0 0 60px 0"}}>
        <AppRouting />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
