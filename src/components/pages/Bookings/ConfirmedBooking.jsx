import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useLocation} from 'react-router-dom';
import {formatDate} from '../../../utils/helpers';

const ConfirmedBooking = () => {
  const location = useLocation();
  const {name, date, time, email, numberOfGuests} = location.state.formData;
  console.log(`ConformedBooking props [${location.state.formData}]`);
  return (
    <div className='container confirmed-booking'>
      <FontAwesomeIcon
        icon={faCircleCheck}
        size='3x'
      />
      <h2>Your reservation has been confirmed.</h2>
      <h3>Name: {name}</h3>
      <h4>
        Date: {time} - {formatDate(date)}
      </h4>
      <h4>No of Guests: {numberOfGuests}</h4>
      <h4>Contact: {email}</h4>
      <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;
