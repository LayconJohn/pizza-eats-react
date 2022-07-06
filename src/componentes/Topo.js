import styled from 'styled-components';

export default function Topo() {
    return (
        <Header>
            <Titulo>
                PizzaEats
            </Titulo>
            <Legenda>
                Escolha seu combo expresso!
            </Legenda>
        </Header>
    )
}

const Header = styled.header`
    z-index: 1;
    background-color: #CF2B2B;
    min-width: 414px;
    width: 100%;
    height: 100px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Texto = styled.div`
    text-align: center;
    padding: 0px 0px 40px 0px;
`;

const Titulo = styled.h1`
    font-size: 44px;
    color: #FFFFFF;
    font-weight: bold;
    margin: 0 auto;
`;

const Legenda = styled.p`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 400;
    margin: 0 auto;
`;