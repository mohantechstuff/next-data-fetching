// incremental static generation
import { YOUR_API_URL } from '../lib/api';

export default function IncrementalStaticRegeneration({ data }) {
  return (
    <>
      {data.map((e) => (
        //<h1 key={e.id}>{e.id}</h1>
          <img src={e.col1} width="200" height="125"/> 
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch(YOUR_API_URL);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60, // In seconds
  };
}
