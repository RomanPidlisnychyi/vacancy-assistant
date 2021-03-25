import { ListGroup, Button, Card, Accordion } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BtnControl } from './BtnControl';
import { getVacancy } from '../../../../store/selectors/vacancySelectors';
import { prepareVacancy } from '../../../../utils/prepareVacancy';
import styles from './VacancyItem.module.css';

export default function VacancyItem({ id }) {
  const vacancy = useSelector(state => getVacancy(state, id));

  const { date, companyName, status, URL } = vacancy;

  const myBtnInHeader = [status, 'delete'];

  const myBtnInCard = prepareVacancy(vacancy);

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
              <a href={URL} target="_blanck">
                {companyName}
              </a>
            </Accordion.Toggle>
            <BtnControl myBtn={myBtnInHeader} id={id} />
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className={styles.cardBody}>
              <BtnControl myBtn={myBtnInCard} id={id} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </ListGroup.Item>
  );
}
