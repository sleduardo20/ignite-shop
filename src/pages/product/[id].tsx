import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product';

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta 01</h1>
        <span>R$ 79.90</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
          dolorem corporis tempore placeat atque laudantium. Animi, eos fugit
          accusantium tempora maiores iste, veritatis quo inventore sequi modi
          ducimus, numquam aliquam?
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
