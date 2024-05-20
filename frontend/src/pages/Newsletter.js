import NewsletterSignup from '../components/NewsletterSignup';
import PageContent from '../components/PageContent';

export function Newsletter() {
  return (
    <div className='bg-black/20 p-10 flex justify-center'>
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}