import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className='container grid our-story'>
      <div className='our-story-description'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterranean cuisine in Chicago, and were inspired to bring the
          flavors of their hometown in Italy to the people of Chicago. The two
          brothers continue to oversee the Little Lemon restaurant, nearly
          thirty years later.
        </p>
      </div>
      <div className='our-story-chefs'>
        <img
          src={chefsMarioAndAdrianAImage}
          alt='Chefs Mario and Adrian'
        />
        <img
          src={chefsMarioAndAdrianBImage}
          alt='Chefs Mario and Adrian'
        />
      </div>
    </section>
  );
};

export default OurStory;
