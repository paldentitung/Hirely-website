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
    postedDate: "Sep 01, 2025",
    applicants: 5,
    status: "Active",
    expiryDate: "Oct 01, 2025",
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
    postedDate: "Aug 28, 2025",
    applicants: 3,
    status: "Active",
    expiryDate: "Sep 28, 2025",
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
    postedDate: "Sep 05, 2025",
    applicants: 0,
    status: "Active",
    expiryDate: "Sep 30, 2025",
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
    postedDate: "Sep 07, 2025",
    applicants: 1,
    status: "Active",
    expiryDate: "Oct 05, 2025",
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
    postedDate: "Sep 02, 2025",
    applicants: 0,
    status: "Active",
    expiryDate: "Sep 29, 2025",
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
    postedDate: "Aug 25, 2025",
    applicants: 2,
    status: "Closed",
    expiryDate: "Sep 15, 2025",
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
    postedDate: "Sep 03, 2025",
    applicants: 7,
    status: "Active",
    expiryDate: "Oct 03, 2025",
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
    postedDate: "Sep 06, 2025",
    applicants: 4,
    status: "Active",
    expiryDate: "Oct 06, 2025",
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
    postedDate: "Aug 20, 2025",
    applicants: 6,
    status: "Active",
    expiryDate: "Sep 20, 2025",
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
    postedDate: "Aug 21, 2025",
    applicants: 8,
    status: "Closed",
    expiryDate: "Sep 18, 2025",
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
    postedDate: "Sep 04, 2025",
    applicants: 2,
    status: "Active",
    expiryDate: "Oct 04, 2025",
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
    postedDate: "Sep 08, 2025",
    applicants: 1,
    status: "Active",
    expiryDate: "Oct 08, 2025",
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
    postedDate: "Sep 09, 2025",
    applicants: 0,
    status: "Active",
    expiryDate: "Oct 09, 2025",
  },
  {
    id: "1756307942881",
    title: "QA Engineer",
    type: "Remote",
    description:
      "Join our dynamic team to build responsive and interactive web interfaces using HTML, CSS, and JavaScript. Collaborate with senior developers and gain hands-on experience in modern frontend frameworks.",
    salary: "$70-80k/year",
    location: "Nepal",
    company: {
      name: "TestPro Solutions",
      description:
        "TestPro Solutions is a quality assurance and software testing company committed to delivering reliable, bug-free applications. Our team ensures that every digital product meets the highest standards of performance, usability, and security. With a client-first approach, we partner with startups and enterprises to deliver trustworthy solutions across industries.",
    },
    postedDate: "Sep 10, 2025",
    applicants: 10,
    status: "Active",
    expiryDate: "Oct 10, 2025",
  },
  {
    id: "a103",
    title: "Project Coordinator",
    type: "Contract",
    description:
      "Coordinate project activities, monitor timelines, and assist in reporting to ensure projects are delivered on time.",
    salary: "$30-40k/year",
    location: "Canada",
    company: {
      name: "Global Projects Inc.",
      description:
        "Global Projects Inc. provides project management solutions for international clients in IT, construction, and consulting sectors.",
    },
    postedDate: "Sep 14, 2025",
    applicants: 1,
    status: "Active",
    expiryDate: "Oct 14, 2025",
  },
  {
    id: "a104",
    title: "HR Specialist",
    type: "Full Time",
    description:
      "Manage recruitment, employee relations, and performance evaluation processes to support organizational growth.",
    salary: "$45-60k/year",
    location: "UK",
    company: {
      name: "PeopleFirst Ltd.",
      description:
        "PeopleFirst Ltd. is an HR consulting firm that provides talent acquisition, training, and workforce management services to companies across Europe.",
    },
    postedDate: "Sep 15, 2025",
    applicants: 3,
    status: "Active",
    expiryDate: "Oct 15, 2025",
  },
  {
    id: "a105",
    title: "Content Writer",
    type: "Remote",
    description:
      "Create engaging content for blogs, websites, and social media, ensuring consistency with brand voice and style guidelines.",
    salary: "$20-30k/year",
    location: "Australia",
    company: {
      name: "WriteWise Co.",
      description:
        "WriteWise Co. provides content marketing solutions, delivering high-quality writing for businesses and digital agencies globally.",
    },
    postedDate: "Sep 16, 2025",
    applicants: 5,
    status: "Active",
    expiryDate: "Oct 16, 2025",
  },
  {
    id: "a106",
    title: "Mechanical Engineer",
    type: "Full Time",
    description:
      "Design, test, and implement mechanical systems and machinery while ensuring compliance with safety and quality standards.",
    salary: "$70-90k/year",
    location: "India",
    company: {
      name: "MechWorks Pvt. Ltd.",
      description:
        "MechWorks specializes in mechanical engineering solutions for automotive, manufacturing, and energy industries.",
    },
    postedDate: "Sep 17, 2025",
    applicants: 2,
    status: "Active",
    expiryDate: "Oct 17, 2025",
  },
  {
    id: "a107",
    title: "Financial Analyst",
    type: "Full Time",
    description:

      "Analyze financial data, prepare reports, and provide recommendations for investment, budgeting, and financial planning.",
    salary: "$65-85k/year",
    location: "Singapore",
    company: {
      name: "FinancePro Ltd.",
      description:
        "FinancePro Ltd. offers financial consulting services to help businesses and individuals make data-driven financial decisions.",
    },
    postedDate: "Sep 18, 2025",
    applicants: 6,
    status: "Active",
    expiryDate: "Oct 18, 2025",
  },
  {
    id: "a108",
    title: "Customer Support Executive",
    type: "Part Time",
    description:
      "Provide excellent customer service, handle inquiries, and resolve issues promptly across multiple communication channels.",
    salary: "$15-20k/year",
    location: "USA",
    company: {
      name: "HelpDesk Solutions",
      description:
        "HelpDesk Solutions provides outsourced customer support services for companies in IT, e-commerce, and telecommunication sectors.",
    },
    postedDate: "Sep 19, 2025",
    applicants: 7,
    status: "Active",
    expiryDate: "Oct 19, 2025",
  },
];

export default jobsData;