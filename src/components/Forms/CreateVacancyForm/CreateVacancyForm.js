// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Form } from 'react-bootstrap';
// import { onCreateVacancy } from '../../../store/operations/vacancyOperations';
// import { getFilter } from '../../../store/selectors/filterSelectors';
// import { setFilter } from '../../../store/actions/filterActions';
// import { MyInput } from '../../Inputs';
// import { validator } from '../../../utils/validator';
// import styles from './CreateVacancyForm.module.css';

// let validatedInputs = {};

// export default function CreateVacancyForm() {
//   const dispatch = useDispatch();

//   const filter = useSelector(getFilter);

//   const [btnActive, setBtnActive] = useState(false);

//   const handleValidator = (name, isValid) => {
//     inputs = {
//       ...inputs,
//       [name]: isValid,
//     };

//     console.log('inputs', inputs);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//   };

//   return (
//     <Form className={styles.form} onSubmit={handleSubmit}>
//       <MyInput
//         type="text"
//         name="company"
//         value={filter}
//         handleValidator={handleValidator}
//         placeholder="Company name"
//       />
//       <MyInput
//         type="text"
//         name="url"
//         value={url}
//         handleValue={handleURL}
//         valid={urlValid}
//         placeholder="Vacancy URL"
//         message="http_s://example.com"
//       />
//       <MyInput
//         type="tel"
//         name="phone"
//         value={phone}
//         handleValue={handlePhone}
//         placeholder="Tel."
//       />
//       <MyInput
//         type="text"
//         name="position"
//         value={position}
//         handleValue={handlePosition}
//         placeholder="Vacancy position"
//       />
//       <MyInput
//         type="text"
//         name="stack"
//         value={stack}
//         handleValue={handleStack}
//         placeholder="Vacancy stack"
//       />
//       <MyInput
//         type="text"
//         name="location"
//         value={location}
//         handleValue={handleLocation}
//         placeholder="Job location"
//       />
//     </Form>
//   );
// }
