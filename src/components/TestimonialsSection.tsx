const testimonials = [
  {
    name: "muumuu1",
    source: "Fiverr",
    feedback: "Great fast service, would definitely work with again.",
  },
  {
    name: "slardarradar",
    source: "Fiverr",
    feedback:
      "Proficient, quick, responsive and knows exactly what the client wants. If you need a quick solution, look for him.",
  },
  {
    name: "Muzammil Ashfaq",
    source: "Senior Software Engineer, Technosoft Solutions",
    feedback:
      "Sameer brings a rare mix of technical depth and problem-solving acumen. His ability to deliver under tight deadlines consistently adds value. A reliable engineer and a great team player.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container-width section-padding">
        <p className="text-[#A1A1AA] text-sm uppercase tracking-widest mb-4 font-mono">What people say</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-12 tracking-tight">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E4E4E7] rounded-xl p-6 flex flex-col hover:border-[#D4D4D8] hover:shadow-sm transition-all"
            >
              <p className="text-[#52525B] text-base leading-relaxed flex-1 mb-6">"{t.feedback}"</p>
              <div>
                <div className="text-[#18181B] text-base font-medium">{t.name}</div>
                <div className="text-[#A1A1AA] text-sm mt-0.5">{t.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
