import styled from 'styled-components';

export default function TelaPedido( { soma, itemsSelecionados, revisarPedidos, setRevisarPedidos } ) {

    function finalizarPedido() {
        //inserir parte de finalizar pedido
    }

    function cancelarPedido() {
        setRevisarPedidos(false);
    }

    //render
    return (
        <FundoTela onClick={cancelarPedido} >
            <TelaPedidoFinal>
                <TituloFinal>Confirme seu pedido</TituloFinal>
                <PedidoDetalhe>
                    <PedidoDetalhesTexto>1. {itemsSelecionados[0][0]}</PedidoDetalhesTexto>
                    <PedidoDetalhesTexto>{itemsSelecionados[0][1]}</PedidoDetalhesTexto>
                </PedidoDetalhe>
                <PedidoDetalhe>
                    <PedidoDetalhesTexto>2. {itemsSelecionados[1][0]}</PedidoDetalhesTexto>
                    <PedidoDetalhesTexto>{itemsSelecionados[1][1]}</PedidoDetalhesTexto>
                </PedidoDetalhe>
                <PedidoDetalhe>
                    <PedidoDetalhesTexto>3. {itemsSelecionados[2][0]}</PedidoDetalhesTexto>
                    <PedidoDetalhesTexto>{itemsSelecionados[2][1]}</PedidoDetalhesTexto>
                </PedidoDetalhe>
                <PedidoDetalhe>
                    <p>Total</p>
                    <p>R$ {soma}</p>
                </PedidoDetalhe>
                <ButaoFinalizarPedido onClick={finalizarPedido}>Tudo certo, pode pedir</ButaoFinalizarPedido>
                <CancelarPedido onClick={cancelarPedido}>Cancelar</CancelarPedido>
            </TelaPedidoFinal>
        </FundoTela>
    )
}

const FundoTela = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    padding-top: 92px;
    padding-bottom: 92px;
    z-index: 2;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TelaPedidoFinal = styled.div`
    width: 50%;
    height: 353px;
    border-radius: 9px;
    background-color: #50D074;
    position: absolute;
    padding: 24px;
    top: 336px;
    z-index: 3;
    box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    object-fit: cover;  

`;

const TituloFinal = styled.h3`
    display: flex;
    justify-content: center;
    color: #FFFFFF;
`;

const PedidoDetalhe = styled.div`
    display: flex;
    justify-content: space-between;
    color: #FFFFFF; 
`;

const PedidoDetalhesTexto = styled.p`
    color: #FFFFFF;  
`;

const ButaoFinalizarPedido = styled.button`
    width: 329px;
    height: 52px;
    border-radius: 100px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #50D074;
    margin: 0 auto;
    cursor: pointer;
    scale: 0.9;

    &:hover {
        scale: 1;
    }
`;

const CancelarPedido = styled.p`
    display: flex;
    justify-content: center;
    font-weight: bold;
    color: #FFFFFF;
    cursor: pointer;
    scale: 0.8;

    &:hover {
        scale: 1;
    }
`;