// server side rendering
import { YOUR_API_URL } from '../lib/api';

export default function ServerSideRendered({ data }) {
  return (
    <>
      {data.map((e) => (
        //<h2 key={e.id}>{e.id}</h2>
          <img src={e.col1} width="200" height="125"/>
          <img src="https://as1.ftcdn.net/v2/jpg/03/63/34/70/1000_F_363347020_YzZc2x3LI8fTfVXvGVPTXTrkOAJ1MR4l.jpg" height="100"/>
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
