import React from 'react';
import Textips from '../components/textTips';


class Tips  extends React.Component {
    render (){
        return <div>
            <Textips texto = 'Saluda a tu cliente'/>
            <Textips texto = 'Pregunta qué necesita'/>
            <Textips texto = 'Ofrece menú y bebida'/>
      </div>
    }

}
export default Tips