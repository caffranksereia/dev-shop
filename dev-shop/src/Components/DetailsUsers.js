import React from 'react';


class DetailsUsers extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            detalhes: '',
            nome :'',
            nickname: '',
            detalhes:'',
        }

    }
    render(){
        return(
            <div>
                 <p> Nome:{this.props.nome}</p>
                 <p> Nick: {this.props.nickname}</p>
                 <p>localização: {this.props.localização}</p>
                 <p> Valor:{this.props.valor},00/por horas</p>
                <p>detalhes:{this.props.detalhes}</p>
            </div>
        );
    }

    

}

export default DetailsUsers;