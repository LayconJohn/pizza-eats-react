import styled from 'styled-components';

export default function Pedido(){
    return (
        <>
            <Titulo>Primeiro, seu prato</Titulo>
            <ListaCards>
                <Card>teste</Card>
            </ListaCards>

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