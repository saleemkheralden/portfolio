import './Projects.css';

function Project({title, description}) {
	return (
		<div className="project-card border border-gray-200 p-4">
			<h4 className='project-title'>{title}</h4>
			<p className='project-description'>
				{description}
			</p>
		</div>
	);
}





export default function Projects() {
	return (
		<section id='projects' className="mb-16">
			<h3 className='section-title mb-4'>Featured Projects</h3>
			
			<div className="projects-grid">

				<Project 
					title='AI-Powered Data Analytics Platform' 
					description='Developed a scalable data analytics
								 platform that uses machine learning algorithms 
								 to analyze large datasets and generate 
								 actionable insights.' />

				<Project 
					title='Real-time Data Processing Pipeline' 
					description='Designed and implemented a high-throughput 
								 data processing pipeline capable of handling 
								 millions of events per second.'
				/>

			</div>
		</section>
	);
}


