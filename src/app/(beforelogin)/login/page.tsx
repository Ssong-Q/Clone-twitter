import Main from '../_components/Main';
import RedirectToLogin from './_component/RedirectToLogin';

export default async function Login() {
  return (
    <>
      <RedirectToLogin />
      <Main />
    </>
  );
}
