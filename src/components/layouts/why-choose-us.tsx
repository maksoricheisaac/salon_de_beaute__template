import { Award, Heart, Users } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Expertise reconnue",
      description:
        "Notre équipe de professionnels qualifiés vous garantit des résultats exceptionnels.",
    },
    {
      icon: Heart,
      title: "Soins personnalisés",
      description:
        "Chaque cliente bénéficie d'un service sur-mesure adapté à ses besoins.",
    },
    {
      icon: Users,
      title: "Ambiance chaleureuse",
      description:
        "Un environnement accueillant où vous vous sentirez comme chez vous.",
    },
  ];

  return (
    <section className="py-16 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-salon-dark mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez ce qui fait de Beauty Hair le salon de coiffure préféré de nos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

