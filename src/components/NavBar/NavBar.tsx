import Link from 'next/link';
import '../../app/styles/Components/NavBar.scss';

export default function NavBar() {
  return (
    <>
      <h1>Newz Inc.</h1>
      <nav>
        <Link href="/">Front Page</Link>
        <Link href="/articles">All Articles</Link>
      </nav>
    </>
  );
}
