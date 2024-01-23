import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Home from './pages/home'
import Events from './pages/events'
import Login from './pages/login'

const App = () => {
    return (
        <div className="container">
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsove-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"> 
                        <Nav className="mr-auto">
                            <Nav.Link href="#" as="span">
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#" as="span">
                                <Link to="/events">Events</Link>
                            </Nav.Link>
                            <Nav.Link href="#" as="span">
                                <Link to="/login">Log in</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;