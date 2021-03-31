import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Card } from 'react-bootstrap';
// import { CSSTransition } from 'react-transition-group';
import { BtnControl } from './BtnControl';
import { CardBody } from './CardBody';
import { getStatuses } from '../../../../store/selectors/statusesSelectors';
import {
  onUpdateVacancy,
  onDeleteVacancy,
} from '../../../../store/operations/vacancyOperations';
import { prepareVacancy } from '../../../../utils/prepareVacancy';
import { transformDate } from '../../../../utils/transformDate';
import styles from './VacancyItem.module.css';

export default function VacancyItem({
  vacancy,
  eventKey,
  handleEventKey,
  handleModal,
}) {
  const dispatch = useDispatch();

  const statuses = useSelector(getStatuses);
  const [iconKey, setIconKey] = useState(null);
  const [clickY, setClickY] = useState(0);

  const date = transformDate(vacancy.date);

  const {
    _id: id,
    companyName,
    status,
    stack,
    phone,
    URL,
    favorite,
    task,
    position,
    location,
  } = vacancy;

  const { day, mounth } = date;

  const favoriteStatus = favorite ? 'favoriteActive' : 'favorite';

  const myBtnInHeader = [status, 'update', 'delete'];

  const myBtnInCard = prepareVacancy(vacancy);

  const scrollTo = () => {
    const newValue = clickY - 200;

    document.querySelector('.list-group').scrollTo({
      top: newValue,
      behavior: 'smooth',
    });
  };

  const handleIconKey = name => {
    handleEventKey(null);

    const isStatusName = statuses.find(status => status === name);

    if (isStatusName) {
      if (status !== name) {
        dispatch(onUpdateVacancy({ status: name }, id));
        setIconKey(null);
        return;
      }
    }

    if (name === 'favorite' || name === 'favoriteActive') {
      dispatch(onUpdateVacancy({ favorite: !favorite }, id));
      return;
    }

    if (name === 'remove') {
      dispatch(onDeleteVacancy(id));
      return;
    }

    if (name === 'update') {
      handleModal(id);
      return;
    }

    if (name !== iconKey) {
      setIconKey(name);
      return;
    }

    setIconKey(null);
  };

  const handleKey = e => {
    setClickY(e.clientY);
    setIconKey(null);
    handleEventKey(id);
  };
  return (
    // <CSSTransition
    //   in={iconKey === 'delete'}
    //   appear
    //   classNames={styles}
    //   timeout={250}
    // >
    <ListGroup.Item
      className={
        iconKey === 'delete' ? `${styles.item} ${styles.onTrash}` : styles.item
      }
    >
      {iconKey === 'delete' && (
        <div className={styles.trash}>
          <BtnControl
            myBtn={['remove']}
            id={id}
            handleIconKey={handleIconKey}
          />
        </div>
      )}
      <Card>
        <Card.Header className={styles.cardHeader}>
          <BtnControl
            myBtn={[favoriteStatus]}
            id={id}
            handleIconKey={handleIconKey}
          />
          <button
            onClick={handleKey}
            className={task ? styles.active : styles.mainButton}
          >
            <div className={styles.dateWrap}>
              <div className={styles.day}>{day}</div>
              <div className={styles.mounth}>{mounth}</div>
            </div>
            <span className={styles.text}>{companyName}</span>
            <span className={styles.position}>{position}</span>
            <span className={styles.location}>{location}</span>
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
          <CardBody scrollTo={scrollTo}>
            <BtnControl
              myBtn={myBtnInCard}
              id={id}
              handleIconKey={handleIconKey}
              URL={URL}
            />
          </CardBody>
        )}

        {iconKey === status && (
          <CardBody scrollTo={scrollTo}>
            <BtnControl
              myBtn={statuses}
              id={id}
              handleIconKey={handleIconKey}
            />
          </CardBody>
        )}
        {iconKey === 'stack' && (
          <CardBody scrollTo={scrollTo}>
            <button
              className={styles.btnStack}
              type="button"
              onClick={handleKey}
            >
              {stack}
            </button>
          </CardBody>
        )}
        {iconKey === 'phone' && (
          <CardBody scrollTo={scrollTo}>
            <button
              className={styles.btnStack}
              type="button"
              onClick={handleKey}
            >
              {phone}
            </button>
          </CardBody>
        )}
      </Card>
    </ListGroup.Item>
    // </CSSTransition>
  );
}
