import { ListOfGif } from './components/ListOfGif';
import './App.css';

function App() {
   return (
      <div className='App'>
         <section className='App-content'>
            <ListOfGif keyword='panda' />
         </section>
      </div>
   );
}

export default App;
