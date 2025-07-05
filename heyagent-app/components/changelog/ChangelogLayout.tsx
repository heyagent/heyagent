interface ChangelogLayoutProps {
  children: React.ReactNode;
}

export default function ChangelogLayout({ children }: ChangelogLayoutProps) {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section with Centered Title */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8 sm:pb-12 md:pb-16">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Changelog
            </h1>
            {/* Separator */}
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-16 sm:pb-20 md:pb-24">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-5xl">
          {children}
        </div>
      </section>
    </main>
  );
}