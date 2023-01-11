import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
// use useParams to get the actor's id
// make a new call using redux toolkit query -> get actor details call
// research tmdb api docs ...
// use newly created useActorHook to get actor's info to the component

const Actors = () => {
  const { id } = useParams();
  return (
    <div>Actors-{id}</div>
  );
};

export default Actors;
