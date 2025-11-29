import "./Projects.css";

function Project({ title, description }) {
  return (
    <div className="project-card border border-gray-200 p-4">
      <h4 className="project-title">{title}</h4>
      <p className="project-description">{description}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h3 className="section-title mb-4">Featured Projects</h3>

      <div className="projects-grid">
        <Project
          title="Algorithmic Trading Forecasting Platform"
          description="Designed and implemented a robust Airflow ETL pipeline to ingest and process market data. Developed an advanced time series model to forecast stock prices and generated automated buy/sell signals."
        />

        <Project
          title="Deep Reinforcement Learning Agents (Lunar Lander)"
          description="Implemented a Lunar Lander agent using Artificial Neural Networks (ANN), Convolutional Neural Networks (CNN), and Asynchronous Advantage Actor-Critic (A3C) for complex control tasks."
        />

        <Project
          title="Home Server for MLOps and DL Modeling"
          description="Set up a Linux local server to run and manage large-scale Deep Learning models and Airflow pipelines, establishing a personal environment for end-to-end MLOps practice."
        />

        <Project
          title="Advanced Game AI (Chess Bot)"
          description="Developed a Chess bot utilizing advanced search algorithms, including MiniMax and Monte Carlo Tree Search (MCTS), demonstrating expertise in complex algorithmic problem-solving."
        />
      </div>
    </section>
  );
}
