import React from "react";

export default function InfoScan() {
  const infoScanFeatures = [
    {
      title: "AI-Driven Domain Security Assessments",
      content:
        "Automatically detect and receive expert recommendations on potential vulnerabilities, ensuring your domain is protected against cyber threats.",
    },
    {
      title: "Multi-Organization and Project Management",
      content:
        "Easily manage multiple organizations and projects, and generate detailed reports for each, all from a single platform.",
    },
    {
      title: "Comprehensive PDF Reporting",
      content:
        "Generate and download in-depth PDF reports that provide actionable insights into your domain's security status and SEO performance.",
    },
    {
      title: "Automated Email Notifications",
      content:
        "Stay informed with real-time email alerts that keep you updated on any changes in your domain’s security or SEO scores.",
    },
    {
      title: "AI-Based SEO Insights",
      content:
        "Gain expert recommendations on improving your website’s speed and search engine visibility through advanced AI analysis.",
    },
    {
      title: "User and Role Management",
      content:
        "Centralized management of users and roles ensures that only authorized personnel have access to sensitive data.",
    },
    {
      title: "Custom LLM and Plugin Integration",
      content:
        "Enhance your assessments by integrating custom Large Language Models (LLMs) and plugins tailored to your needs.",
    },
    {
      title: "Dockerized Deployment",
      content:
        "Deploy Info Scan anywhere—whether on-premises or in the cloud—with ease, thanks to its Dockerized architecture.",
    },
  ];

  const infoScanServices = [
    {
      title: "Free Domain Security Assessment",
      content:
        "Register with your business email, role, and domain details to receive a complimentary security assessment report.",
    },
    {
      title: "SEO Performance Analysis",
      content:
        "Improve your website’s SEO performance with our in-depth analysis, designed to help you achieve better search engine rankings.",
    },
    {
      title: "Consultation and Issue Resolution",
      content:
        "Once you receive your assessment report, our experts will guide you through fixing any identified issues, offering commercial solutions tailored to your specific needs.",
    },
  ];

  return (
    <div>
      <h1>Info Scan</h1>
      <div>
        <p>
          Info Scan is an AI-based, all-in-one web assessment solution
          meticulously engineered to safeguard your online presence. This
          advanced tool scans your domain for vulnerabilities, offering
          predictive insights to help you secure potential attack surfaces
          before they are exploited. In addition to its robust security
          features, Info Scan also provides valuable SEO analysis, enabling you
          to optimize your website’s performance and improve search engine
          rankings.
        </p>
        <p>
          Info Scan is designed to be the cornerstone of your digital security
          and performance strategy. By automating critical assessments, it frees
          you to focus on what matters most—growing your business and delivering
          value to your customers.
        </p>
      </div>
      <div>
        <h2>Features</h2>
        {infoScanFeatures.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Our Services</h2>
        {infoScanServices.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
