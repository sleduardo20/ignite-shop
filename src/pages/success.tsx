import Link from 'next/link';
import { stripe } from '@/lib/stripe';
import { ImageContainer, SuccessContainer } from '@/styles/pages/success';
import { GetServerSideProps } from 'next';
import Stripe from 'stripe';
import Image from 'next/image';
import Head from 'next/head';

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageURL: string;
  };
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>
        <ImageContainer>
          <Image
            src={product.imageURL}
            alt={product.name}
            width={520}
            height={200}
          />
        </ImageContainer>
        <p>
          Uhhuu,
          <strong>{customerName}</strong> sua
          <strong> {product.name} </strong>
          ja esta a caminho de seu endereço !!!
        </p>
        <Link href="/">Voltar ao catálago</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageURL: product.images[0],
      },
    },
  };
};
