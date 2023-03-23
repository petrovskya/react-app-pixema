import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { Colors } from 'ui';
import { SpinnerStyles } from './styles';

export const Spinner = () => {
  return (
    <div className='sweet-loading'>
      <MoonLoader
        cssOverride={SpinnerStyles}
        color={Colors.PRIMARY_LIGHT}
        size={60}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};
