import { Code2, Globe, Smartphone, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';

export default function About() {
  return <section className="section-wrap section-block" id="about">
    <div className="section-heading"><div><p className="eyebrow">01 / ABOUT</p><h2>A little about <span>me.</span></h2></div><p className="section-heading-note">A practical mindset, a growing toolkit, and a focus on creating useful digital experiences.</p></div>
    <div className="about-grid">
      <div className="about-card about-main-card"><div className="card-icon"><Sparkles size={20}/></div><h3>Learning by building.</h3>
        <p>I'm a developer focused on frontend and software development. My project work spans a blockchain supply-chain DApp, React interfaces, a Python/Flask summarizer concept, and academic data analysis.</p>
        <p>I value readable code, clear user experiences, and steady improvement through hands-on practice.</p><div className="mini-tags"><span>Curiosity</span><span>Problem solving</span><span>Continuous learning</span></div>
      </div>
      <div className="about-card fact-card"><span className="fact-index">A / 01</span><Globe className="fact-icon"/><h3>Based in India</h3><p>{profile.location}</p></div>
      <div className="about-card fact-card"><span className="fact-index">A / 02</span><Smartphone className="fact-icon"/><h3>Responsive first</h3><p>Interfaces designed for different screen sizes.</p></div>
      <div className="about-card fact-card"><span className="fact-index">A / 03</span><Code2 className="fact-icon"/><h3>Hands-on projects</h3><p>Learning through implementation and iteration.</p></div>
    </div>
  </section>;
}
