import LinkButton from "./LinkButton";
import FeatureListItem from "./FeatureListItem";

interface FeatureSectionProps {
  title: string | React.ReactNode;
  description: string;
  features?: string[];
  imagePosition?: "left" | "right";
  imagePlaceholder?: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function FeatureSection({
  title,
  description,
  features = [],
  imagePosition = "right",
  imagePlaceholder,
  linkText = "Find Out More",
  linkHref = "/",
  children,
  className = ""
}: FeatureSectionProps) {
  const contentSection = (
    <div className={imagePosition === "right" ? "order-2 md:order-1" : ""}>
      <h4 className="mb-4 text-xl sm:text-2xl md:text-3xl md:leading-normal leading-normal font-semibold">
        {title}
      </h4>
      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
          {features.map((feature, index) => (
            <FeatureListItem key={index}>{feature}</FeatureListItem>
          ))}
        </ul>
      )}
      
      {children}
      
      {linkHref && linkText && (
        <div className="mt-4">
          <LinkButton href={linkHref}>{linkText}</LinkButton>
        </div>
      )}
    </div>
  );

  const imageSection = imagePlaceholder && (
    <div className={`relative ${imagePosition === "right" ? "order-1 md:order-2" : ""}`}>
      {imagePlaceholder}
    </div>
  );

  return (
    <section className={`relative py-6 sm:py-8 md:py-12 lg:py-24 ${className}`}>
      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
          {imagePosition === "left" ? (
            <>
              {imageSection}
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              {imageSection}
            </>
          )}
        </div>
      </div>
    </section>
  );
}