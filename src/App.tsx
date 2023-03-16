import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from 'ui/GlobalStyles';
import { router } from './router/router';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};
