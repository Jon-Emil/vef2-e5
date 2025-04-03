import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql } from 'gql.tada';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Home',
};

const query = graphql(`
  query getArticleListInfo {
    articleList {
      title
      explanationText
    }
    allNewzArticles {
      title
      slug
    }
  }
`);

export default async function Page() {
  const { articleList, allNewzArticles } = await executeQuery(query);

  if (!articleList) {
    notFound();
  }

  return (
    <>
      <h1>{articleList.title}</h1>
      <p>{articleList.explanationText}</p>
      <ul>
        {allNewzArticles.map((article, index) => (
          <li key={index}>
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">Back to front page</Link>
    </>
  );
}
