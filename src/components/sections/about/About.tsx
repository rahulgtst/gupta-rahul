import React from "react";

const About = () => {
  const snapshotKpis = [
    { label: "Experience", stat: "2+", suffix: "YoE" },
    { label: "Projects", stat: "7+", suffix: "" },
    { label: "DSA", stat: "600+", suffix: "" },
    { label: "LeetCode", stat: "1600+", suffix: "" },
  ];

  return (
    <section
      className="bg-surface_container_low py-20 md:py-28"
      id="about"
    >
      <div className="mx-auto max-w-[1400px] px-6 font-body">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-16">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-primary lg:sticky lg:top-28 lg:self-start">
            Philosophy
          </h2>

          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-label-md uppercase tracking-[0.05em] text-primary">
                01 // Architecture &amp; scalability
              </h3>
              <p className="text-body-md text-on_surface md:text-[0.9375rem]">
              I like building systems that don't fall apart as they grow. 
              Clean boundaries, simple contracts, and setups that teams 
              can understand and work on without needing a “hero” to 
              fix things later.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-label-md uppercase tracking-[0.05em] text-primary">
                02 // Craft &amp; iteration
              </h3>
              <p className="text-body-md text-on_surface md:text-[0.9375rem]">
              For me, building is an ongoing loop — ship, learn, improve. 
              I try to keep things simple, make clear tradeoffs, and 
              build in a way that’s easy for both users and the next 
              developer reading the code.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-start md:gap-12 lg:mt-20">
          <div className="flex flex-col gap-6">
            <p className="text-label-md uppercase tracking-[0.05em] text-primary">
              Snapshot
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {snapshotKpis.map(({ label, stat, suffix }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 bg-surface_container_highest p-5 transition-colors duration-button hover:bg-surface_container_high md:gap-2 md:p-6"
                >
                  <span className="text-[0.625rem] font-semibold uppercase leading-tight tracking-[0.08em] text-outline md:text-[0.6875rem]">
                    {label}
                  </span>
                  <p className="font-display text-3xl font-bold leading-none tracking-tight text-primary md:text-4xl">
                    <span className="tabular-nums">{stat}</span>
                    {suffix ? (
                      <span className="ml-1.5 text-lg font-bold tracking-tight text-on_surface md:text-xl">
                        {suffix}
                      </span>
                    ) : null}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="justify-self-center w-fit max-w-full bg-surface_container_high">
            {process.env.REACT_APP_PROFILE_PIC ? (
              <img
                src={process.env.REACT_APP_PROFILE_PIC}
                alt="Rahul Gupta"
                className="block h-auto max-h-[min(32rem,70vh)] w-auto max-w-full grayscale contrast-[1.02]"
              />
            ) : (
              <div className="flex aspect-[4/3] min-h-[200px] w-full min-w-[200px] max-w-md items-center justify-center bg-surface_container_highest text-label-md text-outline">
                Profile image
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
