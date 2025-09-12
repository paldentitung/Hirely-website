const jobsData = [
  {
    id: "1",
    title: "Junior Frontend Developer",
    type: "Part Time",
    description:
      "Join our dynamic team to build responsive and interactive web interfaces using HTML, CSS, and JavaScript. Collaborate with senior developers and gain hands-on experience in modern frontend frameworks.",
    salary: "$50-60k/year",
    location: "India",
    company: {
      name: "CodeCrafters Pvt. Ltd.",
      description:
        "CodeCrafters Pvt. Ltd. is a leading software development company in Nepal, specializing in building modern, scalable, and responsive web applications for international clients. With a strong focus on innovation and quality, we empower businesses to embrace digital transformation. Our team of developers, designers, and analysts collaborates to deliver cutting-edge solutions that drive measurable results.",
    },
  },
  {
    id: "10",
    title: "Technical Writer",
    type: "Part Time",
    description:
      "Create clear and concise documentation for software applications, APIs, and user guides. Collaborate with developers and product managers to ensure accuracy.",
    salary: "$35-45k/year",
    location: "Nepal",
    company: {
      name: "DocuTech Nepal",
      description:
        "DocuTech Nepal is a documentation and publishing company that delivers high-quality technical content for software and technology firms. We specialize in API documentation, user manuals, and developer guides that make complex systems easier to understand. With a commitment to clarity and precision, we help organizations communicate effectively with their users and clients.",
    },
  },
  {
    id: "cd52",
    title: "UI/UX Intern",
    type: "Remote",
    description: "It is internship",
    salary: "1/year",
    location: "Nepal",
    company: {
      name: "Pixel Labs",
      description:
        "Pixel Labs is a fast-growing startup that blends creativity with technology to design impactful digital products. We specialize in UI/UX design, branding, and product innovation. Our team thrives on experimentation, making Pixel Labs a perfect space for interns to explore, learn, and contribute to meaningful design projects.",
    },
  },
  {
    id: "18a7",
    title: "UI/UX Intern",
    type: "Remote",
    description: "It is internship",
    salary: "123/year",
    location: "Nepal",
    company: {
      name: "CreativeNest",
      description:
        "CreativeNest is an innovative digital agency providing design and development solutions to startups and enterprises. Our focus is on creating visually appealing and intuitive user experiences that strengthen brand identity. We offer mentorship-driven internship programs designed to nurture young designers into future professionals.",
    },
  },
  {
    id: "1b9a",
    title: "UI/UX Intern",
    type: "Remote",
    description: "It is internship",
    salary: "15/year",
    location: "Nepal",
    company: {
      name: "UIWorks Studio",
      description:
        "UIWorks Studio is a boutique design firm dedicated to delivering tailored user experiences for mobile and web platforms. We believe in blending aesthetics with functionality to craft designs that truly engage users. Our studio also offers internships to guide new talent through the fundamentals of professional UI/UX design.",
    },
  },
  {
    id: "6d58",
    title: "UI/UX Designer",
    type: "Contract",
    description:
      "Design user-friendly interfaces and experiences for web and mobile apps. Create wireframes, mockups, and prototypes, and work closely with developers to implement your designs.",
    salary: "40-50k/year",
    location: "Nepal",
    company: {
      name: "Visionary Designs",
      description:
        "Visionary Designs is a contract-based design company that partners with businesses to create cutting-edge user experiences. We specialize in UI/UX design, prototyping, and product branding, working closely with development teams to bring concepts to life. Our reputation is built on delivering elegant, functional, and impactful design solutions across industries.",
    },
  },
  {
    id: "917f",
    title: "QA Engineer",
    type: "Full Time",
    description:
      "Test web and mobile applications, create automated test scripts, and ensure software quality. Work closely with developers to identify and fix bugs.",
    salary: "50-65k/year",
    location: "Nepal",
    company: {
      name: "TestPro Solutions",
      description:
        "TestPro Solutions is a quality assurance and software testing company committed to delivering reliable, bug-free applications. Our team ensures that every digital product meets the highest standards of performance, usability, and security. With a client-first approach, we partner with startups and enterprises to deliver trustworthy solutions across industries.",
    },
  },
  {
    id: "cc79",
    title: "QA Engineer",
    type: "Full Time",
    description:
      "Test web and mobile applications, create automated test scripts, and ensure software quality. Work closely with developers to identify and fix bugs.",
    salary: "50-65k/year",
    location: "Nepal",
    company: {
      name: "TestPro Solutions",
      description:
        "TestPro Solutions is a quality assurance and software testing company committed to delivering reliable, bug-free applications. Our team ensures that every digital product meets the highest standards of performance, usability, and security. With a client-first approach, we partner with startups and enterprises to deliver trustworthy solutions across industries.",
    },
  },
  {
    id: "5500",
    title: "Cloud Solutions Architect",
    type: "Full Time",
    description:
      "Design and implement scalable cloud architectures on AWS, Azure, or Google Cloud. Ensure reliability, security, and cost-effectiveness of cloud solutions.",
    salary: "90-120k/year",
    location: "Remote",
    company: {
      name: "CloudSphere Technologies.ltd",
      description:
        "CloudSphere Technologies is a global leader in cloud computing solutions, enabling enterprises to transition seamlessly to scalable and secure cloud infrastructures. We specialize in AWS, Azure, and Google Cloud, helping businesses optimize performance while reducing operational costs. Our vision is to create future-ready cloud ecosystems that empower digital growth and innovation.",
    },
  },
  {
    id: "0c3f",
    title: "Cloud Solutions Architect",
    type: "Full Time",
    description:
      "Design and implement scalable cloud architectures on AWS, Azure, or Google Cloud. Ensure reliability, security, and cost-effectiveness of cloud solutions.",
    salary: "$90-120k/year",
    location: "Remote",
    company: {
      name: "CloudSphere Technologies.PVT.LTD",
      description:
        "CloudSphere Technologies is a global leader in cloud computing solutions, enabling enterprises to transition seamlessly to scalable and secure cloud infrastructures. We specialize in AWS, Azure, and Google Cloud, helping businesses optimize performance while reducing operational costs. Our vision is to create future-ready cloud ecosystems that empower digital growth and innovation.",
    },
  },
  {
    id: "7f3b",
    title: "Junior Frontend Developer",
    type: "Part Time",
    description:
      "Join our dynamic team to build responsive and interactive web interfaces using HTML, CSS, and JavaScript. Collaborate with senior developers and gain hands-on experience in modern frontend frameworks.",
    salary: "$70-80k/year",
    location: "Nepal",
    company: {
      name: "CodeCrafters Pvt. Ltd.",
      description:
        "CodeCrafters Pvt. Ltd. is a leading software development company in Nepal, specializing in building modern, scalable, and responsive web applications for international clients. With a strong focus on innovation and quality, we empower businesses to embrace digital transformation. Our team of developers, designers, and analysts collaborates to deliver cutting-edge solutions that drive measurable results.",
    },
  },
  {
    id: "f2e8",
    title: "Junior Frontend Developer",
    type: "Part Time",
    description:
      "Join our dynamic team to build responsive and interactive web interfaces using HTML, CSS, and JavaScript. Collaborate with senior developers and gain hands-on experience in modern frontend frameworks.",
    salary: "$70-80K/year",
    location: "Nepal",
    company: {
      name: "CodeCrafters Pvt. Ltd.",
      description:
        "CodeCrafters Pvt. Ltd. is a leading software development company in Nepal, specializing in building modern, scalable, and responsive web applications for international clients. With a strong focus on innovation and quality, we empower businesses to embrace digital transformation. Our team of developers, designers, and analysts collaborates to deliver cutting-edge solutions that drive measurable results.",
    },
  },
  {
    id: "1756227233375",
    title: "Junior Frontend Developer",
    type: "Part Time",
    description:
      "Join our dynamic team to build responsive and interactive web interfaces using HTML, CSS, and JavaScript. Collaborate with senior developers and gain hands-on experience in modern frontend frameworks.",
    salary: "$50-70k/year",
    location: "Nepal",
    company: {
      name: "CodeCrafters Pvt. Ltd.",
      description:
        "CodeCrafters Pvt. Ltd. is a leading software development company in Nepal, specializing in building modern, scalable, and responsive web applications for international clients. With a strong focus on innovation and quality, we empower businesses to embrace digital transformation. Our team of developers, designers, and analysts collaborates to deliver cutting-edge solutions that drive measurable results.",
    },
  },
  {
    id: "1756307942881",
    title: "QA Engineer",
    type: "remote",
    description:
      "Join our dynamic team to build responsive and interactive web interfaces using HTML, CSS, and JavaScript. Collaborate with senior developers and gain hands-on experience in modern frontend frameworks.",
    salary: "$70-80k/year",
    location: "Nepal",
    company: {
      name: "TestPro Solutions",
      description:
        "TestPro Solutions is a quality assurance and software testing company committed to delivering reliable, bug-free applications. Our team ensures that every digital product meets the highest standards of performance, usability, and security. With a client-first approach, we partner with startups and enterprises to deliver trustworthy solutions across industries.",
    },
  },
];
export default jobsData;
