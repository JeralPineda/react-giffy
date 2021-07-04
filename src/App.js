import { Link, Route } from 'wouter';

import { ListOfGif } from './components/ListOfGifs/ListOfGif';
import './App.css';

function App() {
   return (
      <div className='App'>
         <section className='App-content'>
            <Link to='/gif/panda'>Gif de Pandas</Link>
            <Link to='/gif/honduras'>Gif de Honduras</Link>
            <Route path='/gif/:keyword' component={ListOfGif} />
         </section>
      </div>
   );
}

export default App;
