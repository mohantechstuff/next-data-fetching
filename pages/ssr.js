// server side rendering
import { YOUR_API_URL } from '../lib/api';

export default function ServerSideRendered({ data }) {
  return (
    <>
      {data.map((e) => (
          //<h2 key={e.id}>{e.id}</h2>
          <img src={e.col1} width="200" height="125"/>          
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(YOUR_API_URL);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}
