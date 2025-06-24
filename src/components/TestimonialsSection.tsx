import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "muumuu1",
    role: "Fiverr Client",
    feedback: "Great fast service would definitely work with again.",
  },
  {
    name: "slardarradar",
    role: "Fiverr Client",
    feedback:
      "Proficient, quick, responsive and knows EXACTLY what the client wants. Sameer is a superb dev and professional at what he does - if you need a quick solution, look for him!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Muzammil Ashfaq",
    role: "Senior Software Engineer, DevSolutions",
    feedback:
      "Sameer brings a rare mix of technical depth and problem-solving acumen. His ability to deliver solutions under tight deadlines has consistently added value to our projects. A reliable engineer and a great team player",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container-width section-padding">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
          Testimonials.log()
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="neon-border bg-dark-surface/50 p-8 rounded-lg flex flex-col items-center text-center shadow-lg"
            >
              <Quote className="text-neon-blue mb-4" size={32} />
              <p className="text-gray-300 text-lg mb-6 font-mono">
                “{t.feedback}”
              </p>

              <div className="text-white font-semibold">{t.name}</div>
              <div className="text-neon-blue text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
