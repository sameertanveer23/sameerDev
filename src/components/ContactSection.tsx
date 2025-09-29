import { CalendarDays, Mail, MapPin, Phone, MousePointer } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container-width section-padding">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
          Contact.init()
        </h2>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 text-lg">
                Feel free to reach out for collaboration, project inquiries, or
                just to talk tech. I'm always open to meaningful conversations
                and new opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-neon-blue/20 rounded-full">
                  <Mail className="text-neon-blue" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-mono">
                    sameertanveer976@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-neon-purple/20 rounded-full">
                  <Phone className="text-neon-purple" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-mono">+92 309 3529946</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-cyber-green/20 rounded-full">
                  <MapPin className="text-cyber-green" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white font-mono">Lahore, Pakistan</div>
                </div>
              </div>
              <div>
                <a
                  href="https://calendly.com/sameertanveer23/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group cursor-pointer rounded-lg p-2 -ml-2"
                >
                  <div className="p-3 bg-cyber-green/20 rounded-full">
                    <CalendarDays className="text-neon-blue" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 ">
                      Schedule Free Consultation
                    </div>
                    <div className="text-white font-mono flex items-center gap-1">
                      Go to Calendly
                      <MousePointer
                        className="text-cyber-green group-hover:scale-110 transition-transform"
                        size={16}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-neon-blue mb-4">
                Response Time
              </h4>
              <div className="neon-border p-4 bg-dark-bg/50">
                <div className="flex items-center space-x-2 text-cyber-green">
                  <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></span>
                  <span className="font-mono text-sm">
                    Usually responds within 2-3 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form
          <div className="neon-border p-8 bg-dark-surface/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded focus:border-neon-blue focus:outline-none transition-colors text-white font-mono"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded focus:border-neon-blue focus:outline-none transition-colors text-white font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded focus:border-neon-blue focus:outline-none transition-colors text-white font-mono"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded focus:border-neon-blue focus:outline-none transition-colors text-white font-mono resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="cyber-button w-full">
                <span className="flex items-center justify-center space-x-2">
                  <Send size={16} />
                  <span>Send Message</span>
                </span>
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
