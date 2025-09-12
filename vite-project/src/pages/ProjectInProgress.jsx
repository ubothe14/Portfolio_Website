import { Link } from "react-router-dom";

export const ProjectInProgress = () => {
  return (
    <section className="py-24 px-4 flex items-center justify-center h-screen bg-secondary/30">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          🚧 Project In Progress 🚧
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
          This project is currently under development. Please check back later for updates!
        </p>
        <Link
          to="/"
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
};
