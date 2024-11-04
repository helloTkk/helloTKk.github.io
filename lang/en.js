// ---------- Navbar titles
const enNavbarData = {
  title: " Kai Tu ",
  Home: "Home",
  publications: "publications",
  Research: "Research",
  Jobs: "Jobs",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: " Kai Tu ",
  jobTitle: " Graduate Research Assistant, \n The Pennsylvania State University",
  home_title: "About me",
  home_content: `
  <div>
    <p> I am a first-year Ph.D. student in the Department of Computer Science at <a href="https://www.psu.edu/"> Pennsylvania State University</a>, currently working as a Graduate Research Assistant under the guidance of <a href="https://syed-rafiul-hussain.github.io//">Prof. Syed Rafiul Hussain</a>.
    </p>
    <h2 class='title'> Research Interest </h2>
    <p> My research interest broadly lies in security and privacy, with a focus on telecommunication networks and user devices. I aim to address security and privacy concerns by systematically analyzing and developing automatic vulnerability discovery technologies for emerging communication systems and protocols. My research interests include but are not limited to the following:
    </p>
    <ul>
      <li> Telecommunication Network and Device Security </li>
      <li> Automatic Vulnerability Discovery Technique </li>
      <li> Wireless Communication Protocol Security </li>
      
    </ul>
    <h2 class='title'> Recent News </h2>
    <li> <b>[August’24]</b>: “State Machine Mutation-based Testing Framework for Wireless Communication Protocols” has been accepted to CCS’24. </li>
    <li> <b>[August’24]</b>: 5GBaseChecker received distinguished paper award at the 33rd USENIX Security Symposium, 2024.</a>. </li>
    <li> <b>[June’24]</b>: Inducted in <a href="https://www.gsma.com/solutions-and-impact/technologies/security/gsma-mobile-security-research-acknowledgements/">GSMA Mobile Security Research Acknowledgements</a> for identifying severe security issues in 5G commercial devices and 5G networks. </li>
    <li> <b>[June’24]</b>: Acknowledged in <a href="https://semiconductor.samsung.com/support/quality-support/product-security-updates/">Samsung Product Security Update</a> for several vulnerabilities in 5G baseband implementations. </li>
    <li> <b>[June’24]</b>: Samsung awarded $5,700 for for reporting high severity vulnerabilities in Samsung 5G baseband implementations. </li>
    <li> <b>[May’24]</b>: “<a href="https://www.blackhat.com/us-24/briefings/schedule/#cracking-the-g-fortress-peering-into-gs-vulnerability-abyss-40620">Cracking the 5G Fortress: Peering Into 5G’s Vulnerability Abyss</a>” has been accepted to be presented at the Blackhat USA 2024. </li>
    <li> <b>[April’24]</b>: Google awarded $3,000 for for reporting vulnerabilities in 4G devices. </li>
    <li> <b>[April’24]</b>: Acknowledged in <a href="https://www.unisoc.com/en_us/secy/thank">Unisoc Product Security Acknowledgements</a> for reporting vulnerabilities in Unisoc 5G baseband implementations. </li>
    <li> <b>[March’24]</b>: “Logic Gone Astray: A Security Analysis Framework for the Control Plane Protocols of 5G Basebands” has been accepted to USENIX Security ‘24. </li>
    <li> <b>[February’24]</b>: Google awarded $14,250 for for reporting high severity vulnerabilities in 5G devices. </li>
    <li> <b>[January’24]</b>: Start PhD journey! </li>
    <li> <b>[October’23]</b>: “Hermes: Unlocking Security Analysis of Cellular Network Protocols by Synthesizing Finite State Machines from Natural Language Specifications” has been accepted at USENIX Security ‘24. </li>
    <li> <b>[May’23]</b>: “Inducted in <a href="https://www.gsma.com/solutions-and-impact/technologies/security/gsma-mobile-security-research-acknowledgements/">GSMA Mobile Security Research Acknowledgements</a> for identifying security issues in specification design. </li>
    
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Conference",

  type_one_items: [
    {
      title: `Logic Gone Astray: A Security Analysis Framework for the Control Plane Protocols of 5G Basebands.`,
      abstract: `We develop 5GBaseChecker— an efficient, scalable, and dynamic security analysis framework based on differential testing for analyzing 5G basebands' control plane protocol interactions. 5GBaseChecker first captures basebands' protocol behaviors as a finite state machine (FSM) through black-box automata learning. To facilitate efficient learning and improve scalability, 5GBaseChecker introduces novel hybrid and collaborative learning techniques. 5GBaseChecker then identifies input sequences for which the extracted FSMs provide deviating outputs. Finally, 5GBaseChecker leverages these deviations to efficiently identify the security properties from specifications and use those to triage if the deviations found in 5G basebands violate any properties. We evaluated 5GBaseChecker with 17 commercial 5G basebands and 2 open-source UE implementations and uncovered 22 implementation-level issues, including 13 exploitable vulnerabilities and 2 interoperability issues.`,
      date: "",
      link: "https://www.usenix.org/conference/usenixsecurity24/presentation/tu",
      github: "",
      download: "",
      writers: ["Kai Tu, Abdullah Al Ishtiaq, Syed Md Mukit Rashid, Yilu Dong, Weixuan Wang, Tianwei Wu, and Syed Rafiul Hussain "],
    },
    {
      title: `State Machine Mutation-based Testing Framework for Wireless Communication Protocols`,
      abstract: `This paper proposes Proteus, a protocol state machine, property-guided, and budget-aware automated testing approach for discovering logical vulnerabilities in wireless protocol implementations. Proteus maintains its budget awareness by generating test cases (i.e., each being a sequence of protocol messages) that are not only meaningful (i.e., the test case mostly follows the desirable protocol flow except for some controlled deviations) but also have a high probability of violating the desirable properties. To demonstrate its effectiveness, we evaluated Proteus in two different protocol implementations, namely 4G LTE and BLE, across 23 consumer devices (11 for 4G LTE and 12 for BLE). Proteus discovered 25 unique issues, including 112 instances. Affected vendors have positively acknowledged 14 vulnerabilities through 5 CVEs.`,
      date: "",
      link: "https://arxiv.org/abs/2409.02905",
      github: "",
      download: "",
      writers: ["Syed Md Mukit Rashid, Tianwei Wu, Kai Tu, Abdullah Al Ishtiaq, Ridwanul Hasan Tanvir, Yilu Dong, Omar Chowdhury, Syed Rafiul Hussain"],
    },
    {
      title: `“Hermes: Unlocking Security Analysis of Cellular Network Protocols by Synthesizing Finite State Machines from Natural Language Specifications.`,
      abstract: `In this paper, we present Hermes, an end-to-end framework to automatically generate formal representations from natural language cellular specifications. We first develop a neural constituency parser, NEUTREX, to process transition-relevant texts and extract transition components (i.e., states, conditions, and actions). We also design a domain-specific language to translate these transition components to logical formulas by leveraging dependency parse trees. Finally, we compile these logical formulas to generate transitions and create the formal model as finite state machines. To demonstrate the effectiveness of Hermes, we evaluate it on 4G NAS, 5G NAS, and 5G RRC specifications and obtain an overall accuracy of 81-87%, which is a substantial improvement over the state-of-the-art. Our security analysis of the extracted models uncovers 3 new vulnerabilities and identifies 19 previous attacks in 4G and 5G specifications, and 7 deviations in commercial 4G basebands.`,
      date: "",
      link: "https://arxiv.org/abs/2310.04381",
      github: "",
      writers: ["Abdullah Al Ishtiaq, Sarkar Snigdha Sarathi Das, Syed Md Mukit Rashid, Ali Ranjbar, Kai Tu, Tianwei Wu, Zhezheng Song, Weixuan Wang, Mujtahid Akon, Rui Zhang, Syed Rafiul Hussain"],
    }
  ]

  // type_two_title: "Under Review",
  // type_two_items: [
  //   {
  //     title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
  //     abstract: ``,
  //     date: "1996",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
  //     abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
  //     date: "1996",
  //     link: "http://link.com",
  //     github: "http://github.com",
  //     writers: ["Claudio Cioffi-Revilla", "masoud Claudio "],
  //   },
  // ],

  // type_three_title: "Book Chapters",
  // type_three_items: [
  //   {
  //     title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
  //     abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
  //     date: "1996",
  //     link: "http://link.com",
  //     github: "http://github.com",
  //     writers: ["Claudio Cioffi-Revilla"],
  //   },
  // ],

  // type_four_title: "",
  // type_four_items: [
  //   {
  //     title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
  //     abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
  //     date: "1996",
  //     link: "http://link.com",
  //     github: "http://github.com",
  //     writers: ["Claudio Cioffi-Revilla"],
  //   },
  // ],
};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        Page under construction.
    </div>
  `,
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Jobs",
  items: [
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "20 April 2022",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2", "achievement 3"],
    },
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2"],
    },
  ],
};
