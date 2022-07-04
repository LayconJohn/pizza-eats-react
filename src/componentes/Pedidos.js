import { useContext, useState } from 'react';
import styled from 'styled-components';

import PedidosContext from '../contexts/PedidosContext';

function Pedido( {title, items, listaPedidos, id, done, setTodosPedidosSelecionados} ) {
    //estado
    const [pizzaSelecionada, setPizzaSelecionado] = useState(false);
    const [bebidaSelecionada, setBebidaSelecionado] = useState(false);
    const [acompanhamentoSelecionado, setAcompanhamentoSelecionado] = useState(false);
    
    //logic
    function verificaSeEstaSelecionado(listaPedidos) {
        if (listaPedidos.every( (item) => item.done)) {
            setTodosPedidosSelecionados(true)
        }
    }

    function selecionarCard(item, done, listaPedidos) {
        if(id === "1") {
            if (item.selected) {
                item.selected = false;
                setPizzaSelecionado(false);
            } else {
                item.selected = true;
                setPizzaSelecionado(true);
            }
        } else if (id === "2") {
            if (item.selected) {
                item.selected = false;
                setBebidaSelecionado(false);
            } else {
                item.selected = true;
                setBebidaSelecionado(true);
            }
        } else if (id === "3") {
            if (item.selected) {
                item.selected = false;
                setAcompanhamentoSelecionado(false);
            } else {
                item.selected = true;
                setAcompanhamentoSelecionado(true);
            }
        }
        listaPedidos[id - 1].done = true;
        verificaSeEstaSelecionado(listaPedidos)
    }

    return (
        <>
            <Titulo>{title}</Titulo>
            <ListaCards>
                {items.map( ( item, i ) => {
                    return <Card key={i} selecionado={item.selected} onClick={() => {selecionarCard(item, done ,listaPedidos)}}>
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

export default function Pedidos( {setTodosPedidosSelecionados} ){
    const listaPedidos = useContext(PedidosContext);

    return (
        <>
            {listaPedidos.map(pedido => {
                return <Pedido title={pedido.title} items={pedido.items} listaPedidos={listaPedidos} id={pedido.id} done={pedido.done} setTodosPedidosSelecionados={setTodosPedidosSelecionados}/>
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
    scale: 0.9;
    transition: all ease 0.5s;
    cursor: pointer;

    &:hover{
        scale: 1;
    }

    &:active {
        transform: translateY(3px);
        opacity: 0.8;
    }

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