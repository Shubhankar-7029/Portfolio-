import { ArrowUpRight, Mail, Phone, Send } from 'lucide-react';
import { profile } from '../data/profile';


export default function Contact() {
  return <section className="contact-section" id="contact"><div className="section-wrap contact-inner">
    <div className="contact-copy"><p className="eyebrow">04 / CONTACT</p><h2>Have a project<br/>in <span>mind?</span></h2><p>I'm open to discussing software development opportunities, project ideas, and ways to collaborate.</p><a className="button button-primary" href={`mailto:${profile.email}?subject=Software%20Development%20Opportunity`}>Get in touch <Send size={16}/></a></div>
    <div className="contact-card"><span className="contact-card-label">CONTACT DETAILS</span>
      <a className="contact-item" href={`mailto:${profile.email}`}><span className="contact-item-icon"><Mail size={18}/></span><span><small>EMAIL</small><strong>{profile.email}</strong></span><ArrowUpRight size={17}/></a>
      {profile.phoneDisplay && profile.phoneLink && <a className="contact-item" href={`tel:${profile.phoneLink}`}><span className="contact-item-icon"><Phone size={18}/></span><span><small>PHONE</small><strong>{profile.phoneDisplay}</strong></span><ArrowUpRight size={17}/></a>}
      <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-item-icon"><strong>in</strong></span><span><small>LINKEDIN</small><strong>Connect professionally</strong></span><ArrowUpRight size={17}/></a>
      <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-item-icon"><strong>GH</strong></span><span><small>GITHUB</small><strong>Explore repositories</strong></span><ArrowUpRight size={17}/></a>
      <div className="contact-footnote"><span className="pulse-dot"/> Available for conversations</div>
    </div>
  </div></section>;
}
