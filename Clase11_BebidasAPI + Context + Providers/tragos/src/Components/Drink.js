import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));



  
const Drink = ({ children }) => {




    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setReceta({});
    };


    // A PARTIR DE ACÁ ES CÓDIGO MIO

    const {setId, receta, setFlagReceta, setReceta} = useContext(ModalContext);

    const {idDrink, strDrink, strDrinkThumb} = children;


    const handlerClick = () => {
        setId(idDrink);
        setFlagReceta(true);
        handleOpen();
    }

    console.log(children);


    const traerCantidades = () => {

        const items = [];

        for(let i = 1; i<=16; i++)
        {
            if (!receta[`strIngredient${i}`])
            {
                break;
            }
           
                items.push
                (
                
                <li key={idDrink+i}>
                {receta[`strIngredient${i}`]} 
                {receta[`strMeasure${i}`]}
                </li>
                
                );
            
        }

        return items;
      }



    return (  

        <div className="col-md-4 mb-3">

            <div className="card">

                <h2 className="card-header">{strDrink}</h2>

                <img src={strDrinkThumb} alt={strDrink} className="card-img-top"/>

                <div className="card-body">
                    <button className="btn btn-primary w-100" onClick={handlerClick}>Detalles</button>
             

                    <Modal
                     open={open}
                     onClose={handleClose}
                    >
                    
                    <div style={modalStyle} className={classes.paper}>

                            <h2>{receta.strDrink}</h2>

                            <p>{receta.strInstructions}</p>

                            <img src={receta.strDrinkThumb} alt={strDrink} className="img-fluid my-4"></img>

                            <ul>
                                {
                                    traerCantidades()
                                }
                            </ul>
                    </div>


                    </Modal>
             
                </div>


                

            </div>

        </div>

        


    );
}
 
export default Drink;