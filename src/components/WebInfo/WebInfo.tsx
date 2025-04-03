import Link from 'next/link';
import '../../app/styles/Components/WebInfo.scss';

export default function WebInfo() {
  return (
    <>
      <h3>Newz Inc.</h3>
      <div>
        <p>Made by: </p>
        <Link href="https://github.com/Jon-Emil">Jon-Emil</Link>
      </div>
      <div>
        <p>For this class: </p>
        <Link href="https://github.com/vefforritun/vef2-2025">HÍ - Vefforritun 2</Link>
      </div>
      <p>© Newz Inc. No rights reserved</p>
    </>
  );
}
