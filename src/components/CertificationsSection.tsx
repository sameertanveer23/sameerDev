import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Claude 101",
    issuer: "Anthropic",
    image: "assets/claude-101.webp",
    verifyUrl: "https://verify.skilljar.com/c/5bk5dao3kuqa",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    image: "assets/claude-code-101.webp",
    verifyUrl: "https://verify.skilljar.com/c/mjhnje892a2y",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    image: "assets/ai-fluency.webp",
    verifyUrl: "https://verify.skilljar.com/c/7e9wmucjev6s",
  },
  {
    title: "Claude Code in action",
    issuer: "Anthropic",
    image: "assets/claude-code-in-action.webp",
    verifyUrl: "https://verify.skilljar.com/c/8vb9xaa46fsw",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container-width section-padding">
        <p className="text-[#A1A1AA] text-sm uppercase tracking-widest mb-4 font-mono">
          Credentials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-12 tracking-tight">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white border border-[#E4E4E7] rounded-xl overflow-hidden hover:border-[#D4D4D8] hover:shadow-sm transition-all flex flex-col"
            >
              <div className="h-48 bg-[#F7F7F8] flex items-center justify-center overflow-hidden">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-semibold text-[#18181B]">
                    {cert.title}
                  </h3>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D97706] hover:text-[#B45309] transition-colors shrink-0 mt-0.5"
                    aria-label="Verify certificate"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
                <div className="text-[#D97706] text-sm mb-3">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
