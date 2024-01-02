import {faPersonDigging} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './index.css';
import {useMoveBack} from '../../../hooks/useMoveBack';

const UnderConstruction = () => {
  const moveBack = useMoveBack();
  return (
    <div className='container under-construction'>
      <FontAwesomeIcon
        icon={faPersonDigging}
        size='3x'
      />
      <h2>Page under construction</h2>
      <button
        onClick={moveBack}
        size='medium'>
        &larr; Go back
      </button>
    </div>
  );
};

export default UnderConstruction;
