import { useContext } from 'react';
import styled from 'styled-components';

import PedidosContext from '../contexts/PedidosContext';

function Pedido( {title, items} ) {
    return (
        <>
            <Titulo>{title}</Titulo>
            <ListaCards>
                <Card>teste</Card>
            </ListaCards>
        </>
    )
}

export default function Pedidos( ){
    const listaPedidos = useContext(PedidosContext);

    return (
        <>
            {listaPedidos.map(pedido => {
                return <Pedido title={pedido.title}/>
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
    background-color: blue;
`;