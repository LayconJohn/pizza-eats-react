import { useContext, useState } from 'react';
import styled from 'styled-components';

import PedidosContext from '../contexts/PedidosContext';

function Pedido( {title, items, selected} ) {
    //estado
    const [selecionado, setSelecionado] = useState(false);
    
    //logic
    function selecionarCard(selected) {
        if(title === "Primeiro, sua Pizza") {
            console.log("pizza")
        } else if (title === "Agora, sua bebida") {
            console.log("bebida")
        } else if (title === "Por fim, seu acompanhamento") {
            console.log("Acompanhamento")
        }
    }

    return (
        <>
            <Titulo>{title}</Titulo>
            <ListaCards>
                {items.map( ( item, i ) => {
                    return <Card key={i} selecionado={selecionado} onClick={(selected) => selecionarCard(selected)}>
                            <img src={item.image} alt={item.name}/>
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                            <h6>{item.price}</h6>
                    </Card>
                })}
            </ListaCards>
        </>
    )
}

export default function Pedidos(){
    const listaPedidos = useContext(PedidosContext);

    return (
        <>
            {listaPedidos.map(pedido => {
                return <Pedido title={pedido.title} items={pedido.items} selected={pedido.selected} />
            })}
        </>
    )
}

const Titulo = styled.h3`
    font-size: 26px;
    color: #333333;
    margin: 0;
    margin-left: 15px;
`;

const ListaCards = styled.div`
    display: flex;
    overflow-x: hidden;
    background-color:  #E5E5E5;
`;

const Card = styled.div`
    width: 172px;
    height: 216px;
    border-radius: 9px;
    box-shadow: 4px 4px 10px -4px rgba(0, 0, 0, 0.25);
    margin: 4px 16px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border:  ${props => props.selecionado? "3px solid #32B72F" : "none"};

    img {
        width: 144px;
        height: 87px;
        border-radius: 4px;
        object-fit: cover;
        margin: 0;
    }

    h5 {
        font-size: 16px;
        color: #333333;
        font-weight: bold;
        margin: 0;
    }

    p {
        font-size: 15px;
        color: #A6A6A6;
        font-weight: 300;
        margin: 0;
        text-align: center;
    }

    h6 {
        font-size: 16px;
        color: #000000;
        font-weight: 400;
        margin: 0;
    }
`;