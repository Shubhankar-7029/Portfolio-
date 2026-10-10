import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/profile';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return (
    <header className="topbar">
      <a className="brand" href="#home" onClick={close}>
        <span className="brand-mark">{profile.shortName}<span>.</span></span>
        <span className="brand-name">{profile.name.toUpperCase()}</span>
      </a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        { [['About','#about'],['Skills','#skills'],['Projects','#projects'],['Contact','#contact']].map(([label, href]) =>
          <a key={href} href={href} onClick={close}>{label}</a>
        )}
        <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer" onClick={close}>GitHub <ArrowUpRight size={15}/></a>
      </nav>
    </header>
  );
}
