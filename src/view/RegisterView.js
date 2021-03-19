import { LayoutView } from '../components/Layout';
import { SingUpForm } from '../components/auth';

export default function RegisterView(props) {
  return (
    <LayoutView>
      <SingUpForm {...props} />
    </LayoutView>
  );
}
