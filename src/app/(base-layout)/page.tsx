import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql } from 'gql.tada';
import { revalidateTag } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Home',
};

const query = graphql(`
  query getFrontPage {
    frontpage {
      title
      image {
        url
        alt
      }
      text
    }
  }
`);

export default async function Page() {
  revalidateTag('datocms');

  const { frontpage } = await executeQuery(query);

  if (!frontpage) {
    notFound();
  }

  return (
    <>
      <h1>{frontpage.title}</h1>
      <img src={frontpage.image.url} alt={frontpage.image.alt} />
      <p>{frontpage.text}</p>
      <Link href="/articles">See all of our articles</Link>
    </>
  );
}
