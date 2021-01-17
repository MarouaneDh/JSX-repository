import image1 from '../src/dog2.jpg';
import image2 from '../src/dog11.jpg';
import image3 from '../src/dog3.jpeg';
import image4 from '../src/snail2.jpg';
import image5 from '../src/snail3.jpg';
import image6 from '../src/snail4.jpg';

const carrousselle = () => {
  
  return(
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1}></img>
    </div>
    <div class="carousel-item active">
      <img src={image2}></img>
    </div>
    <div class="carousel-item active">
      <img src={image6}></img>
    </div>
    <div class="carousel-item active">
      <img src={image4}></img>
    </div>
    <div class="carousel-item">
      <img src={image5}></img>
    </div>
    <div class="carousel-item">
      <img className="image3" src={image3}></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
  );
}
export default carrousselle;