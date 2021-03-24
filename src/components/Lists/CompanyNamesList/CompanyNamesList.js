import { useState } from 'react';
import { getCompaniesNames } from '../../../utils/apiUtils';
import styles from './CompanyNamesList.module.css';

export default function CompanyNamesList() {
  const [companiesList, setCompaniesList] = useState(null);

  getCompaniesNames();
  return (
    companiesList &&
    companiesList.map(company => <li key={company}>{company}</li>)
  );
}
