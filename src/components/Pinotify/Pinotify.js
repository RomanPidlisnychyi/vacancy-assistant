import { useSelector } from 'react-redux';
import { getError } from '../../store/selectors/authSelectors';

export default function Pinotify() {
  const err = useSelector(getError);
  return <div>{err}</div>;
}
