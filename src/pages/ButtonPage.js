import { GoSearch, GoPlus, GoGlobe } from 'react-icons/go';
import Button from '../components/Button';

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary>
          <GoSearch />
          Long
        </Button>
      </div>

      <div>
        <Button secondary>
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
