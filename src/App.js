import './App.css';
import './nav.css';
import image1 from '../src/dog2.jpg';
import image2 from '../src/dog11.jpg';
import image3 from '../src/dog3.jpeg';
import image4 from '../src/snail2.jpg';
import image5 from '../src/snail3.jpg';
import image6 from '../src/snail4.jpg';



function App() {
  
  return (
    
    <div className="App">
      <nav>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">contact</a>
      </nav>
      <div>
      
          <h1 class="title red">MDH Gallery</h1>
          <section>
        <br/>
        
          <div className="image"><p>Sunbathing dog</p><img src={image1}></img></div>
        <br/>
          <div className="image"><p>Sibling dogs playing</p><img src={image2}></img></div>
        <br/>
          <div className="image"><p>Guard dog</p><img className="image3" src={image3}></img></div>
        <br/>
          <div className="image"><p>Mr. Snail climbing the branch</p><img src={image4}></img></div>
        <br/>
          <div className="image"><p>Mr. Snail drifting on the road</p><img src={image5}></img></div>
        <br/>
          <div className="image"><p>Mr. Snail going on an adventure</p><img src={image6}></img></div> 
          </section>
    </div>
    <footer>
      <span>This website was brought to you by MDh-Devz®</span>
    </footer>
    </div>
  );
}

export default App;