import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import HomepageNav from '../Components/HomePageNav'
import HomePageShoes from '../Components/HomePageShoes'




function Home() {



  return (
    <div class="homepage">

    <div classname="carousel ">
    <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      />
      </MDBCarousel>
      </div>
      
      <div>
      <HomepageNav />
      </div>

      
      <div>
        <HomePageShoes />
      </div>


      </div>
    
  ) 
}


export default Home