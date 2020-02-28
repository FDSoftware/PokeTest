/*eslint-disable no-unused-vars */
import React, { Component, PropTypes, useEffect } from 'react'

//ReactUI
import {
  Card, CardContent,
  Button, Chip, CardActions,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

// Tabla:
import {
  Table, TableBody, TableRow, TableCell
} from '@material-ui/core';

//MaterialUI iconos:

import BookIcon from '@material-ui/icons/Book';
//Modal:
import PokeModal from './PokeModal'
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
    padding: theme.spacing(2, 4, 3),
    marginTop: '20px'
  }
}));


const handleModal = (pk) => {
  console.log(pk);
}

const Pokemon = ({ value, onIncrement, onDecrement, GETPK }) => {

  useEffect(() => {
    value.dispatch({ type: 'MOREPOKE'});
    value.dispatch({ type: 'LOAD'});
  }, []);

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Table>
          <TableBody>
            {value.getState().pokemons.map(
              (pk, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell
                      key={index}
                        className={classes.buttons}
                        onClick={
                          () => {
                            if(!value.getState().isLoading){
                              value.dispatch({ type: 'LOAD'});
                              value.dispatch({type: 'PKURL', url:pk.url});
                              value.dispatch({ type: 'MODALPK2'});
                              value.dispatch({ type: 'LOAD'});
                            }
                          }
                        }
                    >
                <Button disabled={value.getState().isLoading}>{pk.name}</Button>

                    </TableCell>

                  </TableRow>
                );

              })
            }
          </TableBody>
        </Table>
        {/* Modal: */}
        <PokeModal store={value}></PokeModal>
      </CardContent>

            {/* Botones de la card: */}
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
