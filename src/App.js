import { Link, Route } from 'wouter';

import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { SearchResults } from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import './App.css';

function App() {
   return (
      <StaticContext.Provider value={{ name: 'Jeral', Conectado: true }}>
         <div className='App'>
            <section className='App-content'>
               <Link className='App-logo' alt='Giffy logo' to='/'>
                  <img src='./favicon.ico' alt='' />
               </Link>

               <Route path='/' component={Home} />

               <Route path='/search/:keyword' component={SearchResults} />

               <Route path='/gif/:id' component={Detail} />
            </section>
         </div>
      </StaticContext.Provider>
   );
}

export default App;
