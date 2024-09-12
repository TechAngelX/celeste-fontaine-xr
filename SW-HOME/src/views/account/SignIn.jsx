import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

// Lazy load the SignInForm component
const SignInForm = lazy(() => import('../../components/account/SignInForm'));

const SignInView = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  return (
      <div className="container my-3">
        <div className="row border">
          <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
            <Link to="/">
              <img
                  src="../../images/banner/Dell.webp"
                  alt="Dell"
                  className="img-fluid"
              />
            </Link>
            <Link to="/">
              <img
                  src="../../images/banner/Laptops.webp"
                  alt="Laptops"
                  className="img-fluid"
              />
            </Link>
          </div>
          <div className="col-md-6 p-3">
            <h4 className="text-center">Sign In</h4>
            {/* Suspense is used to handle the loading state for lazy-loaded components */}
            <Suspense fallback={<div>Loading...</div>}>
              <SignInForm onSubmit={onSubmit} />
            </Suspense>
          </div>
        </div>
      </div>
  );
};

export default SignInView;
