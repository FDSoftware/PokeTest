import React, { useEffect } from "react";

// ReactUI
import { Card, CardContent, Button, Chip, CardActions } from "@material-ui/core";

// ReactUI Styles
import { makeStyles } from "@material-ui/core/styles";

// Tabla:
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";

// MaterialUI iconos:
import BookIcon from "@material-ui/icons/Book";

// Modal:
import PokeModal from "../PokeModal";

//estilos:
const useStyles = makeStyles(theme => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	root: {
		padding: theme.spacing(2, 4, 3),
		marginTop: "20px",
	},
}));

const Pokemon = ({ store, action }) => {
	useEffect(() => {
		action('MOREPOKE');
		action('LOAD');
	}, []);

	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardContent>
				<Table>
					<TableBody>
						{store.getState().pokemons.map((pk, index) => {
							return (
								<TableRow key={index}>
									<TableCell
										key={index}
										className={classes.buttons}
										onClick={() => {
											if (!store.getState().isLoading) {
												action('LOAD');
												action('PKURL', pk.url);
												action('MODALPK2');
												action('LOAD');
											}
										}}
									>
										<Button disabled={store.getState().isLoading}>{pk.name}</Button>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
				{/* Modal: */}
				<PokeModal store={store}></PokeModal>
			</CardContent>

			{/* Botones de la card: */}
			<CardActions>
				<Button onClick={() => action('MINUSPOKE') }>Anterior</Button>
				<Chip avatar={<BookIcon />} label={store.getState().pag} color="primary" />
				<Button onClick={() => action('MOREPOKE') }>Siguiente</Button>
			</CardActions>
		</Card>
	);
};
export default Pokemon;
