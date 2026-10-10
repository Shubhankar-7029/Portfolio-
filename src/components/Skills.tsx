import { Braces, Database, Layers3, Terminal } from 'lucide-react';
import { skillGroups } from '../data/skills';

export default function Skills() {
  const icons = [Braces, Terminal, Layers3, Database];
  return <section className="section-wrap section-block" id="skills">
    <div className="section-heading"><div><p className="eyebrow">02 / TOOLKIT</p><h2>Skills & <span>technologies.</span></h2></div><p className="section-heading-note">A snapshot of tools and topics connected to my learning and project work.</p></div>
    <div className="skills-grid">{skillGroups.map((group, i) => { const Icon = icons[i]; return <div className="skill-card" key={group.label}>
      <div className="skill-card-top"><span className="skill-number">0{i+1}</span><Icon/></div><h3>{group.label}</h3><div className="skill-list">{group.items.map(item=><span key={item}>{item}</span>)}</div>
    </div>; })}</div>
    <p className="note-text">Skills listed reflect technologies and topics associated with project work; proficiency can vary by technology.</p>
  </section>;
}
