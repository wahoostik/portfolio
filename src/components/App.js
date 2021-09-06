import Home from '../pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/a-propos" exact component={About} />
            <Route path="/projets" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default App;
