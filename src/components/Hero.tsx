import { ArrowDownRight, ArrowUpRight, Braces, CheckCircle2, Mail, Sparkles, Terminal } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/profile';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${profile.email}`; }
  }
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="availability"><span className="pulse-dot"/> OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES</div>
        <p className="eyebrow">HELLO, I'M</p>
        <h1>{profile.name.split(' ')[0]}<br/><span>{profile.name.split(' ').slice(1).join(' ')}.</span></h1>
        <h2>{profile.role}</h2>
        <p className="hero-description">{profile.intro}</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a><a className="button button-quiet" href="#contact">Let's connect <ArrowUpRight size={17}/></a></div>
        <div className="social-row">
          <a href={profile.github} target="_blank" rel="noreferrer"><span className="social-letter">GH</span> GitHub <ArrowUpRight size={12}/></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="social-letter">in</span> LinkedIn <ArrowUpRight size={12}/></a>
          <button onClick={copyEmail}><Mail size={17}/>{copied ? 'Email copied' : 'Email'} {copied ? <CheckCircle2 size={13}/> : <ArrowUpRight size={12}/>}</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
        <div className="code-window"><div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>developer.tsx</span><span className="window-lock">●</span></div>
          <div className="code-content"><div className="line-number">01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07</div>
            <pre><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}{ '\n' }  name: <span className="code-green">'{profile.name}'</span>,{ '\n' }  focus: <span className="code-green">'Web development'</span>,{ '\n' }  tools: [<span className="code-orange">'React'</span>,{ '\n' }    <span className="code-orange">'JavaScript'</span>, <span className="code-orange">'Python'</span>],{ '\n' }  mindset: <span className="code-green">'Keep learning'</span>{ '\n' }{' }'}</pre>
          </div><div className="code-footer"><span><span className="tiny-green"/> Ready to build</span><span>UTF-8 · JavaScript</span></div>
        </div>
        <div className="float-chip chip-react"><Braces size={16}/> React & JavaScript</div><div className="float-chip chip-python"><Terminal size={16}/> Python projects</div><div className="hero-stamp"><Sparkles size={15}/> CURIOUS BY DESIGN</div>
      </div>
      <a href="#about" className="scroll-hint"><span/> SCROLL TO EXPLORE</a>
    </section>
  );
}
