import React, { useState } from 'react';
import {
  Card as MuiCard,
  CardHeader,
  CardContent,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import './Card.css'

const Card = ({ title, index }) => {

  const colors = [
    {
      primaryColor: '#5D93E1',
      secondaryColor: '#ECF3FC',
    },
    {
      primaryColor: '#F9D288',
      secondaryColor: '#FEFAF1',
    },
    {
      primaryColor: '#5DC250',
      secondaryColor: '#F2FAF1',
    },
    {
      primaryColor: '#F48687',
      secondaryColor: '#FDF1F1',
    },
    {
      primaryColor: '#B964F7',
      secondaryColor: '#F3F0FD',
    },
  ];


  const useStyles = makeStyles({
    cardTop: {
      backgroundColor: colors[index % 5].primaryColor,
    },
    cardHeader: {
      backgroundColor: colors[index % 5].secondaryColor,
      borderRadius: '10px',
    },
    editIcon: {
      color: colors[index % 5].primaryColor,
      cursor: 'pointer',
    },
    deleteIcon: {
      color: colors[index % 5].primaryColor,
      cursor: 'pointer',
    },
  });

  const classes = useStyles();

  return (
    <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" >{title}</span>
                
        </div>
        </div>
  );
};

export default Card;
