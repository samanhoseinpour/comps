import { GoSearch, GoPlus, GoGlobe } from 'react-icons/go';
import Button from '../components/Button';

const ButtonPage = () => {
  const handleSearchClick = () => {
    console.log('Query was searched.');
  };

  const handleGlobalClick = () => {
    console.log('Query was globalled');
  };

  return (
    <div>
      <div>
        <Button primary onClick={handleSearchClick}>
          <GoSearch />
          Long
        </Button>
      </div>

      <div>
        <Button secondary onMouseEnter={handleGlobalClick}>
          <GoGlobe />
          Short
        </Button>
      </div>

      <div>
        <Button success>
          <GoPlus />
          Limit order
        </Button>
      </div>

      <div>
        <Button warning>Stop order</Button>
      </div>

      <div>
        <Button danger>Cancel order</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
