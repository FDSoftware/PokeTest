import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

/*

function rand() {
  return Math.round(Math.random() * 20) - 10;
}


function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
*/

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
  },
  Avatar: {
    width: 120,
    height: 120,
    border: '1px solid #000',

  }
}));

function IMGContainer (url){
  const classes = useStyles();
  if(url.url !== undefined){
    return <Avatar 
      className={classes.Avatar} 
      src={url.url.front_default}/>
      
  }
  return <Avatar 
  className={classes.Avatar} 
  src={"https://via.placeholder.com/120"}/>
}


export default function SimpleModal({store}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  //const [modalStyle] = React.useState(getModalStyle);
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
              justify="center"
              alignItems="center"
              direction="column">
          <Grid item  >
            <IMGContainer
              url={store.getState().pk.sprites}
              />
          </Grid>
          <Grid item>
            <h2 >{store.getState().pk.name}</h2>
          </Grid>

          <Grid item >
            Experiencia base: {store.getState().pk.base_experience} <br/>
            Altura (cm): {store.getState().pk.weight	}
          </Grid>
          <Grid item>
           
          </Grid>
          </Grid>
          
        </div>
      </Modal>
    </div>
  );
}


            /*
            map movimientos:
            {store.getState().pk.moves.map(
              (m) => {
                return <li>{m.name}</li>
            })
            }*/
