import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import SEO from '../components/ui/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The page you are looking for does not exist or has moved. Return to Unique Digital Tech home."
      />
      <PageHero title="Page not found" text="The page you are looking for does not exist or has moved.">
        <Button to="/">Back to home</Button>
      </PageHero>
    </>
  );
}
