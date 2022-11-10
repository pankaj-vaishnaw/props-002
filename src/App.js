
import './App.css';
import Card from './Components/Card';
import Img1 from './Images/img1.jpg';
import Img2 from './Images/img3.jpg';
import Img3 from './Images/img4.jpg';
import Img4 from './Images/img2.jpg';


function App() {
  return (
    <div className="App">
      <Card movie="Jurassic world" yearAndAuthor="2000,Author" images={Img1} />
      <Card
        movie="Avatar"
        yearAndAuthor="2002,Author"
        images={Img3}
      />
          <Card
        movie="Retaliation : Animation"
        yearAndAuthor="2004,Author"
        images={Img2}
      />
          <Card
        movie="Dracula Untold"
        yearAndAuthor="2018,Author"
        images={Img4}
      />
      
    </div>
  );
}

export default App;
