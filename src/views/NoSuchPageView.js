import { Redirect } from 'react-router-dom';

export default function NoSuchPageView() {
  return (
    <>
      <p>404 page does not exist</p>
      <Redirect to={'/'} />
    </>
  );
}
