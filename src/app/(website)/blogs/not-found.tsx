import NotFoundPage from "@/components/ui/NotFoundPage";

export default function BlogsNotFound() {
  return (
    <NotFoundPage 
      title="Article Not Found"
      message="The blog post or article you are looking for is no longer available or the link has changed."
      type="blogs"
    />
  );
}
