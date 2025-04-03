import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql } from 'gql.tada';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: { slug: string };
}

const query = graphql(`
  query getArticleBySlug($slug: String!) {
    newzArticle(filter: { slug: { eq: $slug } }) {
      title
      author
      publishingDate
      articlePicture {
        url
        alt
      }
      content
    }
  }
`);

export default async function Page({ params }: ArticlePageProps) {
  const { slug } = params;

  const { newzArticle } = await executeQuery(query, { variables: { slug } });

  if (!newzArticle) {
    notFound();
  }

  return (
    <article>
      <h1>{newzArticle.title}</h1>
      <h3>{`Written by: ${newzArticle.author} ${newzArticle.publishingDate}`}</h3>
      <img src={newzArticle.articlePicture.url} alt={newzArticle.articlePicture.alt} />
      <p>{newzArticle.content}</p>
      <Link href="/articles">{'< Back To Article List'}</Link>
    </article>
  );
}
