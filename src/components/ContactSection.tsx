import { Mail, MapPin, Phone, CalendarDays } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#F7F7F8]">
      <div className="container-width section-padding">
        <p className="text-[#A1A1AA] text-sm uppercase tracking-widest mb-4 font-mono">Let's talk</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-4 tracking-tight">Get in touch</h2>
        <p className="text-[#71717A] text-lg mb-12 max-w-lg">
          Open to freelance work, full-time roles, and consulting. I typically respond within a few hours.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          <a
            href="mailto:sameertanveer976@gmail.com"
            className="flex items-center gap-4 bg-white border border-[#E4E4E7] rounded-xl p-5 hover:border-[#D4D4D8] hover:shadow-sm transition-all group"
          >
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
              <Mail size={16} className="text-[#D97706]" />
            </div>
            <div>
              <div className="text-[#A1A1AA] text-sm mb-0.5">Email</div>
              <div className="text-[#18181B] text-base font-mono group-hover:text-[#D97706] transition-colors">
                sameertanveer976@gmail.com
              </div>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-white border border-[#E4E4E7] rounded-xl p-5">
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
              <Phone size={16} className="text-[#D97706]" />
            </div>
            <div>
              <div className="text-[#A1A1AA] text-sm mb-0.5">Phone</div>
              <div className="text-[#18181B] text-base font-mono">+92 309 3529946</div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white border border-[#E4E4E7] rounded-xl p-5">
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
              <MapPin size={16} className="text-[#D97706]" />
            </div>
            <div>
              <div className="text-[#A1A1AA] text-sm mb-0.5">Location</div>
              <div className="text-[#18181B] text-base">Lahore, Pakistan</div>
            </div>
          </div>

          <a
            href="https://calendly.com/sameertanveer23/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white border border-[#E4E4E7] rounded-xl p-5 hover:border-[#D4D4D8] hover:shadow-sm transition-all group"
          >
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
              <CalendarDays size={16} className="text-[#D97706]" />
            </div>
            <div>
              <div className="text-[#A1A1AA] text-sm mb-0.5">Schedule a call</div>
              <div className="text-[#18181B] text-base group-hover:text-[#D97706] transition-colors">
                Book on Calendly →
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
