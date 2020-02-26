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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
}));

const PokeModal = (url) => {
  let mypoke = GetPokemon(url).then(
    () => {
      alert();
    }
  )
}


const Pokemon = ({ value, onIncrement, onDecrement, GETPK }) => {
  useEffect(() => {
    onIncrement();
  }, []);

  return (
    <Card>
      <CardContent>
        <Table>
          <TableBody>
            {
              value.getState()
                .pokemons.map(
                  (pk, index, array) => {
                      return (
                        <TableRow>
                          <TableCell 
                            key={index} 
                            onClick={() => {
                            PokeModal(array[index - 1].url);
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
