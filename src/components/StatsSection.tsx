const StatsSection = () => {
  const stats = [
    {
      number: "600,000+",
      label: "People with epilepsy in the UK"
    },
    {
      number: "1 in 100",
      label: "People affected by photosensitive epilepsy"
    },
    {
      number: "10 million+",
      label: "UK adults who experience migraines"
    },
    {
      number: "0",
      label: "Strobe-free dedicated nights in most venues"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            The Impact in Numbers
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            See how many people are affected by strobe lights in UK nightlife
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-primary-foreground/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
