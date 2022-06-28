import styled from 'styled-components';

import Topo from './componentes/Topo';
import Pedido from './componentes/Pedido';

const pedidos = [
  {
    title: "Primeiro, sua Pizza",
    items: [
      {
        image: "https://blog.novasafra.com.br/wp-content/uploads/2016/01/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024-780x450.jpg",
        name: "Calabresa",
        description: "Queijo e calabresa",
        price: "R$ 15,00"
      },
      {
        image: "https://img.cybercook.com.br/receitas/550/pizza-pan-4-queijos-2-840x480.png?q=75",
        name: "Quatro queijos",
        description: "Queijos gorgonzola, parmesão, provolone e mussarela",
        price: "R$ 14,00"
      },
      {
        image: "https://coolicias.ao/wp-content/uploads/2019/10/Pizza-deliciosa-Portuguesa-muito-F%C3%A1cil.jpg",
        name: "Portuguesa",
        description: "Queijo, presunto, tomate, cebola e ovos",
        price: "R$ 18,00"
      },
      {
        image: "https://www.paollarestaurante.com.br/tim.php?src=uploads/images/2019/08/pizza-frango-com-catupiry-1565140749.jpg&w=800&q=100",
        name: "Frango com Captury",
        description: "Frango, catupiry ou muçarela e azeitonas.",
        price: "R$ 18,00"
      },
      {
        image: "https://cdn.minestore.com.br/media/W1siZiIsInBpenphcmlhLWd1ZWRlcy9wcm9kdWN0cy84MjkxODAvaW1hZ2VzL2MxZmY3NjlmLTk5MzktNDc0Zi1hZTNkLTk4NGVlZjcwNTg4MyJdLFsicCIsInRodW1iIiwiODQweD4iXV0",
        name: "Frango Bacon com Cheddar",
        description: "Frango, mussarela, bacon e Cheddar",
        price: "R$ 20,00"
      },
      {
        image: "https://descomplicandoacozinha.com.br/wp-content/uploads/2019/01/receitas-de-pizza-de-chocolate-4.jpg",
        name: "Brigadeiro",
        description: "Chocolate, granulado e morango",
        price: "R$ 22,00"
      },
      {
        image: "https://media.gazetadopovo.com.br/vozes/2016/03/pizza-carne-seca_-650x434-d1b30d64.jpg",
        name: "Carne Seca",
        description: "Carne seca desfiada, tomate, cebola e mussarela",
        price: "R$ 20,00"
      },
    ]
  },
  {
    title: "Agora, sua bebida",
    items: [
      {
        image: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/1984-refrigerante-coca-cola-lata-350ml.1637179454.jpg",
        name: "Coca Cola",
        description: "Latinha 350ml",
        price: "R$ 2,80"
      },
      {
        image: "https://images-submarino.b2w.io/produtos/104907598/imagens/refrigerante-guarana-antarctica-lata-350-ml/104907601_1_xlarge.jpg",
        name: "Guaraná Antártica",
        description: "Latinha 350ml",
        price: "R$ 3,00"
      },
      {
        image: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/1990-refrigerante-fanta-laranja-lata-220ml.1604498554.jpg",
        name: "Fanta Laranja",
        description: "Latinha 350 ml",
        price: "R$ 2,50"
      },
      {
        image: "https://m.media-amazon.com/images/I/617y4cVEKnL._AC_SX679_.jpg",
        name: "Bhrama duplo malte",
        description: "Latinha 350ml",
        price: "R$ 3,00"
      },
      {
        image: "https://s3-sa-east-1.amazonaws.com/rocky-2c5b937991b0cfc379dbf5f675740298/9bcba51297286b35f81d73c07fed1106.jpg",
        name: "Bohemia puro malte",
        description: "Latinha 350ml",
        price: "R$ 2,60"
      },
      {
        image: "https://a-static.mlcdn.com.br/800x560/c-skol-puro-malte-lata-350ml/imigrantesbebidas/88628/26d406d496ff42d623894a18762d2511.jpeg",
        name: "Skol puro malte",
        description: "Latinha 350ml",
        price: "R$ 3,30"
      },
      {
        image: "https://supernossoio.vtexassets.com/arquivos/ids/190009-1600-auto?v=637776889959030000&width=1600&height=auto&aspect=true",
        name: "Stella Artois",
        description: "Long neck 600 ml",
        price: "R$ 9,00"
      },
      {
        image: "https://w1.ezcdn.com.br/superemkasa/fotos/grande/20102fg1/cerveja-corona-extra-long-neck-330ml.jpg",
        name: "Corona",
        description: "Long neck 330ml",
        price: "R$ 7,70"
      },
      {
        image: "https://m.media-amazon.com/images/I/51ZkExOwhcS._AC_SX679_.jpg",
        name: "Budwaiser",
        description: "Long neck 330ml",
        price: "R$ 7,00"
      },
      {
        image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2016/06/22/auto/800/7dd2cc96f5c8ee7c1658e8f88d362a5a.png?mod=v1_c863764535e9284ff34f366929dbf8ab",
        name: "Monster",
        description: "Latinha 473ml",
        price: "R$ 8,00"
      },
    ]
  },
  {
    title: "Por fim, seu acompanhamento",
    items: [
      {
        image: "https://m.media-amazon.com/images/I/51p+z6SPbmL._AC_SX679_.jpg",
        name: "Bis",
        description: "Chocolate Bis ao leite 126g",
        price: "R$ 5,00" 
      },
      {
        image: "https://images.multipedidos.com.br/highlightImages/642961893351666e6f03c210644b23adfc58ad620abb10ef54bb3eeabf48a999/lg_642961893351666e6f03c210644b23adfc58ad620abb10ef54bb3eeabf48a999.jpg",
        name: "Açaí",
        description: "Açaí, leite condensado, morango, banana e granulado",
        price: "R$ 10,00" 
      },
      {
        image: "https://images-food.ifcshop.com.br/produto/4743_0_20200728150713.jpg",
        name: "Sorvete Napolitano",
        description: "Sorvete Kibon Pote Cremosíssimo Napolitano 1,5L",
        price: "R$ 16,00" 
      },
      {
        image: "https://images.tcdn.com.br/img/img_prod/746520/bombom_especialidades_nestle_251g_5799770_1_a40d1040ee668742ab47916d4eb8d305.jpg",
        name: "Caixa Bombom",
        description: "16 unidades da Nestlé",
        price: "R$ 13,70" 
      },
      {
        image: "https://img.elo7.com.br/product/main/2D2A6BF/bolo-kit-kat-naked-cake-brigadeiro.jpg",
        name: "Bolo Kit Kat",
        description: "Uma fatia de Bolo Kit Kar com morango",
        price: "R$ 20,00" 
      },
    ]

  }
]

function App() {

  //render
  return (
    <Tela>
      <Topo />
      <Pedidos>
        <Pedido />
      </Pedidos>
    </Tela>
  );
}

const Tela = styled.div`

`;

const Pedidos = styled.div`

`;

export default App;
