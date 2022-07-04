import styled from 'styled-components';
import React, { useContext, useState } from 'react';

import Topo from './componentes/Topo';
import Pedidos from './componentes/Pedidos';
import Botao from './componentes/Botao';

import PedidosContext from './contexts/PedidosContext';

const pedidos = [
  {
    id: "1",
    title: "Primeiro, sua Pizza",
    items: [
      {
        image: "https://blog.novasafra.com.br/wp-content/uploads/2016/01/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024-780x450.jpg",
        name: "Calabresa",
        description: "Queijo e calabresa",
        price: "R$ 15,00",
        selected: false,

      },
      {
        image: "https://img.cybercook.com.br/receitas/550/pizza-pan-4-queijos-2-840x480.png?q=75",
        name: "Quatro queijos",
        description: "Queijos gorgonzola, parmesão, provolone e mussarela",
        price: "R$ 14,00",
        selected: false
      },
      {
        image: "https://coolicias.ao/wp-content/uploads/2019/10/Pizza-deliciosa-Portuguesa-muito-F%C3%A1cil.jpg",
        name: "Portuguesa",
        description: "Queijo, presunto, tomate, cebola e ovos",
        price: "R$ 18,00",
        selected: false,
      },
      {
        image: "https://www.paollarestaurante.com.br/tim.php?src=uploads/images/2019/08/pizza-frango-com-catupiry-1565140749.jpg&w=800&q=100",
        name: "Frango com Captury",
        description: "Frango, catupiry ou muçarela e azeitonas.",
        price: "R$ 18,00",
        selected: false,
      },
      {
        image: "https://a-static.mlcdn.com.br/280x210/pizza-frango-cheddar-saborosa-e-caprichada/restauranteepizzariasensacao/0a4f877abe6c11eb870e4201ac18500e/bf58138f7fd2626776fad24b36e927c8.jpg",
        name: "Frango Bacon com Cheddar",
        description: "Frango, mussarela, bacon e Cheddar",
        price: "R$ 20,00",
        selected: false,
      },
      {
        image: "https://descomplicandoacozinha.com.br/wp-content/uploads/2019/01/receitas-de-pizza-de-chocolate-4.jpg",
        name: "Brigadeiro",
        description: "Chocolate, granulado e morango",
        price: "R$ 22,00",
        selected: false,
      },
      {
        image: "https://media.gazetadopovo.com.br/vozes/2016/03/pizza-carne-seca_-650x434-d1b30d64.jpg",
        name: "Carne Seca",
        description: "Carne seca desfiada, tomate, cebola e mussarela",
        price: "R$ 20,00",
        selected: false,
      },
    ],
    done: false
  },
  {
    id: "2",
    title: "Agora, sua bebida",
    items: [
      {
        image: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/1984-refrigerante-coca-cola-lata-350ml.1637179454.jpg",
        name: "Coca Cola",
        description: "Latinha 350ml",
        price: "R$ 2,80",
        selected: false,
      },
      {
        image: "https://images-submarino.b2w.io/produtos/104907598/imagens/refrigerante-guarana-antarctica-lata-350-ml/104907601_1_xlarge.jpg",
        name: "Guaraná Antártica",
        description: "Latinha 350ml",
        price: "R$ 3,00",
        selected: false,
      },
      {
        image: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/1990-refrigerante-fanta-laranja-lata-220ml.1604498554.jpg",
        name: "Fanta Laranja",
        description: "Latinha 350 ml",
        price: "R$ 2,50",
        selected: false,
      },
      {
        image: "https://m.media-amazon.com/images/I/617y4cVEKnL._AC_SX679_.jpg",
        name: "Bhrama duplo malte",
        description: "Latinha 350ml",
        price: "R$ 3,00",
        selected: false,
      },
      {
        image: "https://s3-sa-east-1.amazonaws.com/rocky-2c5b937991b0cfc379dbf5f675740298/9bcba51297286b35f81d73c07fed1106.jpg",
        name: "Bohemia puro malte",
        description: "Latinha 350ml",
        price: "R$ 2,60",
        selected: false,
      },
      {
        image: "https://a-static.mlcdn.com.br/800x560/c-skol-puro-malte-lata-350ml/imigrantesbebidas/88628/26d406d496ff42d623894a18762d2511.jpeg",
        name: "Skol puro malte",
        description: "Latinha 350ml",
        price: "R$ 3,30",
        selected: false,
      },
      {
        image: "https://supernossoio.vtexassets.com/arquivos/ids/190009-1600-auto?v=637776889959030000&width=1600&height=auto&aspect=true",
        name: "Stella Artois",
        description: "Long neck 600 ml",
        price: "R$ 9,00",
        selected: false,
      }
    ],
    done: false
  },
  {
    id: "3",
    title: "Por fim, seu acompanhamento",
    items: [
      {
        image: "https://m.media-amazon.com/images/I/51p+z6SPbmL._AC_SX679_.jpg",
        name: "Bis",
        description: "Chocolate Bis ao leite 126g",
        price: "R$ 5,00",
        selected: false,
      },
      {
        image: "https://images.multipedidos.com.br/highlightImages/642961893351666e6f03c210644b23adfc58ad620abb10ef54bb3eeabf48a999/lg_642961893351666e6f03c210644b23adfc58ad620abb10ef54bb3eeabf48a999.jpg",
        name: "Açaí",
        description: "Açaí, leite condensado, morango, banana e granulado",
        price: "R$ 10,00",
        selected: false, 
      },
      {
        image: "https://images-food.ifcshop.com.br/produto/4743_0_20200728150713.jpg",
        name: "Sorvete Napolitano",
        description: "Sorvete Kibon Pote Cremosíssimo Napolitano 1,5L",
        price: "R$ 16,00",
        selected: false, 
      },
      {
        image: "https://images.tcdn.com.br/img/img_prod/746520/bombom_especialidades_nestle_251g_5799770_1_a40d1040ee668742ab47916d4eb8d305.jpg",
        name: "Caixa Bombom",
        description: "16 unidades da Nestlé",
        price: "R$ 13,70",
        selected: false, 
      },
      {
        image: "https://img.elo7.com.br/product/main/2D2A6BF/bolo-kit-kat-naked-cake-brigadeiro.jpg",
        name: "Bolo Kit Kat",
        description: "Uma fatia de Bolo Kit Kar com morango",
        price: "R$ 20,00",
        selected: false, 
      },
      {
        image: "https://img.elo7.com.br/product/main/2D2A6BF/bolo-kit-kat-naked-cake-brigadeiro.jpg",
        name: "Bolo Kit Kat",
        description: "Uma fatia de Bolo Kit Kar com morango",
        price: "R$ 20,00",
        selected: false, 
      },
      {
        image: "https://img.elo7.com.br/product/main/2D2A6BF/bolo-kit-kat-naked-cake-brigadeiro.jpg",
        name: "Bolo Kit Kat",
        description: "Uma fatia de Bolo Kit Kar com morango",
        price: "R$ 20,00",
         
      },
    ],
    done: false
  }
]

function App() {
  const [todosPedidosSelecionados, setTodosPedidosSelecionados] = useState(false);

  //render
  return (
    <PedidosContext.Provider value={pedidos}>
      <Tela>
        <Topo />
        <ListaPedidos>
          <Pedidos setTodosPedidosSelecionados={setTodosPedidosSelecionados}/>
        </ListaPedidos>
        <Botao todosPedidosSelecionados={todosPedidosSelecionados}/>
      </Tela>
    </PedidosContext.Provider>

  );
}

const Tela = styled.div`
  padding-top: 110px;
  padding-bottom: 100px;
  padding-left: 20px;
  background-color:  #E5E5E5;
`;

const ListaPedidos = styled.div`

`;

export default App;
