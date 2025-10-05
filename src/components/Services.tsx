import { Activity, Dumbbell, Heart, Flame, Music, User } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Yoga",
    description: "Yoga is an ancient practice that unites body, mind, and spirit through postures, breathing, and meditation. It enhances flexibility, balance, and stamina while reducing stress and improving mental clarity. Practiced worldwide, yoga supports overall health, self-awareness, and inner peace, making it a holistic path to wellness and harmony in life.",
  },
  {
    icon: Dumbbell,
    title: "Gym Training",
    description: "Build strength and muscle with our state-of-the-art equipment and personalized workout plans guided by expert trainers.",
  },
  {
    icon: Flame,
    title: "Taekwondo",
    description: "Taekwondo is a Korean martial art that combines powerful kicks, strikes, and self-defense techniques. Known for its focus on discipline, fitness, and flexibility, it promotes both physical health and mental strength, making it a worldwide practice for self-improvement, stamina, and confidence.",
  },
  {
    icon: Activity,
    title: "Boxing",
    description: "Boxing is a dynamic combat sport that builds strength, speed, and endurance through punches, footwork, and strategy. It improves fitness, coordination, and mental focus while teaching discipline and resilience. Beyond competition, boxing is a powerful way to stay healthy, relieve stress, and develop confidence in both body and mind.",
  },
  {
    icon: Heart,
    title: "HIIT",
    description: "High-Intensity Interval Training (HIIT) is a powerful workout method combining short bursts of intense exercise with brief recovery periods. It boosts metabolism, burns fat, and improves endurance in less time. HIIT challenges your limits, enhances cardiovascular health, and gives maximum results efficiently perfect for anyone seeking fast, effective fitness progress.",
  },
  {
    icon: User,
    title: "CrossFit",
    description: "CrossFit is a high-energy fitness program blending weightlifting, cardio, and functional movements. Designed to build strength, endurance, and agility, it challenges the body through constantly varied workouts. CrossFit pushes limits, improves overall athleticism, and fosters a strong community making it ideal for those seeking full-body fitness with real results.",
  },
];

export const Services = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Discover Your
            <span className="gradient-text block">Perfect Workout</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Explore our comprehensive range of fitness programs designed to transform your body and mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flip-card h-64 sm:h-72 rounded-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front gradient-primary p-6 sm:p-8 flex flex-col items-center justify-center text-center rounded-2xl">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-sm">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h3>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back bg-card border-2 border-primary/20 p-6 sm:p-8 flex flex-col items-center justify-center text-center rounded-2xl">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            Hover over each card to learn more about our services
          </p>
        </div>
      </div>
    </section>
  );
};
