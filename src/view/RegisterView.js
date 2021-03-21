import { LayoutView } from '../components/Layout';
import { SingUpForm } from '../components/Forms';

export default function RegisterView(props) {
  return (
    <LayoutView>
      <SingUpForm {...props} />
    </LayoutView>
  );
}
