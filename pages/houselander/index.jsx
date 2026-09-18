import Head from 'next/head';
import HouseLanderClient from '../../components/HouseLanderClient';

export default function HouselanderPage() {
  return (
    <>
      <Head>
        <title>A Slower Kind of Luxury | Outer Banks Retreat</title>
        <meta
          name='description'
          content='A private Outer Banks retreat for unhurried coastal stays.'
        />
      </Head>

      <HouseLanderClient />
    </>
  );
}
