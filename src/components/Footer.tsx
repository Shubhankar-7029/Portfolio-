import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  return <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">{profile.shortName}<span>.</span></span><span className="brand-name">{profile.name.toUpperCase()}</span></a><p>Designed & built with React · TypeScript · CSS</p><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13}/></a><span className="copyright">© {new Date().getFullYear()} {profile.name}</span></footer>;
}
