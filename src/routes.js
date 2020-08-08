import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './pages/Index';
import Stars from './pages/Stars'
import Kanban from './pages/Kanban';
import PokemonLanding from './pages/PokemonLanding';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
      <Route path="/stars" component={Stars} />
      <Route path="/kanban" component={Kanban} />
      <Route path="/addLesson" component={PokemonLanding} />
    </BrowserRouter>
  )
}

export default Routes;