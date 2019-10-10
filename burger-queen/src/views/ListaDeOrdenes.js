import React from 'react';
import TablaDeOrdenes from '../components/TablaDeOrdenes.js';
import '../styles/ListaDeOrdenes.css';
import { Link } from 'react-router-dom';
import next from '../img/next.png';


class ListaDeOrdenes extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            ordenes: [
                "Gula", 
                "Soberbia",
                "Banana Limbo"
            ] 
        }    

    }

    render (){
    //  console.log(this.state.ingredientes);
        return (
        <div className="Lista_cocina">
                <div id="titulo">
                        <h2>ORDENES</h2>
                </div>
                <div className="conteinerOrden"> 
                    <div className="comensal_1">
                        <TablaDeOrdenes nameOrden="Fabiola"/>
                  
                        <table className="Ordenes_Tabla">
                                <tbody>
                                    <tr>
                                    <td><strong>Cantidad</strong></td>
                                    <td><strong>Orden</strong></td>
                                    <td><strong>Tiempo</strong></td>
                                    </tr>

                                    <tr>
                                    <td>1 pz</td>
                                    <td>Gula,Soberbia</td>
                                    <td>7 min</td>
                                    </tr>

                                </tbody>
    
                        </table>  
                               
                      </div>      
                    <br/>

                       <div className="comensal_2">
                            <TablaDeOrdenes nameOrden="Sofia"/>
                  
                            <table className="Ordenes_Tabla">
                                    <tbody>
                                        <tr>
                                        <td><strong>Cantidad</strong></td>
                                        <td><strong>Orden</strong></td>
                                        <td><strong>Tiempo</strong></td>
                                        </tr>

                                    <tr>
                                    <td>1 pz</td>
                                    <td>Malicia,sin queso</td>
                                    <td>5 min</td>
                                    </tr> 

                                    </tbody>
        
                            </table>  
                               
                      </div>                 

                </div>           
                <div className="Boton-siguiente">
                    <Link className="boton" to="/Limpieza">
                            <img className="next" src={next} alt="Boton siguiente"/>
                    </Link>
                </div> 
        </div>      
    )
  }
};

export default ListaDeOrdenes