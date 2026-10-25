import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <PageHero title="Page not found" text="The page you are looking for does not exist or has moved.">
      <Button to="/">Back to home</Button>
    </PageHero>
  );
}
