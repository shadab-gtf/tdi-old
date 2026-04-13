import ProjectsClient from "../ProjectsClient";
import { categories } from "@/lib/projectsData";

export function generateStaticParams() {
    return categories
        .filter((cat) => cat.value !== "all")
        .map((cat) => ({
            category: cat.value,
        }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    return <ProjectsClient initialCategory={category} />;
}
