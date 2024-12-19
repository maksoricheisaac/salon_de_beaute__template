import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Cliente régulière",
    content: "J'adore ce salon ! L'équipe est professionnelle et attentionnée. Mes cheveux n'ont jamais été aussi beaux.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Marie Dubois",
    role: "Cliente satisfaite",
    content: "Un service exceptionnel et des résultats au-delà de mes attentes. Je recommande vivement !",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Julie Leroux",
    role: "Cliente fidèle",
    content: "Le meilleur salon de coiffure que j'ai jamais fréquenté. L'ambiance est chaleureuse et les coiffures sont magnifiques.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ce que disent nos clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences de nos clientes satisfaites et rejoignez notre communauté de beautés épanouies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <CardDescription>{testimonial.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
