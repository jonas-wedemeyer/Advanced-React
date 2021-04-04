import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">SickFits Logo</Link>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </header>
  );
}
