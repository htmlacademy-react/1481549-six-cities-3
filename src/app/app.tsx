import { RouterProvider } from 'react-router-dom';
import router from '../router/router';
import { Suspense } from 'react';

export default function App(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
