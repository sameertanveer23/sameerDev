import React, { useState } from "react";
import {
  Code,
  Database,
  Cloud,
  FileText,
  RefreshCw,
  Stethoscope,
  ClipboardList,
  Link,
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Healthcare Software Solutions",
    description:
      "Building secure, compliant apps with a focus on patient data and interoperability.",
    icon: <Stethoscope className="text-neon-blue text-4xl mb-4" />,
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    description:
      "Developing scalable web applications with .NET Core and Angular.",
    icon: <Code className="text-neon-blue text-4xl mb-4" />,
  },
  {
    id: 3,
    title: "API Development & Integration",
    description:
      "Delivering reliable RESTful APIs and seamless third-party integrations.",
    icon: <Link className="text-neon-blue text-4xl mb-4" />,
  },
  {
    id: 4,
    title: "Upgrades & Modernization",
    description:
      "Migrating legacy Angular/.Net apps to the latest versions for performance and maintainability.",
    icon: <RefreshCw className="text-neon-blue text-4xl mb-4" />,
  },
  {
    id: 5,
    title: "Complex PDF & Report Generation",
    description:
      "Generating advanced, multi-format reports with charts, tables, and exports.",
    icon: <FileText className="text-neon-blue text-4xl mb-4" />,
  },
  {
    id: 6,
    title: "Cloud & Serverless Solutions",
    description:
      "Designing scalable, cost-efficient apps with Azure Functions and DevOps pipelines.",
    icon: <Cloud className="text-neon-blue text-4xl mb-4" />,
  },
  {
    id: 7,
    title: "Database Architecture & Optimization",
    description:
      "Building and optimizing SQL databases for enterprise performance and reliability.",
    icon: <Database className="text-neon-blue text-4xl mb-4" />,
  },
  {
    id: 8,
    title: "Project Management & Delivery",
    description:
      "Leading Agile-driven projects with on-time, within-scope delivery.",
    icon: <ClipboardList className="text-neon-blue text-4xl mb-4" />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section py-5 bg-dark-surface/50">
      <div className="container-width section-padding">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="neon-border p-6 bg-dark-bg/50 transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-neon-blue mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
