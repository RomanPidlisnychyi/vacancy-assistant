import { useSelector, useDispatch } from 'react-redux';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { isLoading } from '../../store/selectors/loadingSelectots';
import { getFilter } from '../../store/selectors/filterSelectors';
import { setFilter } from '../../store/actions/filterActions';
import styles from './Input.module.css';

export default function Input({ handleModal }) {
  const dispatch = useDispatch();

  const loading = useSelector(isLoading);
  const filter = useSelector(getFilter);

  const handleInput = e => dispatch(setFilter(e.target.value));

  const handleBtn = () => {
    handleModal();
  };
  return (
    <InputGroup className="mb-3">
      <Form.Control
        value={filter}
        onChange={handleInput}
        className={styles.input}
        placeholder="Company name"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={handleBtn}
          disabled={!filter}
        >
          Button
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
