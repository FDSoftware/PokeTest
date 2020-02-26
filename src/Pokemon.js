/*eslint-disable no-unused-vars */
import React, { Component, PropTypes, useEffect } from 'react'
//PokeAPI
import GetPokemon from './saga/GetPokemon'

//ReactUI
import {
  Card, CardContent,
  Button, Chip, CardActions,
  List, Divider, ButtonGroup
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

// Tabla:

import {
  Table,TableBody,TableRow,TableCell
}from '@material-ui/core';

//Modal:

import {
  Modal
}from '@material-ui/core';

//MaterialUI iconos:

import BookIcon from '@material-ui/icons/Book';
//Modal:

let modal = false;
const ModalToggle = () => {
  modal = !modal;
}

//estilos:
const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    width: 400,
    padding: theme.spacing(2, 4, 3),
  }
}));

const PokeModal = (url) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  let mypoke = GetPokemon(url).then(
    (m) => {
      console.log(m.data.name);
      return(
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>);
     // alert();
    }
  )
  return (<div></div>);
}


const Pokemon = ({ value, onIncrement, onDecrement, GETPK }) => {
  useEffect(() => {
    onIncrement();
  }, []);

const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Table>
          <TableBody>
            {
              value.getState()
                .pokemons.map(
                  (pk, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell 
                            key={index} 
                            onClick={() => {
                            PokeModal(pk.url);
                          }}
                          >
                            {pk.name}
                          </TableCell>

                        </TableRow>
                      );
                    
                  })
            }
          </TableBody>
        </Table>
      </CardContent>
      <CardActions>
        <Button onClick={onDecrement}>Anterior</Button>
        <Chip
          avatar={<BookIcon />}
          label={value.getState().pag}
          color="primary"
        />
        <Button onClick={onIncrement} >Siguiente</Button>
      </CardActions>
    </Card>
  );
}
export default Pokemon
