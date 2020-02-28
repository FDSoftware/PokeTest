import React from 'react';
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

//Container para mostrar los movimientos del pokemon

export const MOVContainer = ({ moves }) => {
    return (
        <Grid item>
           <Typography fontSize="h3">Movimientos:</Typography>
           <List dense={true}>
            {moves.slice(0,5).map(
                (m, index) => {
                    return <ListItem key={index} divider={true}>
                                <ListItemText
                                    primary={m.move.name}
                                > </ListItemText>
                            </ListItem>
                }
            )}
            </List>
        </Grid>
    )
}

MOVContainer.defaultProps = {
    moves: [
        {
            move: {
                name: "body-slam",
                url: "https://pokeapi.co/api/v2/move/34/"
            }
        },
        {
            move: {
                name: "cut",
                url: "https://pokeapi.co/api/v2/move/15/"
            }
        }
    ]
}

export default MOVContainer;