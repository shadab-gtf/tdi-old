import HeroMedia from "@/components/Hero";
import BrochureSection from "@/components/Residential/BrochureSection";
import Highlight from "@/components/Residential/Highlight";
import LuxuryAmenities from "@/components/Residential/LuxuryAmenities";
import Structured from "@/components/Residential/Structured";
import TuscanCityMasterPlan from "@/components/Residential/TuscanCityMasterPlan";
import OverviewSection from "@/components/Residential/OverviewSection";
import AirQuality from "@/components/Residential/AirQuality";
import ProjectGallery from "@/components/Residential/ProjectGallery";
import SeamlessConnectivity from "@/components/Residential/SeamlessConnectivity";
import ResidentialExperience from "@/components/Residential/ResidentialExperience";
import {
  getSubProjectHref,
  type Project,
  type ProjectDetail,
  type ProjectSubProject,
} from "@/lib/projectsData";

export interface ProjectDetailViewModel {
  slug: string;
  title: string;
  description: string;
  detail: ProjectDetail;
  mapQuery: string;
  hasSubProjects: boolean;
  subProjects: ProjectSubProject[];
}

interface ProjectDetailSectionsProps {
  project: ProjectDetailViewModel;
}

const sectionRemovalSlugs = new Set(["tuscan-city", "espania", "espania-royale"]);

export function mapProjectToDetailViewModel(
  project: Project,
): ProjectDetailViewModel {
  return {
    slug: project.slug,
    title: project.title,
    description: project.description,
    detail: project.detail,
    mapQuery: project.mapQuery,
    hasSubProjects: project.hasSubProjects,
    subProjects: project.subProjects,
  };
}

export function mapSubProjectToDetailViewModel(
  parentProject: Project,
  subProject: ProjectSubProject,
): ProjectDetailViewModel {
  return {
    slug: `${parentProject.slug}/${subProject.slug}`,
    title: subProject.title,
    description: subProject.description,
    detail: subProject.detail,
    mapQuery: subProject.mapQuery ?? parentProject.mapQuery,
    hasSubProjects: false,
    subProjects: [],
  };
}

export function ProjectDetailSkeleton() {
  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen">
      <div className="h-screen w-full animate-pulse bg-gray-200" />
      <section className="w-full bg-white py-16">
        <div className="containers mx-auto px-4 lg:px-8">
          <div className="mx-auto h-10 w-2/3 animate-pulse bg-gray-200" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="h-16 animate-pulse bg-gray-200" />
            <div className="h-16 animate-pulse bg-gray-200" />
            <div className="h-16 animate-pulse bg-gray-200" />
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-16">
        <div className="containers mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <div className="aspect-[4/3] animate-pulse bg-gray-200" />
          <div className="space-y-5">
            <div className="h-8 w-3/4 animate-pulse bg-gray-200" />
            <div className="h-4 w-full animate-pulse bg-gray-200" />
            <div className="h-4 w-5/6 animate-pulse bg-gray-200" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ProjectDetailSections({
  project,
}: ProjectDetailSectionsProps) {
  const { detail, subProjects: subPages } = project;
  const showResidentialExperience =
    project.hasSubProjects === true && subPages.length > 0;
  const removeSelectedSections = sectionRemovalSlugs.has(project.slug);

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen">
      {detail.hero.type === "image" ? (
        <HeroMedia
          type="image"
          desktopFile={detail.hero.src}
          mobileFile={detail.hero.src}
          alt={`${project.title} hero`}
        />
      ) : (
        <HeroMedia
          type="video"
          desktopFile={detail.hero.src}
          mobileFile={detail.hero.src}
          poster={detail.hero.poster}
        />
      )}

      <div data-aos="fade-up" data-aos-duration="900">
        <OverviewSection
          title={project.title.toUpperCase()}
          stats={detail.overviewStats}
        />
      </div>

      <div data-aos="reveal-right" data-aos-duration="1100">
        <BrochureSection
          imageSrc={detail.overviewImage}
          title={project.title}
          contentTitle={detail.overviewTitle}
          contentDescription={detail.overviewDescription}
          brochureText={detail.brochure?.text}
          brochureLink={detail.brochure?.link}
        />
      </div>

      {showResidentialExperience && (
        <ResidentialExperience
          sectionTitle={detail.experiencesTitle || "Explore Project Details"}
          experiences={subPages.map((subPage) => ({
            title: subPage.title,
            subtitle: subPage.subtitle,
            description: subPage.description,
            imageSrc: subPage.image,
            stats: subPage.stats,
            link: getSubProjectHref({ slug: project.slug }, subPage),
          }))}
        />
      )}

      {!removeSelectedSections && (
        <div data-aos="fade-up" data-aos-delay="100">
          <Highlight
            sectionTitle="Key Highlights"
            sectionDescription={project.description}
            highlights={detail.highlights}
          />
        </div>
      )}

      {!removeSelectedSections &&
        (detail.masterPlanLayout === "township" ? (
          <TuscanCityMasterPlan
            title={detail.masterPlanTitle}
            description={detail.masterPlanDescription}
            imageSrc={detail.masterPlanImage}
          />
        ) : (
          <Structured
            title={detail.masterPlanTitle}
            description={detail.masterPlanDescription}
            plans={detail.masterPlans}
          />
        ))}

      {!removeSelectedSections && (
        <LuxuryAmenities
          title={
            detail.amenitiesTitle || "Exquisite Amenities for Elevated Living"
          }
          description={
            detail.amenitiesDescription ||
            `Each amenity at ${project.title} is meticulously designed to offer unparalleled comfort, fostering an environment where every moment feels extraordinary.`
          }
          amenities={detail.amenities}
        />
      )}

      {!removeSelectedSections && (
        <div data-aos="fade-up" data-aos-delay="250">
          <AirQuality
            entries={[
              {
                label: "Delhi AQI",
                value: 420,
                suffix: "+",
              },
              {
                label: "Kundli, Sonipat, Haryana AQI",
                value: 150,
              },
            ]}
          />
        </div>
      )}

      <div data-aos="fade-up" data-aos-delay="300">
        <SeamlessConnectivity
          title={detail.connectivityTitle}
          description={detail.connectivityDescription}
          points={detail.connectivityPoints}
          mapQuery={project.mapQuery}
        />
      </div>

      {!removeSelectedSections && (
        <ProjectGallery
          title={detail.galleryTitle}
          description={detail.galleryDescription}
          images={detail.galleryImages}
        />
      )}
    </main>
  );
}
