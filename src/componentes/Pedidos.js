import { useContext } from 'react';
import styled from 'styled-components';

import PedidosContext from '../contexts/PedidosContext';

function Pedido( {title, items} ) {
    return (
        <>
            <Titulo>{title}</Titulo>
            <ListaCards>
                {items.map( ( item, i ) => {
                    return <Card>
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
                return <Pedido title={pedido.title} items={pedido.items} />
            })}
        </>
    )
}

const Titulo = styled.h3`
    font-size: 26px;
    color: #333333;
    margin: 0;
`;

const ListaCards = styled.div`
    display: flex;
    overflow-x: scroll;
`;

const Card = styled.div`
    width: 172px;
    height: 216px;

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
    }

    h6 {
        font-size: 16px;
        color: #000000;
        font-weight: 400;
        margin: 0;
    }
`;