import './bootstrap.min.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import PendingExport from './components/PendingExport'
import PendingExportList from './components/PendingExportList'
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router , Route} from 'react-router-dom'

function App() {
  return (
    
    <Router>
     {/* <header> <Header></Header></header> */}
      <main className="py-3" >
        <Container>
          {/* <Route path="/" component={HomeScreen} exact ></Route>
          <Route path="/product/:id" component={ProductScreen}  ></Route> */}
          <Route path="/" component={PendingExportList} exact  ></Route>
          <Route path="/PendingExport"  component={PendingExport} exact ></Route>
          
        </Container>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </Router>
  );
}

export default App;
