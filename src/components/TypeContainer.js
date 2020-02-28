import React from 'react';
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

//Container para mostrar los movimientos del pokemon
import AdjustIcon from '@material-ui/icons/Adjust';
export const TypeContainer = ({ types }) => {
    return (
        <Grid item>
            <Typography fontSize="h3">Tipo de pokemon:</Typography>
            <List dense={true}>
                    {types.slice(0, 5).map(
                        (m, index) => {
                            //return <li key={index}>{m.type.name}</li>
                            //console.log (m)
                            return <ListItem key={index} divider={true}>
                                <ListItemText
                                    primary={m.type.name}
                                > </ListItemText>
                            </ListItem>
                        }
                    )}
            </List>
        </Grid>
    )
}

TypeContainer.defaultProps = {
    types: [
        {
            slot: 2,
            type: {
                "name": "poison",
                "url": "https://pokeapi.co/api/v2/type/4/"
            }
        },
        {
            slot: 1,
            type: {
                name: "grass",
                url: "https://pokeapi.co/api/v2/type/12/"
            }
        }
    ]
}

export default TypeContainer;