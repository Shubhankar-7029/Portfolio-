import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const filters = ['All', 'Web Development', 'AI / Python', 'Data Analysis'] as const;
type Filter = typeof filters[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = projects.filter(project => filter === 'All' || project.category === filter);
  return <section className="section-wrap section-block projects-section" id="projects">
    <div className="section-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Projects with <span>purpose.</span></h2></div><p className="section-heading-note">Project work and academic explorations. Details avoid implying unverified deployment or completion.</p></div>
    <div className="filter-row" role="group" aria-label="Filter projects">{filters.map(item=><button key={item} className={filter===item?'filter-button active':'filter-button'} onClick={()=>setFilter(item)}>{item}</button>)}</div>
    <div className="projects-grid">{visible.map(project=>{const Icon=project.icon;return <article className={`project-card ${project.accent}`} key={project.number}>
      <div className="project-topline"><span className="project-number">{project.number} / PROJECT</span><span className="project-status">{project.status}</span></div>
      <div className="project-art"><div className="project-art-grid"/><div className="project-art-icon"><Icon size={35} strokeWidth={1.5}/></div><span className="art-orbit"/></div>
      <p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
      <div className="project-stack">{project.stack.map(item=><span key={item}>{item}</span>)}</div>
      <div className="project-bottom"><span>PROJECT OVERVIEW</span>{project.link ? <a className="project-arrow" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={18}/></a> : <span className="project-arrow"><ArrowUpRight size={18}/></span>}</div>
    </article>;})}</div>
    <a className="github-banner" href="https://github.com/Shubhankar-7029" target="_blank" rel="noreferrer"><div className="github-banner-icon"><strong>GH</strong></div><div><strong>Explore my GitHub</strong><p>View repositories and follow my learning journey.</p></div><ArrowUpRight className="github-banner-arrow" size={20}/></a>
  </section>;
}
