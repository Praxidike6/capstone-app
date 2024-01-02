import customer1Image from './assets/cust-1.jpg';
import customer2Image from './assets/cust-2.jpg';
import customer3Image from './assets/cust-3.jpg';
import customer4Image from './assets/cust-4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Julia Cruz',
    image: customer1Image,
    rating: [1, 1, 1, 1],
    says: `This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again`,
  },
  {
    fullName: 'Jenifer Darling',
    image: customer2Image,
    rating: [1, 1, 1, 1, 0.5],
    says: ` It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.`,
  },
  {
    fullName: 'Namira Singh',
    image: customer3Image,
    rating: [1, 1, 1, 1],
    says: `This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it.`,
  },
  {
    fullName: 'Bob Jobs',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `xcellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.`,
  },
];

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <div className='container grid'>
        <h2>Testimonials</h2>
        {customers.map((customer, index) => (
          <TestimonialCard
            key={index}
            customer={customer}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
