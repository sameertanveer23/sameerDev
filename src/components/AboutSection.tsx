import { Crown, Dumbbell, MonitorSmartphone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dark-surface/50">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              About.exe
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a Software Engineer specializing in .NET Core, Angular, and
                Azure—driven to build intelligent, scalable solutions. I thrive
                at the intersection of clean architecture and emerging
                technologies.
              </p>

              <p>
                With over 2 years of hands-on experience, I’ve delivered secure,
                enterprise-grade web applications across healthcare and SaaS
                domains. I prioritize clean code, performance optimization, and
                scalable system design.
              </p>

              <p>
                When I’m not coding, I’m either
                <span className="inline-flex items-center gap-1 mx-1">
                  <Dumbbell className="inline text-neon-purple" size={18} />{" "}
                  lifting weights
                </span>
                ,
                <span className="inline-flex items-center gap-1 mx-1">
                  <MonitorSmartphone
                    className="inline text-neon-blue"
                    size={18}
                  />{" "}
                  exploring tech innovations
                </span>
                , or
                <span className="inline-flex items-center gap-1 mx-1">
                  <Crown className="inline text-cyber-green" size={18} />{" "}
                  playing chess
                </span>
                .
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-neon-blue mb-4">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="neon-border p-4 text-center">
                  <div className="text-2xl font-bold text-neon-purple">10+</div>
                  <div className="text-sm text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="neon-border p-4 text-center">
                  <div className="text-2xl font-bold text-neon-blue">2+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="neon-border p-8 bg-dark-bg/50">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-cyber-green">
                  <span className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></span>
                  <span className="font-mono">&gt; System Status: ONLINE</span>
                </div>
                <div className="text-gray-400 font-mono text-sm space-y-2">
                  <div>&gt; Initializing neural networks...</div>
                  <div>&gt; Loading creativity modules... ✓</div>
                  <div>&gt; Optimizing problem-solving algorithms... ✓</div>
                  <div>&gt; Establishing coffee connection... ✓</div>
                  <div className="text-neon-blue">
                    &gt; Ready to build the future.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="text-xs text-gray-500 font-mono">
                  [CORE_MODULES]: .Net | Angular
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
