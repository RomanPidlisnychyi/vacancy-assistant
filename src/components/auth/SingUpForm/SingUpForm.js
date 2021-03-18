// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from '../../redux/auth';
// import { Form } from 'react-bootstrap';
// import Loader from 'react-loader-spinner';
// import Styles from './styles';

// export default function SingUpForm() {
//     const dispatch = useDispatch();

//     const isLoading = useSelector(authSelectors.getIsLoading);

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const nameValid = name !== '';

//     const emailValid = email !== '' && email.includes('@');

//     const passwordValid = password !== '' && password.length > 7;

//     const confirmPasswordValid =
//         password === confirmPassword && confirmPassword !== '';

//     const btnActive =
//         nameValid && emailValid && passwordValid && confirmPasswordValid;

//     const handleSubmit = e => {
//         e.preventDefault();

//         dispatch(authOperations.register({ name, email, password }));
//     };

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Styles.FormGroup controlId="formBasicEmail">
//                 <Styles.EmailLabel />
//                 <Styles.EmailInput
//                     isValid={emailValid}
//                     type="email"
//                     placeholder="email@example.com"
//                     onChange={e => setEmail(e.target.value)}
//                     value={email}
//                 />
//                 {!emailValid && email !== '' && (
//                     <Styles.Span>Incorrect email!</Styles.Span>
//                 )}
//             </Styles.FormGroup>
//             <Styles.FormGroup controlId="formBasicPassword">
//                 <Styles.PasswordLabel />
//                 <Styles.PasswordInput
//                     isValid={passwordValid}
//                     type="password"
//                     placeholder="Password"
//                     onChange={e => setPassword(e.target.value)}
//                     value={password}
//                 />
//                 {!passwordValid && password !== '' && (
//                     <Styles.Span>
//                         the password must be at least 8 characters long!
//                     </Styles.Span>
//                 )}
//             </Styles.FormGroup>
//             <Styles.FormGroup controlId="formBasicConfirmPassword">
//                 <Styles.PasswordLabel />
//                 <Styles.PasswordInput
//                     isValid={confirmPasswordValid}
//                     type="password"
//                     placeholder="Confirm password"
//                     onChange={e => setConfirmPassword(e.target.value)}
//                     value={confirmPassword}
//                 />
//                 {!confirmPasswordValid && confirmPassword && (
//                     <Styles.Span>Passwords do not match!</Styles.Span>
//                 )}
//             </Styles.FormGroup>
//             <Styles.FormGroup controlId="formBasicName">
//                 <Styles.UserLabel />
//                 <Styles.EmailInput
//                     isValid={nameValid}
//                     type="text"
//                     placeholder="User name"
//                     onChange={e => setName(e.target.value)}
//                     value={name}
//                 />
//             </Styles.FormGroup>
//             <Styles.MyButton
//                 variant="outline-primary"
//                 type="submit"
//                 disabled={!btnActive}
//             >
//                 {!isLoading ? (
//                     'SingUp'
//                 ) : (
//                     <Loader color="#007bff" height={22} width={50} />
//                 )}
//             </Styles.MyButton>
//             <Styles.MyLink to="/login">SingIn</Styles.MyLink>
//         </Form>
//     );
// }
