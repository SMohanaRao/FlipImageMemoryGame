import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGrid from './components/ImageGrid';
import {cardImages} from './utils/Images'

function App() {
  return (
    <ImageGrid images={cardImages}/>
  );
}

export default App;
