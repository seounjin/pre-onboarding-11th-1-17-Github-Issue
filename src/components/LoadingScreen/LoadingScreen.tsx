import React from 'react';
import { useLoading } from '../../hooks/useLoading';
import { ShadeScreen } from '../ShadeScreen/ShadeScreen';
import Spinner from '../Spinner/Spinner';

const LoadingScreen = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && (
        <ShadeScreen>
          <Spinner />
        </ShadeScreen>
      )}
    </>
  );
};

export default LoadingScreen;
