import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const Loader: React.FC = () => (
  <div className="absolute top-0 h-full w-full flex justify-center items-center bg-black bg-opacity-50 flex-col">
    <CircularProgress />
    <Typography variant="button" color="inherit" className="pt-4">
      Loading...
    </Typography>
  </div>
);

export default Loader;
