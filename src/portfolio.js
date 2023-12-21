/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Marriane Akeyo",
  title: "Hello, I'm Marriane",
  subTitle: emoji(
    "I'm a seasoned data engineer  expirienced in designing robust data pipelines, optimizing data workflows and ensuring data reliability for informed decision-making. I also have  a strong foundation in software engineering specifically backend development. I've honed my skills to seamlessly bridge the gap between data and applications. Welcome to my data wonderland !!!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/18SWkuh7NavM5pABm--ks0HVrpBEcMPWj/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/devmarrie",
  linkedin: "https://www.linkedin.com/in/marriane-akeyo/",
  gmail: "annemarrieakeyo42@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facdata_engineering_portfolioebook: "https://www.facebook.com/",
  articles: "https://dev.to/marrie",
  resumeLink:
    "https://drive.google.com/file/d/18SWkuh7NavM5pABm--ks0HVrpBEcMPWj/view?usp=drive_link",
  //stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  //instagram: 'https://www.instagram.com/davidrakosi/',
  twitter: 'https://twitter.com/devmarrie',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My skills !!!",
  subTitle: "CRAZY DATA ENGINEER PASSIONATE ABOUT BRIDGING THE GAP BETWEEN DATA AND SOFTWARE ENGINEERING",
  skills: [
    emoji(
      "⚡ Designed and implemented efficient ETL (Extract, Transform, Load) pipelines to seamlessly transfer and transform large volumes of data between diverse sources and data warehouses."
    ),
    emoji("⚡ Expertise in data modeling, ensuring optimal database structures for performance and scalability in support of analytical and reporting needs."),
    emoji(
      "⚡ Proficient in utilizing cloud-based data storage and processing solutions, such as AWS S3 and Redshift or Azure Blob Storage and SQL Data Warehouse."
    ),
    emoji(
      "⚡ Hands-on experience with big data technologies, including Apache Spark, for processing and analyzing vast datasets efficiently."
    ),
    emoji(
      "⚡ Automated routine tasks and processes, enhancing operational efficiency and reducing manual intervention in data workflows"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Workflow Orcherstration",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud Platforms",
      progressPercentage: "85%"
    },
    {
      Stack: "Big Data Technologies(spark & kafka)", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Modelling(dbt)", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Clever Programmer",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "September 2020 – Present",
      desc:
        "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials"
      ]
    },
    {
      role: "Product Owner (PSD2)",
      company: "Erste Bank",
      companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "July 2019 – September 2020",
      desc:
        "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
    },
    {
      role: "Junior Information Security & Systems Representative",
      company: "Vodafone",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "November 2018 – July 2019",
      desc:
        "I've conducted internal audit making sure the organization is compliant with the GDPR."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PERSONAL PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      projectName: "Navigating Supply and Demand Disruptions in Taxi Services Amid Disasters",
      projectDesc: "This project dives into the impact of natural disasters like COVID-19 on taxi services, revealing key insights for strategic planning, hence offering practical solutions for adapting to challenges. It involved creating a data model showcasing the relationship between the table, creating a bucket, extracting all the dimensions and fact table from the flat file and performing analysis on the data. By analyzing 2020 data.",
      architecture: {
        title: "Architecture:",
        architectureImage: require("./assets/images/nyc_taxi_project.png")
      },
      technologies: {
        title: "Technologies Used:",
        stack: "Apache Airflow, Python, SQL, AWS Glue, AWS S3, AWS Athena, Quicksights"
      },
      dashboard: {
        title: "Dashboard:",
        dashboardImage: require("./assets/images/nytaxi_dash.png"),
      },
      achievements: {
        title:"Key Achievements:",
        desc: ["Identified peak business hours for easy customer maitenance eg alerts incase of long waiting hours.", 
              "Indentified areas with shortage or surplus of taxies.",
              "Understood customers habit hence aiding in targeted marketing.", 
              "Analysed drivers performance and causes of the success or failure of a driver.",
              "Identified popular locations which are underserved.", 
              "Explored the feasibility of uncovering new market opportunities."
        ]
      },
      footerLink: [
        {
          name: "Link To Project",
          url: "https://github.com/devmarrie/DataEngineering/tree/master/projects/ny_taxi_data"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Cloud-Based ETL for Scalable Analytics",
      projectDesc: "Developed a cloud-based ETL (Extract, Transform, Load) pipeline using Apache Spark on AWS,  assuming an ads company wants to undestand how to run ads successfully on youtube (the most famously used social media platform after google).",
      architecture: {
        title: "Architecture",
        architectureImage: require("./assets/images/youtube_analysis.drawio.svg")
      },
      technologies: {
        title: "Technologies Used:",
        stack: "SAM CLI, AWS (S3, Glue, Visual ETL, Athena, Quicksight), Python, SQL"
      },
      dashboard: {
        title: "Dashboard:",
        dashboardImage: require("./assets/images/yt_dashboard.png"),
      },
      achievements: {
        title:"Key Achievements:",
        desc: ["Listed the trending title to use when running the ads.",
              "Identified the regions the company should consider when running the ads no youtube.",
              "Identified more specific channels to work with to get more people to view the ads.",
              "Transformed data from json and csv to parquet for consistency.",
              " Implemented data partitioning strategies for efficient processing of large datasets."
        ]
      },
      footerLink: [
        {
          name: "Link To Project",
          url: "https://github.com/devmarrie/DataEngineering/tree/master/projects/youtube_trending/thanos/wacha_tuone"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Software Engineer(Backend)",
      subtitle:
        "Mastered the intricacies of data generation and storage dynamics, seamlessly integrating these insights to skillfully architect pipelines and craft sophisticated data models.",
      image: require("./assets/images/alx.png"),
      footerLink: [
        {
          name: "View Certification",
          url:
            "https://drive.google.com/file/d/1TEAMfBYWFHHbbX0HDC3ETt5rj7oF-wm3/view?usp=sharing"
        }
      ]
    },
    {
      title: "Sql Mastery",
      subtitle:
        "Demonstrated foundational SQL proficiency through successful completion of a rigorous test, fortifying my data engineering capabilities to efficiently manage and query diverse datasets in designing robust data solutions.",
      image: require("./assets/images/HackerRank_logo.png"),
      footerLink: [
        {
          name: "View Certification",
          url:
            "https://drive.google.com/file/d/1UKnG7lvWlU9oS4XIUKFUP36a8DbyxpU0/view?usp=sharing"
        }
      ]
    },

    {
      title: "Data Analysis",
      subtitle: "Acquired a nuanced understanding of analytics that enhanced my capacity to design and optimize robust data pipelines for informed decision-making.",
      image: require("./assets/images/afrofem.jpeg"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1ugCmeQJwj8CXTRfEcZzv8HeshLCsOgaz/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for orchestrating pipelines, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I am always eager to take on new challenges and contribute to innovative data solutions. If you're looking for a data engineer with a proven track record of success, let's connect !!",
  email_address: "annemarrieakeyo42@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
