import { ListGroup, Button, Card, Accordion } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { BtnControl } from './BtnControl';
import { IconBtn } from './BtnControl/IconBtn';
import { getVacancy } from '../../../../store/selectors/vacancySelectors';
import { onDeleteVacancy } from '../../../../store/operations/vacancyOperations';
import { inputs } from '../../../../inputs';
import styles from './VacancyItem.module.css';

export default function VacancyItem({ id }) {
  const dispatch = useDispatch();
  const vacancy = useSelector(state => getVacancy(state, id));

  // const myBtnInCard = inputs.filter(
  //   input =>
  //     input.name !== 'name' &&
  //     input.name !== 'email' &&
  //     input.name !== 'password' &&
  //     input.name !== 'confirmPassword'
  // );

  const {
    companyName,
    URL,
    date,
    status,
    position,
    stack,
    location,
    phone,
  } = vacancy;

  const myBtnInCard = [
    'companyName',
    'URL',
    'phone',
    'position',
    'stack',
    'location',
  ];

  const myBtnInHeader = [status, 'delete'];

  const handleBtn = () => {
    dispatch(onDeleteVacancy(id));
  };
  return (
    <ListGroup.Item className={styles.item}>
      <Accordion>
        <Card>
          <Card.Header className={`${styles.cardHeader} ${styles[status]}`}>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              className={styles.mainButton}
            >
              {date}
              {companyName}
            </Accordion.Toggle>
            <BtnControl myBtn={myBtnInHeader} />{' '}
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className={styles.cardBody}>
              <BtnControl myBtn={myBtnInCard} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </ListGroup.Item>
  );
}
