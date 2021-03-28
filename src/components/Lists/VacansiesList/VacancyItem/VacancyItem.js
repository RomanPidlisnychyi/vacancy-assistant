import { useState } from 'react';
import { ListGroup, Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BtnControl } from './BtnControl';
import { getVacancy } from '../../../../store/selectors/vacancySelectors';
import { getStatuses } from '../../../../store/selectors/statusesSelectors';
import { prepareVacancy } from '../../../../utils/prepareVacancy';
import styles from './VacancyItem.module.css';

export default function VacancyItem({ id, eventKey, handleEventKey }) {
  const vacancy = useSelector(state => getVacancy(state, id));
  const statuses = useSelector(getStatuses);

  const [iconKey, setIconKey] = useState(null);

  const { date, companyName, status, URL } = vacancy;

  const { day, mounth } = date;

  const myBtnInHeader = [status, 'update', 'delete'];

  const myBtnInCard = prepareVacancy(vacancy);

  const handleIconKey = name => {
    handleEventKey(null);
    if (name !== iconKey) {
      setIconKey(name);
      return;
    }

    setIconKey(null);
  };

  const handleKey = () => {
    setIconKey(null);
    handleEventKey(id);
  };
  return (
    <ListGroup.Item className={styles.item}>
      <Card>
        <Card.Header className={`${styles.cardHeader} ${styles[status]}`}>
          <BtnControl
            myBtn={['favorite']}
            id={id}
            handleIconKey={handleIconKey}
          />
          <button onClick={handleKey} className={styles.mainButton}>
            <div className={styles.dateWrap}>
              <div className={styles.day}>{day}</div>
              <div className={styles.mounth}>{mounth}</div>
            </div>
            <span className={styles.text}>{companyName}</span>
          </button>
          <div className={styles.btnControlWrap}>
            <BtnControl
              myBtn={myBtnInHeader}
              id={id}
              handleIconKey={handleIconKey}
            />
          </div>
        </Card.Header>
        {eventKey === id && (
          <Card.Body className={styles.cardBody}>
            <BtnControl
              myBtn={myBtnInCard}
              id={id}
              handleIconKey={handleIconKey}
              URL={URL}
            />
          </Card.Body>
        )}

        {iconKey === status && (
          <Card.Body className={styles.cardBody}>
            <BtnControl
              myBtn={statuses}
              id={id}
              handleIconKey={handleIconKey}
            />
          </Card.Body>
        )}
        {iconKey === 'delete' && (
          <Card.Body className={styles.cardBody}>
            <BtnControl
              myBtn={['remove', 'cancel']}
              id={id}
              handleIconKey={handleIconKey}
            />
          </Card.Body>
        )}
      </Card>
    </ListGroup.Item>
  );
}
