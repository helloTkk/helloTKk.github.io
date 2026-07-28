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
    <p> I am a third-year Ph.D. candidate in the Department of Computer Science at <a href="https://www.psu.edu/"> Pennsylvania State University</a>, currently working as a Graduate Research Assistant under the guidance of <a href="https://syed-rafiul-hussain.github.io//">Prof. Syed Rafiul Hussain</a>.
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
    <ul>
    <li> <b>[May’26]</b>: “VUPER: Verified ASN.1 UPER Parser” has been accepted to the 33rd ACM Conference on Computer and Communications Security (CCS’26). </li>
    <li> <b>[April’26]</b>: “LogicEval: A Systematic Framework for Evaluating Automated Repair Techniques for Logical Vulnerabilities in Real-World Software” has been accepted to the 64th Annual Meeting of the Association for Computational Linguistics (ACL’26). </li>
    <li> <b>[April’26]</b>: “Guardians of the Air: In-Device Detection of 5G Control-Plane Threats” has been accepted to the 47th IEEE Symposium on Security and Privacy (IEEE S&amp;P’26). </li>
    <li> <b>[Oct’25]</b>: I passed the PhD qualification and comprehensive exams, officially becoming a PhD candidate! </li>
    <li> <b>[July’25]</b>: Our talk, “Open RAN, Open Risk: Uncovering Threats and Exposing Vulnerabilities in Next-Gen Cellular RAN” has been accepted to Black Hat USA 2025. </li>
    <li> <b>[June’25]</b>: Google awarded $29,250 for reporting 1 critical- and 2 high-severity vulnerabilities in Pixel phones. </li>
    <li> <b>[June’25]</b>: Acknowledged in Google’s Android security acknowledgements for disclosing CVE-2025-26785; awarded a bounty for the report. </li>
    <li> <b>[May’25]</b>: Our talk, “Uncovering ‘NASty’ 5G Baseband Vulnerabilities through Dependency-Aware Fuzzing” has been accepted to Black Hat USA 2025. </li>
    <li> <b>[May’25]</b>: Samsung awarded $10,712 for reporting 2 high- and 3 medium-severity vulnerabilities in Galaxy phones. </li>
    <li> <b>[May’25]</b>: Acknowledged in Samsung’s Product Security Update Bulletins for disclosing CVE-2025-26784, CVE-2025-26785, and CVE-2025-27891; awarded a bounty for the reports. </li>
    <li> <b>[March’25]</b>: “Stateful Analysis and Fuzzing of Commercial Baseband Firmware” has been accepted to the 46th IEEE Symposium on Security and Privacy. </li>
    <li> <b>[March’25]</b>: Acknowledged in Samsung’s Product Security Update Bulletins for disclosing CVE-2024-52923 and CVE-2024-52924; awarded a bounty for the reports. </li>
    <li> <b>[January’25]</b>: “CoreCrisis: Threat-Guided Context-Aware Black-Box Testing Framework for 5G Core Network Implementations” has been accepted to the 34th USENIX Security Symposium, 2025. </li>
    <li> <b>[August’24]</b>: “State Machine Mutation-based Testing Framework for Wireless Communication Protocols” has been accepted to CCS’24. </li>
    <li> <b>[August’24]</b>: 5GBaseChecker received distinguished paper award at the 33rd USENIX Security Symposium, 2024. </li>
    <li> <b>[June’24]</b>: Inducted in <a href="https://www.gsma.com/solutions-and-impact/technologies/security/gsma-mobile-security-research-acknowledgements/">GSMA Mobile Security Research Acknowledgements</a> for identifying severe security issues in 5G commercial devices and 5G networks. </li>
    <li> <b>[June’24]</b>: Acknowledged in <a href="https://semiconductor.samsung.com/support/quality-support/product-security-updates/">Samsung Product Security Update</a> for several vulnerabilities in 5G baseband implementations. </li>
    <li> <b>[June’24]</b>: Samsung awarded $5,700 for reporting high severity vulnerabilities in Samsung 5G baseband implementations. </li>
    <li> <b>[May’24]</b>: “<a href="https://www.blackhat.com/us-24/briefings/schedule/#cracking-the-g-fortress-peering-into-gs-vulnerability-abyss-40620">Cracking the 5G Fortress: Peering Into 5G’s Vulnerability Abyss</a>” has been accepted to be presented at the Blackhat USA 2024. </li>
    <li> <b>[April’24]</b>: Google awarded $3,000 for reporting vulnerabilities in 4G devices. </li>
    <li> <b>[April’24]</b>: Acknowledged in <a href="https://www.unisoc.com/en_us/secy/thank">Unisoc Product Security Acknowledgements</a> for reporting vulnerabilities in Unisoc 5G baseband implementations. </li>
    <li> <b>[March’24]</b>: “Logic Gone Astray: A Security Analysis Framework for the Control Plane Protocols of 5G Basebands” has been accepted to USENIX Security ‘24. </li>
    <li> <b>[February’24]</b>: Google awarded $14,250 for reporting high severity vulnerabilities in 5G devices. </li>
    <li> <b>[January’24]</b>: Start PhD journey! </li>
    <li> <b>[October’23]</b>: “Hermes: Unlocking Security Analysis of Cellular Network Protocols by Synthesizing Finite State Machines from Natural Language Specifications” has been accepted at USENIX Security ‘24. </li>
    <li> <b>[May’23]</b>: Inducted in <a href="https://www.gsma.com/solutions-and-impact/technologies/security/gsma-mobile-security-research-acknowledgements/">GSMA Mobile Security Research Acknowledgements</a> for identifying security issues in specification design. </li>
    </ul>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Conference",

  type_one_items: [
    {
      title: `Logic Gone Astray: A Security Analysis Framework for the Control Plane Protocols of 5G Basebands`,
      abstract: `We develop 5GBaseChecker— an efficient, scalable, and dynamic security analysis framework based on differential testing for analyzing 5G basebands' control plane protocol interactions. 5GBaseChecker first captures basebands' protocol behaviors as a finite state machine (FSM) through black-box automata learning. To facilitate efficient learning and improve scalability, 5GBaseChecker introduces novel hybrid and collaborative learning techniques. 5GBaseChecker then identifies input sequences for which the extracted FSMs provide deviating outputs. Finally, 5GBaseChecker leverages these deviations to efficiently identify the security properties from specifications and use those to triage if the deviations found in 5G basebands violate any properties. We evaluated 5GBaseChecker with 17 commercial 5G basebands and 2 open-source UE implementations and uncovered 22 implementation-level issues, including 13 exploitable vulnerabilities and 2 interoperability issues.`,
      date: "USENIX Security Symposium (USENIX Security), 2024 — Distinguished Paper Award",
      link: "https://www.usenix.org/conference/usenixsecurity24/presentation/tu",
      github: "https://github.com/SyNSec-den/5GBaseChecker",
      download: "https://syed-rafiul-hussain.github.io/wp-content/uploads/2024/03/5GBaseChecker-USENIX-Security-24.pdf",
      writers: ["<b>Kai Tu</b>, Abdullah Al Ishtiaq, Syed Md Mukit Rashid, Yilu Dong, Weixuan Wang, Tianwei Wu, and Syed Rafiul Hussain"],
    },
    {
      title: `VUPER: Verified ASN.1 UPER Parser`,
      abstract: `ASN.1 is a widely used interface description language, and UPER (Unaligned Packed Encoding Rules) is one of its key encoding rules, particularly popular in security-critical domains such as cellular networks and vehicle-to-everything (V2X) communication. To ensure the correctness and security of this foundational infrastructure, we present VUPER, a framework for generating verified ASN.1 UPER parsers. We first formalize the notion of a bit-precise parser and identify properties that prove round-trip consistency for parsers and serializers, while accounting for ASN.1 features such as backward/forward compatibility. We then implement and verify parser and serializer combinators for ASN.1 basic types and structures, while adhering to the UPER specification. We also develop a compiler that translates ASN.1 definitions into verified parsers. Finally, we develop a dynamic testing framework using the VUPER parser as a test oracle. To empirically evaluate our approach, we tested 7 open-source and 4 commercial ASN.1 parsers using 5G and V2X communication protocols. VUPER uncovers 20 types of inconsistencies in popular parsers and demonstrates stricter compliance with ASN.1 UPER standards. Additionally, we demonstrate concrete attacks by exploiting these parser vulnerabilities.`,
      date: "The 33rd ACM Conference on Computer and Communications Security (CCS), 2026",
      link: "https://syed-rafiul-hussain.github.io/index.php/publications/vuper-verified-asn-1-uper-parser/",
      github: "",
      download: "",
      writers: ["Xiaotian Zhou, <b>Kai Tu</b>, Ali Ranjbar, Yilu Dong, Gang Tan, and Syed Rafiul Hussain"],
    },
    {
      title: `Guardians of the Air: In-Device Detection of 5G Control-Plane Threats`,
      abstract: `We present 5GShield, the first in-device framework for detecting and mitigating control-plane threats in 5G networks. 5GShield works with two complementary modules called ConnSentinel and ExFinder. By utilizing a novel observation of temporal and spatial consistency in broadcast messages among cells under the same tracking area and frequency, ConnSentinel inspects initial cell broadcast messages from nearby base stations to identify and block suspicious base stations that expose anomalous configuration before connection establishment. On the other hand, a machine-learning-based ExFinder module continuously monitors observable control-plane traffic to detect ongoing protocol-level attacks. For ExFinder, we develop a novel graph representation construction mechanism and integrate it with a hybrid pipeline for anomaly detection and attack classification. To support training and evaluation, we curate the first comprehensive dataset combining diverse benign traces from commercial 5G deployments with malicious traces derived from known 4G and 5G control-plane attacks. Experimental results show that 5GShield achieves 99.6% precision and 97.0% recall in detecting both known and zero-day attacks, based on anomaly detection over UE-visible control-plane behavior. Furthermore, 5GShield is lightweight, consuming less than 3.75% of the memory and is deployable on modern commercial devices.`,
      date: "The 47th IEEE Symposium on Security and Privacy (IEEE S&amp;P), 2026",
      link: "https://syed-rafiul-hussain.github.io/wp-content/uploads/2026/04/5GShield-5GThreatDetector-1.pdf",
      github: "https://github.com/SyNSec-den/5GShield",
      download: "",
      writers: ["Tianwei Wu, Abdullah Al Ishtiaq, Tianchang Yang, Yilu Dong, <b>Kai Tu</b>, Zeyu Song, Ridwanul Hasan Tanvir, Md Toufikuzzaman, Shagufta Mehnaz, and Syed Rafiul Hussain"],
    },
    {
      title: `LogicEval: A Systematic Framework for Evaluating Automated Repair Techniques for Logical Vulnerabilities in Real-World Software`,
      abstract: `Logical vulnerabilities in software stem from flaws in program logic rather than memory safety, which can lead to critical security failures. Although existing automated program-repair techniques primarily focus on repairing memory-corruption vulnerabilities, they struggle with logical vulnerabilities because of their limited semantic understanding of the vulnerable code and its expected behavior. On the other hand, recent successes of large language models (LLMs) in understanding and repairing code are promising. However, no framework currently exists to analyze the capabilities and limitations of such techniques for logical vulnerabilities. We aim to systematically evaluate both traditional and LLM-based repair approaches for addressing real-world logical vulnerabilities. To facilitate our assessment, we created the first-ever dataset, LogicDS, comprising 122 logical vulnerabilities that reflect tangible security impact. We also developed a systematic framework, LogicEval, to evaluate patches for logical vulnerabilities. Evaluations suggest that compilation and testing failures are primarily driven by prompt sensitivity, loss of code context, and difficulty in patch localization.`,
      date: "The 64th Annual Meeting of the Association for Computational Linguistics (ACL), 2026",
      link: "https://syed-rafiul-hussain.github.io/wp-content/uploads/2026/04/logiceval-acl26.pdf",
      github: "https://github.com/SyNSec-den/LogicEval",
      download: "",
      writers: ["Syed Md Mukit Rashid, Abdullah Al Ishtiaq, <b>Kai Tu</b>, Yilu Dong, Tianwei Wu, Ali Ranjbar, Tianchang Yang, Najrin Sultana, Shagufta Mehnaz, and Syed Rafiul Hussain"],
    },
    {
      title: `Stateful Analysis and Fuzzing of Commercial Baseband Firmware`,
      abstract: `Baseband firmware plays a critical role in cellular communication, yet its proprietary, closed-source nature and complex, stateful processing logic make systematic security testing challenging. Existing methods often fail to account for the interdependencies between baseband tasks and the statefulness of input processing logic, limiting their scope and effectiveness. We present LORIS, a stateful fuzz testing framework designed to explore and analyze baseband firmware implementations effectively. We employ iterative symbolic analysis to progressively identify state variables and the predicates over them that define different protocol states, while alleviating the state explosion problem. It enables LORIS to perform targeted exploration and fuzzing of program regions with high potential for vulnerabilities. We evaluated LORIS across 5 commercial devices from two major vendors, covering both 4G Long-Term Evolution (LTE) and 5G New Radio (NR), demonstrating its broad applicability. Our testing revealed 7 new vulnerabilities exploitable by over-the-air attackers, potentially leading to baseband crashes, remote code execution, and denial of service.`,
      date: "IEEE Symposium on Security and Privacy (IEEE S&amp;P), 2025",
      link: "https://www.computer.org/csdl/proceedings-article/sp/2025/223600b120/26EkFox5zyg",
      github: "https://github.com/SyNSec-den/Loris",
      download: "https://syed-rafiul-hussain.github.io/wp-content/uploads/2025/05/Loris_baseband_fuzzing_sp25.pdf",
      writers: ["Ali Ranjbar, Tianchang Yang, <b>Kai Tu</b>, Saaman Khalilollahi, and Syed Rafiul Hussain"],
    },
    {
      title: `CoreCrisis: Threat-Guided and Context-Aware Iterative Learning and Fuzzing of 5G Core Networks`,
      abstract: `We develop CORECRISIS, a stateful black-box fuzz-testing framework for 5G core network (5GC) implementations. Unlike previous stateful security analysis efforts of cellular networks which rely on manually-crafted, static test inputs and are limited to identifying only logical errors, CORECRISIS employs a dynamic two-step approach. Initially, CORECRISIS builds an initial finite state machine (FSM) representation of the 5GC's implementation using only benign (i.e., positive) inputs with its efficient and scalable divide-and-conquer and property-driven equivalence checking learning. During fuzzing, it utilizes the learned FSM to target underexplored states and introduces state-aware mutations to generate and test attacking (i.e., negative) inputs. Based on the responses observed from the core network, CORECRISIS continuously refines the FSM to better guide its exploration and find vulnerabilities. Evaluating CORECRISIS on three open-source and one commercial 5GC implementations, we identified 7 categories of deviations from the technical specifications and 13 crashing vulnerabilities. These logical and crashing vulnerabilities lead to denial-of-service, authentication bypass, and billing fraud.`,
      date: "USENIX Security Symposium (USENIX Security), 2025",
      link: "https://www.usenix.org/conference/usenixsecurity25/presentation/dong-yilu",
      github: "https://github.com/SyNSec-den/CoreCrisis",
      download: "https://syed-rafiul-hussain.github.io/wp-content/uploads/2025/05/CoreCrisis-UsenixSecurity25.pdf",
      writers: ["Yilu Dong, Tianchang Yang, Abdullah Al Ishtiaq, Syed Md Mukit Rashid, Ali Ranjbar, <b>Kai Tu</b>, Tianwei Wu, Md Sultan Mahmud, and Syed Rafiul Hussain"],
    },
    {
      title: `State Machine Mutation-based Testing Framework for Wireless Communication Protocols`,
      abstract: `This paper proposes Proteus, a protocol state machine, property-guided, and budget-aware automated testing approach for discovering logical vulnerabilities in wireless protocol implementations. Proteus maintains its budget awareness by generating test cases (i.e., each being a sequence of protocol messages) that are not only meaningful (i.e., the test case mostly follows the desirable protocol flow except for some controlled deviations) but also have a high probability of violating the desirable properties. To demonstrate its effectiveness, we evaluated Proteus in two different protocol implementations, namely 4G LTE and BLE, across 23 consumer devices (11 for 4G LTE and 12 for BLE). Proteus discovered 25 unique issues, including 112 instances. Affected vendors have positively acknowledged 14 vulnerabilities through 5 CVEs.`,
      date: "The 31st ACM Conference on Computer and Communications Security (CCS), 2024",
      link: "https://arxiv.org/abs/2409.02905",
      github: "https://github.com/SyNSec-den/Proteus",
      download: "https://syed-rafiul-hussain.github.io/wp-content/uploads/2024/08/Proteus-CCS2024.pdf",
      writers: ["Syed Md Mukit Rashid, Tianwei Wu, <b>Kai Tu</b>, Abdullah Al Ishtiaq, Ridwanul Hasan Tanvir, Yilu Dong, Omar Chowdhury, and Syed Rafiul Hussain"],
    },
    {
      title: `Hermes: Unlocking Security Analysis of Cellular Network Protocols by Synthesizing Finite State Machines from Natural Language Specifications`,
      abstract: `In this paper, we present Hermes, an end-to-end framework to automatically generate formal representations from natural language cellular specifications. We first develop a neural constituency parser, NEUTREX, to process transition-relevant texts and extract transition components (i.e., states, conditions, and actions). We also design a domain-specific language to translate these transition components to logical formulas by leveraging dependency parse trees. Finally, we compile these logical formulas to generate transitions and create the formal model as finite state machines. To demonstrate the effectiveness of Hermes, we evaluate it on 4G NAS, 5G NAS, and 5G RRC specifications and obtain an overall accuracy of 81-87%, which is a substantial improvement over the state-of-the-art. Our security analysis of the extracted models uncovers 3 new vulnerabilities and identifies 19 previous attacks in 4G and 5G specifications, and 7 deviations in commercial 4G basebands.`,
      date: "USENIX Security Symposium (USENIX Security), 2024",
      link: "https://www.usenix.org/conference/usenixsecurity24/presentation/al-ishtiaq",
      github: "https://github.com/SyNSec-den/hermes-spec-to-fsm",
      download: "https://arxiv.org/abs/2310.04381",
      writers: ["Abdullah Al Ishtiaq, Sarkar Snigdha Sarathi Das, Syed Md Mukit Rashid, Ali Ranjbar, <b>Kai Tu</b>, Tianwei Wu, Zhezheng Song, Weixuan Wang, Mujtahid Al-Islam Akon, Rui Zhang, and Syed Rafiul Hussain"],
    },
  ],

  type_two_title: "Invited Talks &amp; Industrial Conferences",

  type_two_items: [
    {
      title: `Open RAN, Open Risk: Uncovering Threats and Exposing Vulnerabilities in Next-Gen Cellular RAN`,
      abstract: `A systematic security analysis of Open RAN implementations, presenting the threats and vulnerabilities we uncovered in next-generation cellular radio access network software.`,
      date: "Black Hat USA, 2025",
      link: "https://www.youtube.com/watch?v=rqzK1xd3wng",
      github: "",
      download: "https://syed-rafiul-hussain.github.io/wp-content/uploads/2026/03/openran-blackhat-usa25.pdf",
      writers: ["Tianchang Yang, <b>Kai Tu</b>, Syed Md Mukit Rashid, Ali Ranjbar, Gang Tan, and Syed Rafiul Hussain"],
    },
    {
      title: `Uncovering “NASty” 5G Baseband Vulnerabilities through Dependency-Aware Fuzzing`,
      abstract: `We present how LORIS combines iterative symbolic analysis with stateful fuzzing of commercial baseband firmware to uncover 7 new over-the-air exploitable vulnerabilities in 4G LTE and 5G NR basebands.`,
      date: "Black Hat USA, 2025",
      link: "https://www.youtube.com/watch?v=gXGIo5fy800",
      github: "https://github.com/SyNSec-den/Loris",
      download: "https://syed-rafiul-hussain.github.io/wp-content/uploads/2025/05/Loris-BHUS25.pdf",
      writers: ["Ali Ranjbar, Tianchang Yang, <b>Kai Tu</b>, Saaman Khalilollahi, Kanika Gupta, and Syed Rafiul Hussain"],
    },
    {
      title: `Cracking the 5G Fortress: Peering Into 5G’s Vulnerability Abyss`,
      abstract: `We present 5GBaseChecker, our differential-testing framework for 5G baseband control plane protocols, and walk through the 22 implementation-level issues — including 13 exploitable vulnerabilities — that it uncovered across 17 commercial 5G basebands.`,
      date: "Black Hat USA, 2024",
      link: "https://www.blackhat.com/us-24/briefings/schedule/#cracking-the-g-fortress-peering-into-gs-vulnerability-abyss-40620",
      github: "https://github.com/SyNSec-den/5GBaseChecker",
      download: "",
      writers: ["<b>Kai Tu</b>, Abdullah Al Ishtiaq, Syed Md Mukit Rashid, Yilu Dong, Weixuan Wang, Tianwei Wu, and Syed Rafiul Hussain"],
    },
  ],

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
