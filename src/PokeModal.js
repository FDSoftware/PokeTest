import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

//Componentes custom:
import IMGContainer from './components/IMGContainer'
import MOVContainer from './components/MOVContainer'
import TypeContainer from './components/TypeContainer'
//CSS:
import './poke.css'

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
  paper: {
    position: 'center',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

export default function SimpleModal({store}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

 store.subscribe(()=>{
   if(open !== store.getState().modal){
    setOpen((store.getState().modal));
   }
  
 });
  const handleClose = () => {
    setOpen(false);
    store.dispatch({type:'PKMODAL'});
  };
  
  return (
      
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        className={classes.modal}
      >
        <div className={classes.paper}>
        <Grid container 
              spacing={2}
              direction="column"
              justify="center"
              alignItems="center"
              >
                 <Grid container
                  alignItems="center"
                 >
            <h2  className="TPokemon" >{store.getState().pk.name}:</h2>
          </Grid>
          <Grid item  >
            <IMGContainer
              url={store.getState().pk.sprites}
              />
          </Grid>
         

          <Grid item >
            Experiencia base: {store.getState().pk.base_experience} <br/>
            Altura (cm): {store.getState().pk.weight	}
          </Grid>
          <Grid container
          spacing={2}
        direction="row"
        justify="space-around"
        >
            <MOVContainer
              moves = {store.getState().pk.moves	}
            />
            <TypeContainer
              types = {store.getState().pk.types}
            />
          </Grid>
          </Grid>
          
        </div>
      </Modal>
    </div>
  );
}