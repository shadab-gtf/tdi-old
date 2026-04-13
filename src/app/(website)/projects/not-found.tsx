import NotFoundPage from "@/components/ui/NotFoundPage";

export default function ProjectsNotFound() {
  return (
    <NotFoundPage 
      title="Project Not Found"
      message="We couldn't find the specific project you're looking for. It might be under development or recently updated."
      type="projects"
    />
  );
}
