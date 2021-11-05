import React from 'react';
import {Link, Typography} from "@mui/material";

const Copyright = function Copyright(props) {
  return (
     <Typography variant="body2" color="text.secondary" align="center" {...props}>
       {'Copyright © '}
       <Link color="inherit" href="https://www.linkedin.com/in/dennysjmarquez/" target="_blank">
         Dennys J Marquez
       </Link>{' '}
       {new Date().getFullYear()}
       {'.'}
     </Typography>
  );
};

export default Copyright;
