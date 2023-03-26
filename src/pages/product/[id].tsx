import { useRouter } from 'next/router';

export default function Product() {
  const { query } = useRouter();

  return (
    <>
      <h2>Product</h2>
    </>
  );
}
