import { ImageContainer, SuccessContainer } from '@/styles/pages/success';
import Link from 'next/link';

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer></ImageContainer>
      <p>Uhhuu, Eduardo sua camiseta ja esta a caminho de seu endereço !!!</p>
      <Link href="/">Voltar ao catálago</Link>
    </SuccessContainer>
  );
}
