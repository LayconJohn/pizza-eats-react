import styled from 'styled-components';
import { useContext } from 'react';

import PedidosContext from '../contexts/PedidosContext';

export default function Botao( {todosPedidosSelecionados, setRevisarPedidos} ) {
    const listaPedidos = useContext(PedidosContext);

    function finalizarPedido() {
        if (todosPedidosSelecionados) {
            setRevisarPedidos(true)
        }
    }

    //render
    return (
        <BarraInferior>
            <Button todosPedidosSelecionados={todosPedidosSelecionados} onClick={finalizarPedido}>
                {todosPedidosSelecionados ? "Fazer Pedido" :  "Selecione os três itens para fechar o pedido"}
            </Button>
        </BarraInferior>
    )
}

const BarraInferior = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 92px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.div`
    background-color: ${props => props.todosPedidosSelecionados ? "#32B72F" : "#CBCBCB"} ;
    border-radius: 50px;
    width: 364px;
    height: 61px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    text-align: center;
    box-sizing: border-box;
    padding: 0px 30px;
    text-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.25);
    cursor: ${props => props.todosPedidosSelecionados ? "pointer" : "auto"};
    scale: 0.8;

    &:hover {
        scale: ${props => props.todosPedidosSelecionados ? "1" : "0.8"};
    }

    &:active {
        opacity: ${props => props.todosPedidosSelecionados ? "0.7" : "1"}; //
    }
`;