import { LayoutView } from '../components/Layout';
import { UserMenu } from '../components/UserMenu';

export default function HomeView() {
  return (
    <LayoutView>
      <UserMenu />
      <h1>Hello from Home</h1>
    </LayoutView>
  );
}
