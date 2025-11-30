export const dummyData =[
   {
    universityName: "University of Toronto",
    qsWorldRanking: 29,
    location: "Toronto, Ontario, Canada",
    websiteUrl: "https://www.utoronto.ca",
    contactInformation: [
      "campus.tours@utoronto.ca",
      "+1-416-978-5000"
    ],
    overallScore: 88.5,
    programsOffered: [
      {
        programName: "Honours Bachelor of Science in Computer Science",
        degreeType: "Honours BSc",
        programDuration: "4 Years",
        numberOfSemesters: 8,
        tuition: 64500,          
        generalCosts: 22000,   
        futureRoles: [
          "Software Developer",
          "Data Scientist",
          "Backend Engineer",
          "ML Engineer"
        ],
        averageSalaryExpectations: [
          { name: "Software Developer", averageSalary: 85000 },
          { name: "Data Scientist", averageSalary: 95000 },
          { name: "ML Engineer", averageSalary: 110000 }
        ],
        courses: [
          { courseName: "Introduction to Computer Programming", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Data Structures and Algorithms", semester: 2, credits: 4, courseType: "Core" },
          { courseName: "Operating Systems", semester: 4, credits: 3, courseType: "Core" },
          { courseName: "Database Systems", semester: 5, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.7,   
            others: [
              "High school diploma with advanced math (calculus) and one of physics/computer science",
              "Strong Grade 12 English",
              "English proficiency (e.g., IELTS/TOEFL) for non-native speakers"
            ]
          }
        ],
        redditReviews: [
          "Challenging CS program with heavy theory but amazing research exposure.",
          "Large classes, but great networking and big-tech recruiting presence."
        ],
        userRating: 4.7
      }
    ]
  },

  {
    universityName: "University of British Columbia",
    qsWorldRanking: 40,
    location: "Vancouver, British Columbia, Canada",
    websiteUrl: "https://www.ubc.ca",
    contactInformation: [
      "Undergraduate Admissions (Vancouver): +1-604-822-9836",
      "Toll-free (Canada/US): +1-877-272-1422"
    ],
    overallScore: 85.5,
    programsOffered: [
      {
        programName: "Bachelor of Science in Computer Science",
        degreeType: "BSc",
        programDuration: "4 Years",
        numberOfSemesters: 8,
        tuition: 51041,          
        generalCosts: 21000,    
        futureRoles: [
          "Software Engineer",
          "Full-stack Developer",
          "Data Engineer",
          "Product Developer"
        ],
        averageSalaryExpectations: [
          { name: "Software Engineer", averageSalary: 90000 },
          { name: "Data Engineer", averageSalary: 100000 }
        ],
        courses: [
          { courseName: "Software Construction", semester: 2, credits: 4, courseType: "Core" },
          { courseName: "Algorithms and Data Structures", semester: 3, credits: 4, courseType: "Core" },
          { courseName: "Computer Systems and Architecture", semester: 4, credits: 3, courseType: "Core" },
          { courseName: "Machine Learning Fundamentals", semester: 6, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.6,   // competitive average (low–mid 90s %)
            others: [
              "High school diploma with senior-level Calculus and advanced Math",
              "Recommended senior Physics",
              "English language proficiency (IELTS/TOEFL) for international students"
            ]
          }
        ],
        redditReviews: [
          "Beautiful campus with strong CS reputation and good co-op options.",
          "Coursework can be intense, but there’s a supportive CS community."
        ],
        userRating: 4.6
      }
    ]
  },

  {
    universityName: "McGill University",
    qsWorldRanking: 27,
    location: "Montréal, Québec, Canada",
    websiteUrl: "https://www.mcgill.ca",
    contactInformation: [
      "Undergraduate Service Point: +1-514-398-7878",
      "General emergency line (downtown): +1-514-398-3000"
    ],
    overallScore: 88.9,
    programsOffered: [
      {
        programName: "Bachelor of Science – Major in Computer Science",
        degreeType: "BSc",
        programDuration: "4 Years",
        numberOfSemesters: 8,
        tuition: 61067,          
        generalCosts: 3258,    
        futureRoles: [
          "Software Developer",
          "Research Programmer",
          "Systems Engineer",
          "Data Analyst"
        ],
        averageSalaryExpectations: [
          { name: "Software Developer", averageSalary: 80000 },
          { name: "Systems Engineer", averageSalary: 90000 }
        ],
        courses: [
          { courseName: "Introduction to Computer Science", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Data Structures and Algorithms", semester: 3, credits: 4, courseType: "Core" },
          { courseName: "Programming Languages and Paradigms", semester: 4, credits: 3, courseType: "Core" },
          { courseName: "Artificial Intelligence", semester: 6, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.6,
            others: [
              "High school diploma with strong marks in advanced Math and one of Physics/Chemistry",
              "Proof of English proficiency for non-Anglophone systems",
              "Competitive overall average (typically high 80s–90s%)"
            ]
          }
        ],
        redditReviews: [
          "Rigorous CS with a strong theoretical backbone and great grad school prep.",
          "Campus location in downtown Montreal is a big plus, but winters are harsh!"
        ],
        userRating: 4.7
      }
    ]
  },

  {
    universityName: "University of Waterloo",
    qsWorldRanking: 123,
    location: "Waterloo, Ontario, Canada",
    websiteUrl: "https://uwaterloo.ca",
    contactInformation: [
      "askthecentre@uwaterloo.ca",
      "+1-519-888-4567"
    ],
    overallScore: 65.7,
    programsOffered: [
      {
        programName: "Bachelor of Computer Science (Co-op)",
        degreeType: "BCS",
        programDuration: "4–5 Years (with co-op)",
        numberOfSemesters: 8,
        tuition: 73000,          // two terms per year, intl CS (CAD)
        generalCosts: 20000,     // est. housing, food, incidental, books
        futureRoles: [
          "Software Developer",
          "Backend/Infrastructure Engineer",
          "Security Engineer",
          "Quantitative Developer"
        ],
        averageSalaryExpectations: [
          { name: "Software Developer", averageSalary: 90000 },
          { name: "Backend Engineer", averageSalary: 95000 },
          { name: "Security Engineer", averageSalary: 100000 }
        ],
        courses: [
          { courseName: "Designing Functional Programs", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Data Structures and Data Management", semester: 2, credits: 3, courseType: "Core" },
          { courseName: "Algorithm Design and Analysis", semester: 4, credits: 3, courseType: "Core" },
          { courseName: "Distributed Systems", semester: 6, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.8,   // very competitive, often mid–high 90s %
            others: [
              "High school diploma with advanced functions, calculus and vectors",
              "Senior-level courses in math-heavy subjects strongly recommended",
              "English proficiency (IELTS/TOEFL) and strong supplementary application profile"
            ]
          }
        ],
        redditReviews: [
          "Waterloo CS is co-op heavy — amazing industry exposure but very competitive.",
          "Huge tech pipeline to FAANG/fintech; workload and stress levels are high."
        ],
        userRating: 4.8
      }
    ]
  },

  {
    universityName: "Simon Fraser University",
    qsWorldRanking: 308,
    location: "Burnaby, British Columbia, Canada",
    websiteUrl: "https://www.sfu.ca",
    contactInformation: [
      "reginfo@sfu.ca",
      "+1-778-782-6930"
    ],
    overallScore: 34.9,   // QS overall score from rankings sheet
    programsOffered: [
      {
        programName: "Bachelor of Science in Computing Science",
        degreeType: "BSc",
        programDuration: "4 Years",
        numberOfSemesters: 8,
        tuition: 37442,          // intl tuition+fees per year (CAD)
        generalCosts: 17379,     // textbooks + residence + insurance (approx)
        futureRoles: [
          "Software Developer",
          "Mobile App Developer",
          "Game Developer",
          "DevOps Engineer"
        ],
        averageSalaryExpectations: [
          { name: "Software Developer", averageSalary: 80000 },
          { name: "DevOps Engineer", averageSalary: 95000 }
        ],
        courses: [
          { courseName: "Introduction to Computing Science and Programming", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Data Structures and Algorithms", semester: 3, credits: 4, courseType: "Core" },
          { courseName: "Operating Systems I", semester: 4, credits: 3, courseType: "Core" },
          { courseName: "Web-based Information Systems", semester: 6, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.3,
            others: [
              "High school diploma with precalculus and senior-level Math",
              "Recommended senior Physics or Computing course",
              "English language proficiency for international students"
            ]
          }
        ],
        redditReviews: [
          "Strong computing program with a good balance between theory and applied courses.",
          "Burnaby campus is scenic; commuting and hills can be a downside for some."
        ],
        userRating: 4.3
      }
    ]
  }, 

  {
    universityName: "University of Waterloo",
    qsWorldRanking: 78,
    location: "Waterloo, Ontario, Canada",
    websiteUrl: "https://uwaterloo.ca/civil-environmental-engineering",
    contactInformation: ["ce.grad@uwaterloo.ca", "+1-519-888-4567"],
    overallScore: 82.0,
    programsOffered: [
      {
        programName: "Master of Engineering in Civil Engineering",
        degreeType: "MASc",
        programDuration: "24 Months",
        numberOfSemesters: 4,
        tuition: 19500,
        generalCosts: 18000,
        futureRoles: [
          "Structural Engineer",
          "Transportation Engineer",
          "Geotechnical Engineer"
        ],
        averageSalaryExpectations: [
          { name: "Structural Engineer", averageSalary: 90000 }
        ],
        courses: [
          { courseName: "Advanced Structural Analysis", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Pavement Engineering", semester: 2, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.2,
            others: [
              "Bachelor’s degree in Civil Engineering",
              "Transcripts",
              "Statement of Purpose",
              "Letters of Recommendation"
            ]
          }
        ],
        redditReviews: ["Excellent research opportunities and co-op culture."],
        userRating: 4.4
      }
    ]
  },

  {
    universityName: "University of British Columbia",
    qsWorldRanking: 44,
    location: "Vancouver, British Columbia, Canada",
    websiteUrl: "https://civil.ubc.ca",
    contactInformation: ["civil.grad@ubc.ca", "+1-604-822-2211"],
    overallScore: 85.0,
    programsOffered: [
      {
        programName: "Master of Engineering in Civil Engineering",
        degreeType: "MEng",
        programDuration: "18 Months",
        numberOfSemesters: 3,
        tuition: 29000,
        generalCosts: 22000,
        futureRoles: [
          "Environmental Engineer",
          "Structural Analyst",
          "Hydrology Specialist"
        ],
        averageSalaryExpectations: [
          { name: "Environmental Engineer", averageSalary: 85000 }
        ],
        courses: [
          { courseName: "Advanced Hydraulics", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Construction Project Management", semester: 2, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.0,
            others: [
              "Bachelor’s degree in Engineering",
              "Resume",
              "Statement of Purpose"
            ]
          }
        ],
        redditReviews: ["Strong environmental engineering specialization."],
        userRating: 4.3
      }
    ]
  },

  {
    universityName: "McGill University",
    qsWorldRanking: 30,
    location: "Montreal, Quebec, Canada",
    websiteUrl: "https://www.mcgill.ca/civil",
    contactInformation: ["civil.grad@mcgill.ca", "+1-514-398-3000"],
    overallScore: 87.0,
    programsOffered: [
      {
        programName: "Master of Engineering in Civil Engineering",
        degreeType: "MEng",
        programDuration: "24 Months",
        numberOfSemesters: 4,
        tuition: 32000,
        generalCosts: 20000,
        futureRoles: [
          "Water Resources Engineer",
          "Infrastructure Engineer",
          "Construction Engineer"
        ],
        averageSalaryExpectations: [
          { name: "Infrastructure Engineer", averageSalary: 88000 }
        ],
        courses: [
          { courseName: "Finite Element Methods", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Urban Infrastructure Systems", semester: 2, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.2,
            others: [
              "Bachelor’s degree in Civil Engineering",
              "Transcripts",
              "Statement of Purpose",
              "2 Letters of Recommendation"
            ]
          }
        ],
        redditReviews: ["Great research labs and strong faculty."],
        userRating: 4.5
      }
    ]
  },

  {
    universityName: "University of Toronto",
    qsWorldRanking: 21,
    location: "Toronto, Ontario, Canada",
    websiteUrl: "https://civmin.utoronto.ca",
    contactInformation: ["civ.grad@utoronto.ca", "+1-416-978-0123"],
    overallScore: 89.0,
    programsOffered: [
      {
        programName: "Master of Engineering in Civil Engineering",
        degreeType: "MEng",
        programDuration: "12–24 Months",
        numberOfSemesters: 3,
        tuition: 35000,
        generalCosts: 22000,
        futureRoles: [
          "Project Engineer",
          "Structural Designer",
          "Traffic & Transportation Engineer"
        ],
        averageSalaryExpectations: [
          { name: "Project Engineer", averageSalary: 92000 }
        ],
        courses: [
          { courseName: "Bridge Engineering", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Traffic Flow Theory", semester: 2, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.3,
            others: [
              "Bachelor’s degree in Civil Engineering",
              "Resume",
              "Statement of Purpose",
              "Transcripts"
            ]
          }
        ],
        redditReviews: ["Strong industry connections; heavy workload."],
        userRating: 4.6
      }
    ]
  },

  {
    universityName: "Concordia University",
    qsWorldRanking: 387,
    location: "Montreal, Quebec, Canada",
    websiteUrl: "https://www.concordia.ca",
    contactInformation: ["gradcivil@concordia.ca", "+1-514-848-2424"],
    overallScore: 72.0,
    programsOffered: [
      {
        programName: "Master of Applied Science in Civil Engineering",
        degreeType: "MASc",
        programDuration: "24 Months",
        numberOfSemesters: 4,
        tuition: 19000,
        generalCosts: 17000,
        futureRoles: [
          "Construction Project Manager",
          "Materials Engineer",
          "Structural Analyst"
        ],
        averageSalaryExpectations: [
          { name: "Construction Project Manager", averageSalary: 95000 }
        ],
        courses: [
          { courseName: "Advanced Concrete Technology", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Soil Mechanics II", semester: 2, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.0,
            others: [
              "Bachelor’s degree in Engineering",
              "CV/Resume",
              "Recommendation Letters",
              "Transcripts"
            ]
          }
        ],
        redditReviews: ["Affordable tuition and strong course variety."],
        userRating: 4.1
      }
    ]
  }, 

   {
    universityName: "University of British Columbia",
    qsWorldRanking: 44,    // QS global ranking 2026 for UBC :contentReference[oaicite:0]{index=0}
    location: "Vancouver, British Columbia, Canada",
    websiteUrl: "https://www.grad.ubc.ca/programs/master-of-public-health",  // UBC MPH page :contentReference[oaicite:1]{index=1}
    contactInformation: ["spph.admissions@ubc.ca", "+1-604-822-2211"],
    overallScore: 85.0,    // approximate score for ranking/comparison
    programsOffered: [
      {
        programName: "Master of Public Health",
        degreeType: "MPH",
        programDuration: "24 Months",   // 2-year course-based MPH at UBC :contentReference[oaicite:2]{index=2}
        numberOfSemesters: 4,
        tuition: 26000,     // estimated, approximate average for Canadian MPH tuition band
        generalCosts: 20000,   // dummy estimate for living + fees + books
        futureRoles: [
          "Public Health Officer",
          "Epidemiologist",
          "Health Policy Analyst"
        ],
        averageSalaryExpectations: [
          { name: "Public Health Officer", averageSalary: 75000 }
        ],
        courses: [
          { courseName: "Epidemiology & Biostatistics", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Environmental & Global Health", semester: 2, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          { gpa: 3.0, others: ["Bachelor’s degree", "Transcripts", "Statement of Purpose", "References"] }
        ],
        redditReviews: ["Good balance of academic rigor and Vancouver lifestyle."],
        userRating: 4.3
      }
    ]
  },

  {
    universityName: "Western University – Schulich School of Medicine & Dentistry",
    qsWorldRanking: 172,  // approximate global ranking band for Western University :contentReference[oaicite:3]{index=3}
    location: "London, Ontario, Canada",
    websiteUrl: "https://www.schulich.uwo.ca/publichealth/",  // Western MPH page :contentReference[oaicite:4]{index=4}
    contactInformation: ["publichealth@schulich.uwo.ca", "+1-519-661-3184"],
    overallScore: 78.0,
    programsOffered: [
      {
        programName: "Master of Public Health",
        degreeType: "MPH",
        programDuration: "12 Months",   // accelerated 1-year MPH as per school info :contentReference[oaicite:5]{index=5}
        numberOfSemesters: 2,
        tuition: 24000,     // approximate estimate for 1-year MPH
        generalCosts: 18000,
        futureRoles: [
          "Community Health Coordinator",
          "Public Health Researcher",
          "Health Program Manager"
        ],
        averageSalaryExpectations: [
          { name: "Health Program Manager", averageSalary: 70000 }
        ],
        courses: [
          { courseName: "Foundations of Public Health Practice", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Health Policy & Management", semester: 1, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          { gpa: 3.0, others: ["Bachelor’s degree", "Résumé/CV", "Statement of Purpose", "References", "Interview"] }
        ],
        redditReviews: ["Good for students who want a quick MPH and start working early."],
        userRating: 4.2
      }
    ]
  },

  {
    universityName: "University of Manitoba",
    qsWorldRanking: 401,  // approximate world ranking band :contentReference[oaicite:6]{index=6}
    location: "Winnipeg, Manitoba, Canada",
    websiteUrl: "https://umanitoba.ca/graduate-studies/programs/community-health-sciences-mph", // as per public info :contentReference[oaicite:7]{index=7}
    contactInformation: ["gradstudies@umanitoba.ca", "+1-204-474-9310"],
    overallScore: 60.0,
    programsOffered: [
      {
        programName: "Master of Public Health",
        degreeType: "MPH",
        programDuration: "24 Months",   // 2-year MPH program :contentReference[oaicite:8]{index=8}
        numberOfSemesters: 4,
        tuition: 22000,     // approximate estimate for Canadian MPH tuition
        generalCosts: 17000,
        futureRoles: [
          "Epidemiologist",
          "Public Health Analyst",
          "Health Promotion Specialist"
        ],
        averageSalaryExpectations: [
          { name: "Public Health Analyst", averageSalary: 68000 }
        ],
        courses: [
          { courseName: "Core Public Health Concepts", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Applied Epidemiology", semester: 2, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          { gpa: 3.0, others: ["Bachelor’s degree (health sciences or related)", "Transcripts", "Statement of Purpose", "2 References"] }
        ],
        redditReviews: ["Smaller cohort and good hands-on experience with community health projects."],
        userRating: 4.1
      }
    ]
  },

  {
    universityName: "McMaster University",
    qsWorldRanking: 152,  // approximate global ranking for McMaster :contentReference[oaicite:9]{index=9}
    location: "Hamilton, Ontario, Canada",
    websiteUrl: "https://mph.healthsci.mcmaster.ca",  // McMaster MPH page :contentReference[oaicite:10]{index=10}
    contactInformation: ["mph@healthsci.mcmaster.ca", "+1-905-525-9140"],
    overallScore: 75.0,
    programsOffered: [
      {
        programName: "Master of Public Health",
        degreeType: "MPH",
        programDuration: "24 Months",   // standard MPH duration
        numberOfSemesters: 4,
        tuition: 25000,     // approximate estimate
        generalCosts: 18000,
        futureRoles: [
          "Health Policy Advisor",
          "Global Health Specialist",
          "Public Health Researcher"
        ],
        averageSalaryExpectations: [
          { name: "Health Policy Advisor", averageSalary: 70000 }
        ],
        courses: [
          { courseName: "Global Health & Epidemiology", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Health Systems & Policy", semester: 2, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          { gpa: 3.0, others: ["Bachelor’s degree", "Transcripts", "Statement of Purpose", "References", "Resume"] }
        ],
        redditReviews: ["Balanced academics with research and fieldwork opportunities."],
        userRating: 4.2
      }
    ]
  },

  {
    universityName: "Queen’s University",
    qsWorldRanking: 201,  // approximate ranking band :contentReference[oaicite:11]{index=11}
    location: "Kingston, Ontario, Canada",
    websiteUrl: "https://phs.queensu.ca/programs-courses/degree-programs/master-public-health",  // Queen’s MPH page :contentReference[oaicite:12]{index=12}
    contactInformation: ["mph@queensu.ca", "+1-613-533-2000"],
    overallScore: 70.0,
    programsOffered: [
      {
        programName: "Master of Public Health",
        degreeType: "MPH",
        programDuration: "24 Months",  
        numberOfSemesters: 4,
        tuition: 23000,     // approximate estimate
        generalCosts: 17000,
        futureRoles: [
          "Public Health Consultant",
          "Community Health Officer",
          "Health Data Analyst"
        ],
        averageSalaryExpectations: [
          { name: "Public Health Consultant", averageSalary: 72000 }
        ],
        courses: [
          { courseName: "Epidemiology and Population Health", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Health Policy & Ethics", semester: 2, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          { gpa: 3.0, others: ["Bachelor’s degree", "Transcripts", "Statement of Purpose", "2 References"] }
        ],
        redditReviews: ["Good mix of policy, research, and community-health focus."],
        userRating: 4.1
      }
    ]
  }, 

   {
    universityName: "University of Waterloo",
    qsWorldRanking: 78,                     // approximate subject-based rank per sources :contentReference[oaicite:1]{index=1}
    location: "Waterloo, Ontario, Canada",
    websiteUrl: "https://uwaterloo.ca/engineering",   // base engineering faculty site
    contactInformation: ["engineering.grad@uwaterloo.ca", "+1-519-888-4567"],  // placeholder contact
    overallScore: 80.0,                     // dummy overall score for comparison
    programsOffered: [
      {
        programName: "Master of Applied Science in Mechanical and Mechatronics Engineering",
        degreeType: "MASc",
        programDuration: "24 Months",
        numberOfSemesters: 4,
        tuition: 20000,                     // rough typical international-student estimate :contentReference[oaicite:2]{index=2}
        generalCosts: 18000,               // dummy estimate for living & misc
        futureRoles: ["Mechanical Design Engineer", "R&D Engineer", "Systems Engineer"],
        averageSalaryExpectations: [
          { name: "Mechanical Design Engineer", averageSalary: 85000 }
        ],
        courses: [
          { courseName: "Advanced Solid Mechanics", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Thermofluid Systems", semester: 2, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          { gpa: 3.2, others: ["B.Eng or equivalent in Mechanical/Mechatronics", "Transcripts", "Statement of Purpose", "References"] }
        ],
        redditReviews: ["Strong co-op culture and industry links.", "Great for research + industrial placements."],
        userRating: 4.4
      }
    ]
  },

  {
    universityName: "McGill University",
    qsWorldRanking: 30,
    location: "Montreal, Quebec, Canada",
    websiteUrl: "https://www.mcgill.ca/engineering",
    contactInformation: ["engin.grad@mcgill.ca", "+1-514-398-3000"],
    overallScore: 87.0,
    programsOffered: [
      {
        programName: "Master of Engineering in Mechanical Engineering (MEng / MSc)",
        degreeType: "MEng",
        programDuration: "18 Months",
        numberOfSemesters: 3,
        tuition: 33000,                     // approximate based on typical Canadian tuition reference :contentReference[oaicite:3]{index=3}
        generalCosts: 20000,
        futureRoles: ["Product Development Engineer", "Aerospace Engineer", "Quality Assurance Engineer"],
        averageSalaryExpectations: [
          { name: "Product Development Engineer", averageSalary: 90000 }
        ],
        courses: [
          { courseName: "Dynamics & Control", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Materials Engineering", semester: 2, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          { gpa: 3.3, others: ["B.Eng or B.Sc in Mechanical or related discipline", "Transcripts", "Statement of Purpose", "Letters of Reference"] }
        ],
        redditReviews: ["Good balance of academics with Montreal lifestyle.", "Strong lab and research opportunities."],
        userRating: 4.5
      }
    ]
  },

  {
    universityName: "University of British Columbia (UBC)",
    qsWorldRanking: 44,
    location: "Vancouver, British Columbia, Canada",
    websiteUrl: "https://www.ubc.ca",
    contactInformation: ["me.grad@ubc.ca", "+1-604-822-2211"],
    overallScore: 85.0,
    programsOffered: [
      {
        programName: "Master of Applied Science in Mechanical Engineering (MEng / MASc)",
        degreeType: "MASc",
        programDuration: "24 Months",
        numberOfSemesters: 4,
        tuition: 26000,                     // rough estimate per typical Canadian master’s engineering range :contentReference[oaicite:4]{index=4}
        generalCosts: 22000,
        futureRoles: ["Energy Systems Engineer", "Thermofluids Engineer", "R&D Specialist"],
        averageSalaryExpectations: [
          { name: "Energy Systems Engineer", averageSalary: 88000 }
        ],
        courses: [
          { courseName: "Fluid Mechanics & Heat Transfer", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Finite Element Analysis", semester: 2, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          { gpa: 3.2, others: ["Undergraduate in Engineering or Sciences", "Transcripts", "Statement of Purpose", "References"] }
        ],
        redditReviews: ["Strong research output and good campus life.", "Good for those interested in energy / sustainability sectors."],
        userRating: 4.3
      }
    ]
  },

  {
    universityName: "Dalhousie University",
    qsWorldRanking: 401,      // Approximate, outside top-400; using lower score for ranking gauge :contentReference[oaicite:5]{index=5}
    location: "Halifax, Nova Scotia, Canada",
    websiteUrl: "https://www.dal.ca/faculty/engineering.html",
    contactInformation: ["gradstudies.eng@dal.ca", "+1-902-494-3000"],
    overallScore: 60.0,
    programsOffered: [
      {
        programName: "Master of Engineering in Mechanical Engineering (MEng)",
        degreeType: "MEng",
        programDuration: "18 Months",
        numberOfSemesters: 3,
        tuition: 25000,                     // reasonable estimate within Canada’s master’s engineering tuition band :contentReference[oaicite:6]{index=6}
        generalCosts: 18000,
        futureRoles: ["Manufacturing Engineer", "Automotive Engineer", "Mechanical Design Engineer"],
        averageSalaryExpectations: [
          { name: "Manufacturing Engineer", averageSalary: 78000 }
        ],
        courses: [
          { courseName: "Mechanical Systems Design", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Robotics & Dynamics", semester: 2, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          { gpa: 3.0, others: ["Bachelor’s degree in Mechanical/Related Engineering", "Transcripts", "Statement of Purpose", "References"] }
        ],
        redditReviews: ["Smaller cohort size, good for individual attention.", "Good mix of theory and applied engineering."],
        userRating: 4.0
      }
    ]
  },

  {
    universityName: "University of Manitoba",
    qsWorldRanking: 151,      // approximate subject/world rank band :contentReference[oaicite:7]{index=7}
    location: "Winnipeg, Manitoba, Canada",
    websiteUrl: "https://umanitoba.ca/faculties/engineering",
    contactInformation: ["mech.grad@umanitoba.ca", "+1-204-474-7311"],
    overallScore: 70.0,
    programsOffered: [
      {
        programName: "Master of Science in Mechanical Engineering (MSc/MEng)",
        degreeType: "MSc",
        programDuration: "24 Months",
        numberOfSemesters: 4,
        tuition: 24000,                     // ballpark estimate inside typical Canadian master’s fee range :contentReference[oaicite:8]{index=8}
        generalCosts: 17000,
        futureRoles: ["Research Engineer", "Thermal Systems Engineer", "Materials Engineer"],
        averageSalaryExpectations: [
          { name: "Research Engineer", averageSalary: 80000 }
        ],
        courses: [
          { courseName: "Advanced Materials Engineering", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Heat Transfer and Thermodynamics", semester: 2, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          { gpa: 3.0, others: ["Undergraduate Engineering degree", "Transcripts", "Statement of Purpose", "References"] }
        ],
        redditReviews: ["Good for research-focused students; campus is friendly and accessible."],
        userRating: 4.1
      }
    ]
  }, 

   {
    universityName: "University of Toronto – Rotman School of Management",
    qsWorldRanking: 21,
    location: "Toronto, Ontario, Canada",
    websiteUrl: "https://www.rotman.utoronto.ca",
    contactInformation: ["mba@rotman.utoronto.ca", "+1-416-978-5703"],
    overallScore: 88.0,
    programsOffered: [
      {
        programName: "Full-Time MBA",
        degreeType: "MBA",
        programDuration: "20 Months",
        numberOfSemesters: 4,
        tuition: 133740,             // public data for international MBA tuition :contentReference[oaicite:0]{index=0}
        generalCosts: 25000,         // dummy estimate (living, books, incidental)  
        futureRoles: [
          "Management Consultant",
          "Product Manager",
          "Business Analyst",
          "Strategy Manager"
        ],
        averageSalaryExpectations: [
          { name: "Management Consultant", averageSalary: 110000 },
          { name: "Product Manager", averageSalary: 105000 }
        ],
        courses: [
          { courseName: "Strategic Management", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Economic Analysis and Policy", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Financial Accounting for Managers", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "International Strategy", semester: 2, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          { gpa: 3.2, others: ["Bachelor’s degree", "GMAT/GRE", "Resume/CV", "Statement of Purpose", "Work experience 2+ years"] }
        ],
        redditReviews: [
          "Very intensive program but great global reputation and internship opportunities.", 
          "Strong alumni network and exposure to big consulting firms."
        ],
        userRating: 4.6
      }
    ]
  },

  {
    universityName: "University of British Columbia – Sauder School of Business",
    qsWorldRanking: 34,
    location: "Vancouver, British Columbia, Canada",
    websiteUrl: "https://www.sauder.ubc.ca",
    contactInformation: ["mba.admissions@sauder.ubc.ca", "+1-604-822-8400"],
    overallScore: 83.5,
    programsOffered: [
      {
        programName: "Full-Time MBA",
        degreeType: "MBA",
        programDuration: "16 Months",
        numberOfSemesters: 3,
        tuition: 108421,              // international MBA tuition per UBC site :contentReference[oaicite:1]{index=1}
        generalCosts: 22000,          // dummy estimate (living, books, fees)  
        futureRoles: [
          "Consultant",
          "Product Manager",
          "Finance Manager",
          "Operations Manager"
        ],
        averageSalaryExpectations: [
          { name: "Consultant", averageSalary: 100000 },
          { name: "Product Manager", averageSalary: 95000 }
        ],
        courses: [
          { courseName: "Managerial Economics", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Marketing Strategy", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Sustainable Business & Ethics", semester: 2, credits: 3, courseType: "Elective" },
          { courseName: "Technology Management", semester: 2, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          { gpa: 3.0, others: ["Bachelor’s degree", "GMAT/GRE (or waiver)", "Resume", "Letters of Recommendation", "Statement of Purpose"] }
        ],
        redditReviews: [
          "Good balance between work–life and studies with strong emphasis on sustainability and global business.", 
          "Vancouver campus is beautiful but cost of living rises fast."
        ],
        userRating: 4.4
      }
    ]
  },

  {
    universityName: "McGill University – Desautels Faculty of Management",
    qsWorldRanking: 30,
    location: "Montreal, Quebec, Canada",
    websiteUrl: "https://www.mcgill.ca/desautels",
    contactInformation: ["mba@mcgill.ca", "+1-514-398-4066"],
    overallScore: 86.5,
    programsOffered: [
      {
        programName: "MBA (Full-Time)",
        degreeType: "MBA",
        programDuration: "12–20 Months",
        numberOfSemesters: 4,
        tuition: 99500,               // intl MBA tuition per ranking lists :contentReference[oaicite:2]{index=2}
        generalCosts: 20000,          // dummy estimate  
        futureRoles: [
          "Business Consultant",
          "Finance Manager",
          "Entrepreneur / Startup Founder",
          "Business Analyst"
        ],
        averageSalaryExpectations: [
          { name: "Finance Manager", averageSalary: 98000 },
          { name: "Business Consultant", averageSalary: 100000 }
        ],
        courses: [
          { courseName: "Global Strategy", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Financial Reporting & Analysis", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Business Analytics", semester: 2, credits: 3, courseType: "Elective" },
          { courseName: "Entrepreneurship & Innovation", semester: 3, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          { gpa: 3.1, others: ["Bachelor’s degree", "GMAT/GRE", "Resume", "LORs", "Statement of Purpose"] }
        ],
        redditReviews: [
          "Good for international exposure and bilingual environment (English / French).", 
          "Montreal has a lower cost of living compared to Toronto/Vancouver — nice plus."
        ],
        userRating: 4.3
      }
    ]
  },

  {
    universityName: "Queen’s University – Smith School of Business",
    qsWorldRanking: 210,
    location: "Kingston, Ontario, Canada",
    websiteUrl: "https://smith.queensu.ca",
    contactInformation: ["mba@queensu.ca", "+1-613-533-2301"],
    overallScore: 75.0,
    programsOffered: [
      {
        programName: "Full-Time MBA",
        degreeType: "MBA",
        programDuration: "12 Months",
        numberOfSemesters: 3,
        tuition: 105100,              // as per comparative ranking list :contentReference[oaicite:3]{index=3}
        generalCosts: 18000,          // dummy estimate  
        futureRoles: [
          "Operations Manager",
          "Business Strategy Analyst",
          "Product Manager",
          "Consultant"
        ],
        averageSalaryExpectations: [
          { name: "Business Strategy Analyst", averageSalary: 90000 },
          { name: "Consultant", averageSalary: 95000 }
        ],
        courses: [
          { courseName: "Managerial Decision Making", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Corporate Finance", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Business Analytics & Data-Driven Management", semester: 2, credits: 3, courseType: "Elective" },
          { courseName: "Entrepreneurship & Innovation", semester: 2, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          { gpa: 3.0, others: ["Bachelor’s degree", "GMAT/GRE", "Resume", "LORs", "Statement of Purpose", "Work experience (preferred)"] }
        ],
        redditReviews: [
          "Fast, intensive MBA — good for those who want to finish quickly and enter the market.", 
          "Tight schedule but strong placements in consulting/finance."
        ],
        userRating: 4.2
      }
    ]
  },

  {
    universityName: "Western University – Ivey Business School",
    qsWorldRanking: 114,
    location: "London, Ontario, Canada",
    websiteUrl: "https://www.ivey.uwo.ca",
    contactInformation: ["mba@ivey.ca", "+1-519-661-3212"],
    overallScore: 78.0,
    programsOffered: [
      {
        programName: "Ivey MBA (Full-Time)",
        degreeType: "MBA",
        programDuration: "12 Months",
        numberOfSemesters: 3,
        tuition: 120500,              // listed in MBA comparison rankings :contentReference[oaicite:4]{index=4}
        generalCosts: 20000,          // dummy estimate  
        futureRoles: [
          "Consultant",
          "Strategy Manager",
          "Business Manager",
          "Product Manager"
        ],
        averageSalaryExpectations: [
          { name: "Consultant", averageSalary: 105000 },
          { name: "Business Manager", averageSalary: 100000 }
        ],
        courses: [
          { courseName: "Case-Based Strategic Management", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Organizational Behaviour & Leadership", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Corporate Finance & Valuation", semester: 2, credits: 3, courseType: "Core" },
          { courseName: "Entrepreneurship and New Venture Creation", semester: 2, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          { gpa: 3.0, others: ["Bachelor’s degree", "GMAT/GRE (if required)", "Resume", "LORs", "Statement of Purpose", "Relevant work experience"] }
        ],
        redditReviews: [
          "Very intensive and case-method driven — good for self-driven students.", 
          "High recruiter interest from consulting/finance firms; workload is heavy though."
        ],
        userRating: 4.4
      }
    ]
  }, 

   {
    universityName: "University of Toronto – Mississauga",
    qsWorldRanking: 29,                          // QS World University Rankings 2026 :contentReference[oaicite:0]{index=0}
    location: "Mississauga, Ontario, Canada",
    websiteUrl: "https://www.utm.utoronto.ca/mbiotech",
    contactInformation: ["info.utm@utoronto.ca", "+1-905-828-5400"],
    overallScore: 88.5,                          // QS overall score (approx) :contentReference[oaicite:1]{index=1}
    programsOffered: [
      {
        programName: "Master of Biotechnology",
        degreeType: "MBiotech",
        programDuration: "24 Months",           // 24-month course-based program :contentReference[oaicite:2]{index=2}
        numberOfSemesters: 4,
        // Older UofT tuition report showed total MBiotech tuition in the ~50k CAD range; using a rounded, realistic figure. :contentReference[oaicite:3]{index=3}
        tuition: 52000,
        generalCosts: 20000,                    // living + books (dummy, but reasonable)
        futureRoles: [
          "Biotech Product Manager",
          "Research Scientist",
          "Clinical Research Associate"
        ],
        averageSalaryExpectations: [
          { name: "Biotech Product Manager", averageSalary: 95000 }
        ],
        courses: [
          { courseName: "Biotechnology Industry & Business", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Advanced Molecular Biotechnology", semester: 1, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          {
            gpa: 3.0,                           // approximated from “minimum mid-B average” :contentReference[oaicite:4]{index=4}
            others: [
              "4-year Bachelor's degree in Biology/Biochemistry or related field",
              "Official transcripts",
              "Statement of Purpose",
              "2 Letters of Recommendation",
              "English proficiency (IELTS/TOEFL) for international students"
            ]
          }
        ],
        redditReviews: [
          "Strong mix of science and business with valuable co-op exposure."
        ],
        userRating: 4.6
      }
    ]
  },

  {
    universityName: "University of Guelph",
    qsWorldRanking: 504,                        // QS WUR 2026: =504 :contentReference[oaicite:5]{index=5}
    location: "Guelph, Ontario, Canada",
    websiteUrl: "https://www.uoguelph.ca/programs/master-of-biotechnology",
    contactInformation: ["gradstudies@uoguelph.ca", "+1-519-824-4120"],
    overallScore: 32.0,                         // QS overall score for Guelph :contentReference[oaicite:6]{index=6}
    programsOffered: [
      {
        programName: "Master of Biotechnology",
        degreeType: "M.Biotech",
        programDuration: "24 Months",           // 2-year program :contentReference[oaicite:7]{index=7}
        numberOfSemesters: 4,
        // International graduate tuition for Master of Biotechnology per Guelph fee table. :contentReference[oaicite:8]{index=8}
        tuition: 35725,
        generalCosts: 16000,                    // approx living+fees (dummy)
        futureRoles: [
          "Process Development Scientist",
          "Quality Assurance Specialist",
          "Regulatory Affairs Associate"
        ],
        averageSalaryExpectations: [
          { name: "Process Development Scientist", averageSalary: 80000 }
        ],
        courses: [
          { courseName: "Bioprocess Engineering Fundamentals", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Biotechnology Commercialization", semester: 2, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.0,
            others: [
              "Honours Bachelor's degree in a relevant life science discipline",
              "Academic transcripts",
              "Statement of Intent",
              "2 Academic References",
              "Proof of English proficiency (if applicable)"
            ]
          }
        ],
        redditReviews: [
          "Good balance of lab training and business exposure; Guelph is a very student-friendly town."
        ],
        userRating: 4.3
      }
    ]
  },

  {
    universityName: "McGill University",
    qsWorldRanking: 27,                         // QS WUR 2026 rank & score :contentReference[oaicite:9]{index=9}
    location: "Montreal, Quebec, Canada",
    websiteUrl: "https://www.mcgill.ca/biotechgradprog",
    contactInformation: ["gradstudies.macdonald@mcgill.ca", "+1-514-398-3990"],
    overallScore: 88.9,
    programsOffered: [
      {
        programName: "Master of Biotechnology",
        degreeType: "MScA",
        programDuration: "16 Months",           // MScA Biotechnology duration :contentReference[oaicite:10]{index=10}
        numberOfSemesters: 3,
        // External estimate for MScA Biotechnology 1st-year tuition in CAD. :contentReference[oaicite:11]{index=11}
        tuition: 29010,
        generalCosts: 18000,                    // living+fees (dummy)
        futureRoles: [
          "Industrial Biotechnologist",
          "Pharmaceutical Research Scientist",
          "Bioprocess Analyst"
        ],
        averageSalaryExpectations: [
          { name: "Industrial Biotechnologist", averageSalary: 82000 }
        ],
        courses: [
          { courseName: "Laboratory Techniques in Biotechnology", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Biotechnology Management & Ethics", semester: 2, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          {
            gpa: 3.0,
            others: [
              "Bachelor’s degree in Biological Sciences or related field",
              "Transcripts",
              "Curriculum Vitae",
              "2 Letters of Reference",
              "Statement of Research/Professional Interests"
            ]
          }
        ],
        redditReviews: [
          "Program is intensive but offers solid lab exposure and a useful internship component."
        ],
        userRating: 4.4
      }
    ]
  },

  {
    universityName: "University of British Columbia – Okanagan",
    qsWorldRanking: 40,                         // UBC overall rank in QS WUR 2026 :contentReference[oaicite:12]{index=12}
    location: "Kelowna, British Columbia, Canada",
    websiteUrl: "https://biology.ok.ubc.ca/graduate/biotechnology/",
    contactInformation: ["ubco.grad@ubc.ca", "+1-250-807-8000"],
    // Overall QS score not shown in snippet; ~82 is a reasonable approximation inferred from ranking. :contentReference[oaicite:13]{index=13}
    overallScore: 82.0,
    programsOffered: [
      {
        programName: "Master of Biotechnology",
        degreeType: "MBtec",
        programDuration: "16 Months",           // 16-month, course-based master’s program :contentReference[oaicite:14]{index=14}
        numberOfSemesters: 3,
        // Using per-instalment international Master’s fee * 4 as a simple approximation. :contentReference[oaicite:15]{index=15}
        tuition: 26000,
        generalCosts: 19000,                    // living+fees (dummy)
        futureRoles: [
          "Biotechnology Lab Manager",
          "Bioprocess Engineer",
          "R&D Scientist"
        ],
        averageSalaryExpectations: [
          { name: "Bioprocess Engineer", averageSalary: 90000 }
        ],
        courses: [
          { courseName: "Core Concepts in Biotechnology", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Project Management in Life Sciences", semester: 2, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          {
            gpa: 3.0,
            others: [
              "Bachelor's degree in Biology, Biochemistry, Chemistry or related field",
              "Statement of Intent",
              "Academic References",
              "English language proficiency (IELTS/TOEFL) for non-native speakers"
            ]
          }
        ],
        redditReviews: [
          "Smaller campus with good faculty access; new program so cohort sizes are relatively small."
        ],
        userRating: 4.2
      }
    ]
  },

  {
    universityName: "Brock University",
    // QS gives Brock a band of 1201–1400; using a midpoint (1300) as a numeric placeholder. :contentReference[oaicite:16]{index=16}
    qsWorldRanking: 1300,
    location: "St. Catharines, Ontario, Canada",
    websiteUrl: "https://brocku.ca/programs/graduate/msc-btec/",
    contactInformation: ["graduate.students@brocku.ca", "+1-905-688-5550"],
    // Overall score not provided; 20 is a light dummy just to keep field non-empty.
    overallScore: 20.0,
    programsOffered: [
      {
        programName: "Master of Biotechnology",
        degreeType: "MSc",
        programDuration: "24 Months",           // MSc Biotechnology, 2-year program :contentReference[oaicite:17]{index=17}
        numberOfSemesters: 4,
        // External estimate for full MSc Biotechnology fees; converted to a round annual figure. :contentReference[oaicite:18]{index=18}
        tuition: 25000,
        generalCosts: 16000,                    // living+fees (dummy)
        futureRoles: [
          "Biotechnology Research Associate",
          "Quality Control Analyst",
          "Environmental Biotechnologist"
        ],
        averageSalaryExpectations: [
          { name: "Biotechnology Research Associate", averageSalary: 75000 }
        ],
        courses: [
          { courseName: "Chemical and Gene Biotechnology", semester: 1, credits: 3, courseType: "Core" },
          { courseName: "Biotechnology Seminar Series", semester: 2, credits: 3, courseType: "Core" }
        ],
        admissionRequirements: [
          {
            gpa: 3.0,
            others: [
              "4-year Bachelor's degree in Chemistry, Biology or related field",
              "Academic references",
              "Statement of Intent",
              "Résumé/CV"
            ]
          }
        ],
        redditReviews: [
          "Good research focus with options in chemical and gene biotechnology."
        ],
        userRating: 4.0
      }
    ]
  },





  // Ming's Data
  {
    universityName: "University of Waterloo",
    qsWorldRanking: 112,
    location: "Waterloo, Ontario",
    websiteUrl: "https://uwaterloo.ca",
    contactInformation: ["admissions@uwaterloo.ca", "+1-519-888-4567"],
    overallScore: 86.2,
    programsOffered: [
      {
        programName: "Bachelor of Software Engineering",
        degreeType: "BEng",
        programDuration: "5 Years",
        numberOfSemesters: 10,
        tuition: 17500,
        generalCosts: 2600,
        futureRoles: ["Software Developer", "Systems Architect", "Tech Lead"],
        averageSalaryExpectations: [
          { name: "Software Developer", averageSalary: 92000 },
          { name: "Systems Architect", averageSalary: 120000 }
        ],
        courses: [
          { courseName: "Object-Oriented Programming", semester: 1, credits: 4, courseType: "Core" },
          { courseName: "Software Design Patterns", semester: 4, credits: 4, courseType: "Core" },
          { courseName: "Distributed Systems", semester: 7, credits: 3, courseType: "Core" },
          { courseName: "Mobile App Development", semester: 8, credits: 3, courseType: "Elective" }
        ],
        admissionRequirements: [
          { gpa: 3.8, others: ["High School Transcript", "Math Contest Results", "Admission Information Form"] }
        ],
        redditReviews: [
          "Best co-op program in Canada - you graduate with 2 years of work experience.",
          "Intense workload but graduates are highly sought after by employers.",
          "Strong tech culture and amazing alumni network in Silicon Valley."
        ], 
        userRating: 4.9
      }
    ]
  },
 {
    universityName: "University Of Windsor",
    qsWorldRanking: 546,
    location: "Windsor, Ontario",
    websiteUrl: "https://www.uwindsor.ca/",
    contactInformation: ["apply@uwindsor.ca", "519-253-3000"],
    overallScore: 82.4,
    programsOffered: [
      {
        programName: "Computer Science",
        degreeType: "BSc",
        programDuration: "3 Years",
        numberOfSemesters: -1,
        tuition: 19752,
        generalCosts: -1,
        futureRoles: ["Software Developer", "Software Engineer", "Data Scientist"],
        averageSalaryExpectations: [
          { name: "Software Developer", averageSalary: 134109 }
        ],
        courses: [
          { courseName: "Computer Information Systems.", semester: 4, credits: 0, courseType: "Core" }
        ],
        admissionRequirements: [
          { gpa: 3.0, others: ["Advanced Functions/MHF4U", "English/ENG4U"] }
        ],
        redditReviews: [
          "It has a friendly atmosphere, generally good faculty, and abundant practical opportunities, but the experience varies across different majors, and the campus facilities are somewhat outdated"
        ], 
        userRating: 4
      },
      {
  programName: "Bachelor of Science (Honours Computer Information Systems)",
  degreeType: "BSc Honours",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 43872,
  generalCosts: 0,


  futureRoles: [
    "Business Analyst",
    "Information Systems Specialist",
    "IT Consultant"
  ],


  averageSalaryExpectations: [
    { name: "Business Analyst", averageSalary: 79043 },
    { name: "Information Systems Specialist", averageSalary: 70843 }
  ],


  courses: [
    { courseName: "ECON-1100", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "ECON-1110", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "COMP-1000", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "COMP-1400", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "COMP-1410", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "MATH-1250 / 1260", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "MATH-1720 / 1760", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "ACCT-1510", semester: 2, credits: 0, courseType: "Core" },
    { courseName: "STEN-1000", semester: 2, credits: 0, courseType: "Core" },


    { courseName: "COMP-2120", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "COMP-2540", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "COMP-2560", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "COMP-2650", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "STAT-2910", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "MKTG-1310", semester: 4, credits: 0, courseType: "Core" },
    { courseName: "ACCT-2550", semester: 4, credits: 0, courseType: "Core" },
    { courseName: "FINA-2700", semester: 4, credits: 0, courseType: "Core" },


    { courseName: "COMP-3057", semester: 5, credits: 0, courseType: "Core" },
    { courseName: "COMP-3150", semester: 5, credits: 0, courseType: "Core" },
    { courseName: "COMP-3220", semester: 5, credits: 0, courseType: "Core" },
    { courseName: "COMP-3300", semester: 5, credits: 0, courseType: "Core" },
    { courseName: "COMP-3340", semester: 6, credits: 0, courseType: "Core" },
    { courseName: "COMP-3400", semester: 6, credits: 0, courseType: "Core" },


    { courseName: "COMP-4990", semester: 7, credits: 0, courseType: "Capstone" },
    { courseName: "COMP-3XX0", semester: 8, credits: 0, courseType: "Core" },
    { courseName: "COMP-4XX0", semester: 8, credits: 0, courseType: "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "Advanced Functions (MHF4U)",
        "English (ENG4U)",
        "Strongly Recommended: Calculus & Vectors (MCV4U)",
        "Minimum Average: 70% (math courses)",
        "Minimum Average (Co-op): 75%",
        "Mean Admission Average (2019): 82%"
      ]
    }
  ],


  redditReviews: [
    "Friendly atmosphere, helpful faculty, and strong practical focus, but facilities are somewhat outdated and experience varies by program."
  ], 
  userRating: 4
}
,
{
  programName: "Bachelor of Science (Honours Computer Science with Software Engineering Specialization)",
  degreeType: "BSc Honours",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 26336,
  generalCosts: 0,


  futureRoles: [
    "Software Engineer",
    "Systems Architect",
    "QA Engineer"
  ],


  averageSalaryExpectations: [
    { name: "Software Engineer", averageSalary: 101755 },
    { name: "QA Engineer", averageSalary: 67872 }
  ],


  courses: [
    /* ---------- Year 1 ---------- */
    { courseName: "COMP-1000", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "COMP-1400", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "COMP-1410", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "MATH-1250 / 1260", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "MATH-1720 / 1760", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "MATH-1730", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "MATH-1020", semester: 2, credits: 0, courseType: "Core" },
    { courseName: "STAT-2920 / 2910", semester: 2, credits: 0, courseType: "Core" },


    /* ---------- Year 2 ---------- */
    { courseName: "COMP-2120", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "COMP-2140", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "COMP-2310", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "COMP-2540", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "COMP-2560", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "COMP-2650", semester: 4, credits: 0, courseType: "Core" },
    { courseName: "COMP-2800", semester: 4, credits: 0, courseType: "Core" },


    /* ---------- Year 3 ---------- */
    { courseName: "COMP-3057", semester: 5, credits: 0, courseType: "Core" },
    { courseName: "COMP-3110", semester: 5, credits: 0, courseType: "Core" },
    { courseName: "COMP-3150", semester: 5, credits: 0, courseType: "Core" },
    { courseName: "COMP-3220", semester: 5, credits: 0, courseType: "Core" },
    { courseName: "COMP-3300", semester: 6, credits: 0, courseType: "Core" },
    { courseName: "COMP-3540", semester: 6, credits: 0, courseType: "Core" },
    { courseName: "COMP-3670", semester: 6, credits: 0, courseType: "Core" },


    /* ---------- Year 4 ---------- */
    { courseName: "COMP-4110", semester: 7, credits: 0, courseType: "Core" },
    { courseName: "COMP-4400", semester: 7, credits: 0, courseType: "Core" },
    { courseName: "COMP-4540", semester: 7, credits: 0, courseType: "Core" },
    { courseName: "COMP-4800", semester: 7, credits: 0, courseType: "Core" },
    { courseName: "COMP-4960 / COMP-4990", semester: 8, credits: 0, courseType: "Capstone" },
    { courseName: "COMP-4XX0", semester: 8, credits: 0, courseType: "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "Advanced Functions (MHF4U)",
        "Calculus & Vectors (MCV4U)",
        "English (ENG4U)",
        "Minimum Average: 70% (math courses)",
        "Minimum Average (Co-op): 75%",
        "Mean Admission Average (2019): 83%"
      ]
    }
  ],


  redditReviews: [
    "Friendly faculty, strong hands-on learning, but facilities are somewhat outdated and experience varies by instructor."
  ], 
  userRating: 4.1
},
{
  programName: "Bachelor of Information Technology (Honours)",
  degreeType: "BIT Honours",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 26336,
  generalCosts: 0,


  futureRoles: [
    "IT Specialist",
    "Systems Administrator",
    "Network Technician"
  ],


  averageSalaryExpectations: [
    { name: "IT Specialist", averageSalary: 67618 },
    { name: "Systems Administrator", averageSalary: 72235 }
  ],


  courses: [
    /* ---------- Year 1 ---------- */
    { courseName: "COMP-1000", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "COMP-1047", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "COMP-2057", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "COMP-2067", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "COMP-2087", semester: 1, credits: 0, courseType: "Core" },
    { courseName: "ECON-1100", semester: 2, credits: 0, courseType: "Core" },
    { courseName: "MSCI-1000", semester: 2, credits: 0, courseType: "Core" },
    { courseName: "STEN-1000", semester: 2, credits: 0, courseType: "Core" },


    /* ---------- Year 2 ---------- */
    { courseName: "COMP-2097", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "COMP-2547", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "COMP-2707", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "STAT-2910", semester: 3, credits: 0, courseType: "Core" },
    { courseName: "MGMT-2400", semester: 4, credits: 0, courseType: "Core" },
    { courseName: "MKTG-1310", semester: 4, credits: 0, courseType: "Core" },


    /* ---------- Year 3 ---------- */
    { courseName: "COMP-3037", semester: 5, credits: 0, courseType: "Core" },
    { courseName: "COMP-3057", semester: 5, credits: 0, courseType: "Core" },
    { courseName: "COMP-3067", semester: 5, credits: 0, courseType: "Core" },
    { courseName: "COMP-3077", semester: 6, credits: 0, courseType: "Core" },
    { courseName: "COMP-3250", semester: 6, credits: 0, courseType: "Core" },


    /* ---------- Year 4 ---------- */
    { courseName: "COMP-4990", semester: 8, credits: 0, courseType: "Capstone" },
    { courseName: "COMP-2XXX/3XXX/4XXX", semester: 7, credits: 0, courseType: "Core" },
    { courseName: "COMP-2XXX/3XXX/4XXX", semester: 7, credits: 0, courseType: "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "ENG4U",
        "One of: MDM4U / MHF4U / MCV4U",
        "Minimum Average: 70%",
        "70% required in at least one math course"
      ]
    }
  ],


  redditReviews: [
    "Good hands-on IT program with supportive faculty, though some facilities feel outdated and course experience varies by instructor."
  ], 
  userRating: 4.1
}
,




    ]
 
  }
,
 {
    universityName: "Toronto Metropolitan University",
    qsWorldRanking: 711,
    location: "Toronto, Ontario",
    websiteUrl: "https://www.torontomu.ca/",
    contactInformation: ["info@torontomuic.ca", "416-979-5000"],
    overallScore: 82.4,
    programsOffered: [
     {
  programName: "Business Technology Management (Honours)",
  degreeType: "B.Com (Hons)",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 47096,
  generalCosts: 0,




  futureRoles: [
    "Business Analyst",
    "IT Project Coordinator",
    "Technology Consultant"
  ],




  averageSalaryExpectations: [
    { name: "Business Analyst", averageSalary: 79043 },
    { name: "Technology Consultant", averageSalary: 72412 }
  ],




  courses: [
    { courseName: "Business Decision-Making", semester: 1, credits: 4, courseType: "Core" }
  ],




  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "Ontario Secondary School Diploma (OSSD)",
        "ENG4U / EAE4U preferred",
        "One of MCV4U / MHF4U / MDM4U (MCV4U preferred)",
        "Minimum overall average: 70%",
        "Minimum prerequisite grades around 65–70%"
      ]
    }
  ],




  redditReviews: [
    "Strong industry connections and supportive faculty, but high living cost and varying program organization."
  ], 
  userRating: 3.9
},
{
  programName: "Computer Engineering",
  degreeType: "B.Eng",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 50260,
  generalCosts: 0,


  futureRoles: [
    "Hardware Engineer",
    "Embedded Systems Engineer",
    "Digital Systems Designer"
  ],


  averageSalaryExpectations: [
    { name: "Hardware Engineer", averageSalary: 76043 },
    { name: "Embedded Systems Engineer", averageSalary: 73478 }
  ],


  courses: [
    { courseName: "Computer Programming Fundamentals", semester: 2, credits: 4, courseType: "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "Ontario Secondary School Diploma (OSSD)",
        "ENG4U/EAE4U",
        "One of: MCV4U / MHF4U / MDM4U (MCV4U preferred)",
        "Minimum overall average: 70%"
      ]
    }
  ],


  redditReviews: [
    "Supportive faculty and strong hands-on learning, but high living costs and program organization can vary by instructor."
  ], 
  userRating: 4.0
}
,
{
  programName: "Computer Science (Honours)",
  degreeType: "B.Sc (Hons)",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 33648,
  generalCosts: 0,


  futureRoles: [
    "Software Developer",
    "Data Scientist",
    "Machine Learning Engineer"
  ],


  averageSalaryExpectations: [
    { name: "Software Developer", averageSalary: 95000 },
    { name: "Data Scientist", averageSalary: 105000 }
  ],


  courses: [
    { courseName: "Calculus I", semester: 1, credits: 4, courseType: "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "Ontario Secondary School Diploma (OSSD)",
        "ENG4U / EAE4U preferred",
        "Advanced Functions (MHF4U)",
        "One of: MCV4U (preferred) / MDM4U",
        "One of: SPH4U / SCH4U / SBI4U",
        "Minimum overall average: 70%"
      ]
    }
  ],


  redditReviews: [
    "Students value TMU's strong industry connections and supportive faculty, though cost of living is high and program organization varies by instructor."
  ], 
  userRating: 4.1
}
,
{
  programName: "Geographic Analysis (Honours)",
  degreeType: "B.A (Hons)",
  programDuration: "5 Years",
  numberOfSemesters: 10,
  tuition: 44130,
  generalCosts: 0,


  futureRoles: [
    "GIS Analyst",
    "Urban Planning Assistant",
    "Environmental Data Specialist"
  ],


  averageSalaryExpectations: [
    { name: "GIS Analyst", averageSalary: 68019 },
    { name: "Urban Planning Assistant", averageSalary: 84225 }
  ],


  courses: [
    { courseName: "Energy, Earth and Ecosystems", semester: 1, credits: 4, courseType: "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "Ontario Secondary School Diploma (OSSD)",
        "Six Grade 12 U/M courses",
        "ENG4U/EAE4U with minimum 70%",
        "Minimum overall average: 70%"
      ]
    }
  ],


  redditReviews: [
    "TMU programs benefit from strong industry connections and supportive faculty, though high living costs and uneven course organization can affect student experiences."
  ], 
  userRating: 4
}
,




    ]
 
  }
,


 {
    universityName: "University Of Toronto",
    qsWorldRanking: 29,
    location: "https://www.utoronto.ca/",
    websiteUrl: "https://www.torontomu.ca/",
    contactInformation: ["recruit.artsci@utoronto.ca", "416-978-2190"],
    overallScore: 82.4,
    programsOffered: [
  {
  programName: "Communication, Culture, Information and Technology",
  degreeType: "B.A (Hons)",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 24400,
  generalCosts: 0,




  futureRoles: [
    "Digital Marketing Specialist",
    "Communications Coordinator",
    "UX Research Assistant"
  ],




  averageSalaryExpectations: [
    { name: "Digital Marketing Specialist", averageSalary: 59342 },
    { name: "Communications Coordinator", averageSalary: 58656 }
  ],




  courses: [
    { courseName: "Digital Enterprise Management", semester: 4, credits: 3, courseType: "Core" }
  ],




  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "Ontario Secondary School Diploma (OSSD)",
        "ENG4U/EAE4U preferred",
        "Advanced Functions (MHF4U)",
        "One of: MCV4U or MDM4U",
        "One senior-level science course (SPH4U, SCH4U, SBI4U)",
        "Minimum overall average: 70%"
      ]
    }
  ],




  redditReviews: [
    "UofT students report strong academics and reputable faculty, though workload is heavy and student support varies by campus."
  ], 

  userRating: 4.6
},
{
  programName: "Computer Science",
  degreeType: "B.Sc",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 24400,
  generalCosts: 0,


  futureRoles: [
    "Software Engineer",
    "Data Analyst",
    "Backend Developer"
  ],


  averageSalaryExpectations: [
    { name: "Software Engineer", averageSalary: 101755 },
    { name: "Data Analyst", averageSalary: 76547 }
  ],


  courses: [
    { courseName: "Discrete Mathematics for Computer Science", semester: 3, credits: 1, courseType: "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "Grade 12 English (ENG4U/EAE4U)",
        "Senior-level mathematics recommended",
        "IB Diploma with English HL/SL also accepted",
        "Minimum overall average: ~70%",
        "Strong English proficiency required"
      ]
    }
  ],


  redditReviews: [
    "UofT offers excellent academic depth and rigorous CS training, but students report heavy workload and competitive grading."
  ], 
  userRating: 4.6
},


{
  programName: "Electrical and Computer Engineering",
  degreeType: "BASc",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 24400,
  generalCosts: 0,


  futureRoles: [
    "Electrical Engineer",
    "Computer Engineer",
    "Embedded Systems Developer"
  ],


  averageSalaryExpectations: [
    { name: "Electrical Engineer", averageSalary: 87891 },
    { name: "Computer Engineer", averageSalary: 96352 }
  ],


  courses: [
    { courseName: "Microwave Circuits", semester: 1, credits: 4, courseType: "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "Senior-level Grade 12 English",
        "IB Diploma with English HL/SL accepted",
        "Strong English proficiency required (IELTS 6.5 / TOEFL 89 / Duolingo 120)",
        "Minimum overall high school average typically ~70% or higher"
      ]
    }
  ],


  redditReviews: [
    "UofT engineering is rigorous and demanding but offers strong professors, research opportunities, and an excellent academic foundation."
  ], 
  userRating: 4.6
}
,
{
  programName: "Focus in Data Analytics",
  degreeType: "B.Sc",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 24400,
  generalCosts: 0,


  futureRoles: [
    "Data Analyst",
    "Data Scientist",
    "Business Intelligence Analyst"
  ],


  averageSalaryExpectations: [
    { name: "Data Analyst", averageSalary: 76547 },
    { name: "Data Scientist", averageSalary: 102573 }
  ],


  courses: [
    { courseName: "Data Science (Physical & Life Sciences context)", semester: 3, credits: 3, courseType: "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "Grade 12 English (ENG4U/EAE4U)",
        "IB Diploma with English HL/SL accepted",
        "Strong English proficiency required",
        "Minimum overall average: ~70%"
      ]
    }
  ],


  redditReviews: [
    "UofT provides strong academic depth and research opportunities, but students report heavy workload and competitive grading."
  ], 
  userRating: 4.7
}
,






    ]
 
  },


   {
    universityName: "University of British Columbia",
    qsWorldRanking: 36,
    location: "Canada",
    websiteUrl: "https://www.ubc.ca/",
    contactInformation: ["help@cs.ubc.ca", "416-978-2190"],
    overallScore: 82.4,
    programsOffered: [
{
  programName: "Computer Science",
  degreeType: "B.A",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 24316,
  generalCosts: 0,




  futureRoles: [
    "Software Developer",
    "Frontend Developer",
    "Data Analyst"
  ],




  averageSalaryExpectations: [
    { name: "Software Developer", averageSalary: 101755 },
    { name: "Data Analyst", averageSalary: 76547 }
  ],




  courses: [
    { courseName: "Computation, Programs, and Programming", semester: 1, credits: 3, courseType: "Core" }
  ],




  admissionRequirements: [
    {
      gpa: 3.0,
      others: [
        "Graduation from a senior secondary school with university-preparatory program",
        "Meet UBC English Language Admission Standard (9 accepted pathways)",
        "General admission requirements vary by applicant's country",
        "Minimum Grade 11/12 English proficiency required"
      ]
    }
  ],




  redditReviews: [
    "UBC offers a beautiful campus and strong academic reputation, though Vancouver’s high cost of living and inconsistent teaching quality are common concerns."
  ], 
  userRating: 4.6
},
{
  programName: "Computer Engineering",
  degreeType: "B.Sc",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 32012,
  generalCosts: 0,


  futureRoles: [
    "Computer Engineer",
    "Embedded Systems Engineer",
    "Network Systems Developer"
  ],


  averageSalaryExpectations: [
    { name: "Computer Engineer", averageSalary: 96352 },
    { name: "Embedded Systems Engineer", averageSalary: 73478 }
  ],


  courses: [
    { courseName: "Computing for Science, Engineering, and Technology", semester: 1, credits: 4, courseType: "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 2.8,
      others: [
        "Graduation from a senior secondary school with university-preparatory coursework",
        "Meet UBC English Language Admission Standard (9 ways to qualify)",
        "Degree-specific requirements vary by applicant's country",
        "Strong English proficiency: IELTS 6.5 / TOEFL 90 / Duolingo 125"
      ]
    }
  ],


  redditReviews: [
    "UBC is highly ranked with strong engineering programs, though students report high living costs and varying teaching quality."
  ]
},
{
  programName: "Cognitive Systems",
  degreeType: "B.Sc",
  programDuration: "4 Years",
  numberOfSemesters: 8,
  tuition: 24316,
  generalCosts: 0,


  futureRoles: [
    "Cognitive Scientist",
    "UX Researcher",
    "Human-Computer Interaction Specialist"
  ],


  averageSalaryExpectations: [
    { name: "Cognitive Scientist", averageSalary: 77795 },
    { name: "UX Researcher", averageSalary: 94054 }
  ],


  courses: [
    { courseName: "Introduction to Cognitive Systems", semester: 1, credits: 4, courseType: "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 3.2,
      others: [
        "Graduation from a university-preparatory secondary program",
        "Meet the UBC English Language Admission Standard",
        "Degree-specific requirements vary by applicant's country",
        "Strong English proficiency required (IELTS 6.5 / TOEFL 90 / Duolingo 125)"
      ]
    }
  ],


  redditReviews: [
    "Students praise UBC’s academics and beautiful campus, but note high housing costs and inconsistent teaching quality."
  ], 
  userRating: 4.5
}
,


{
  programName: "Integrated Computer Science",
  degreeType: "B.Sc",
  programDuration: "1 Year 8 Months",
  numberOfSemesters: 0,
  tuition: 10150,
  generalCosts: 0,


  futureRoles: [
    "Software Developer",
    "Full-Stack Developer",
    "Data Analyst",
    "IT Consultant"
  ],


  averageSalaryExpectations: [
    { name: "Software Developer", "averageSalary": 101755 },
    { name: "Full-Stack Developer", "averageSalary": 92696 },
    { name: "Data Analyst", "averageSalary": 76547 },
    { name: "IT Consultant", "averageSalary": 150400 }
  ],


  courses: [
    { courseName: "Models of Computation", "semester": 1, "credits": 4, "courseType": "Core" }
  ],


  admissionRequirements: [
    {
      gpa: 3.12,
      others: [
        "Second-degree applicants must have completed a first bachelor's degree",
        "Graduation from a university-preparatory secondary school",
        "Meet UBC English Language Admission Standard",
        "IELTS 6.5 / TOEFL 90 / Duolingo 125"
      ]
    }
  ],


  redditReviews: [
    "UBC students praise the ICS program for helping career changers enter tech, though note Vancouver's high living cost and heavy workload."
  ],
  userRating: 4.0


  
      }
    ]
  },

]
