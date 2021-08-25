import Home from '../pages/Home';
import Projects from '../pages/Projects';
import NotFound from '../pages/NotFound';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/a-propos" />
            <Route path="/projets" exact component={Projects} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default App;
