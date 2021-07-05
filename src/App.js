import { Link, Route } from 'wouter';

import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { SearchResults } from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';
import './App.css';

function App() {
   return (
      <StaticContext.Provider value={{ name: 'Jeral', Conectado: true }}>
         <div className='App'>
            <section className='App-content'>
               <Link to='/'>
                  <figure className='App-logo'>
                     <img src='./logo.png' alt='Giffy logo' />
                  </figure>
               </Link>

               <GifsContextProvider>
                  <Route path='/' component={Home} />

                  <Route path='/search/:keyword' component={SearchResults} />

                  <Route path='/gif/:id' component={Detail} />
               </GifsContextProvider>
            </section>
         </div>
      </StaticContext.Provider>
   );
}

export default App;
