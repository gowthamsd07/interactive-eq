// Softskill imagery
// import TimeManagementIcon from "../assets/images/home/time-management.svg";
// import DecisionIcon from "../assets/images/home/decision-making.svg";
// import LearningIcon from "../assets/images/home/learning-agility.svg";
// import OrganisationIcon from "../assets/images/home/organisation-skill.svg";
// import ProblemIcon from "../assets/images/home/problem-solving.svg";
// import AwarenessIcon from "../assets/images/home/self-awareness.svg";

import HumanAptIcon1 from "../assets/images/home/skills-icon-animation-1.mp4";
import HumanAptIcon2 from "../assets/images/home/skills-icon-animation-2.mp4";
import HumanAptIcon3 from "../assets/images/home/skills-icon-animation-3.mp4";
import HumanAptIcon4 from "../assets/images/home/skills-icon-animation-4.mp4";
import HumanAptIcon5 from "../assets/images/home/skills-icon-animation-5.mp4";

// Data driven
import DataDrivenImage1 from "../assets/images/home/datadriven-slider-image-1.png";
import DataDrivenImage2 from "../assets/images/home/datadriven-slider-image-2.png";
import DataDrivenImage3 from "../assets/images/home/datadriven-slider-image-3.png";

// Assessment
import AssessmentIcon1 from "../assets/images/home/shield-1.svg";
import AssessmentIcon2 from "../assets/images/home/shield-2.svg";
import AssessmentIcon3 from "../assets/images/home/shield-3.svg";
import AssessmentIcon4 from "../assets/images/home/shield-4.svg";
import AssessmentIcon5 from "../assets/images/home/shield-5.svg";
import AssessmentIcon6 from "../assets/images/home/shield-6.svg";

// Skill
import SkillIcon1 from "../assets/images/home/skill-slider-1.png";
import SkillIcon2 from "../assets/images/home/skill-slider-2.png";
import SkillIcon3 from "../assets/images/home/skill-slider-3.png";
import SkillIcon4 from "../assets/images/home/skill-slider-4.png";
import SkillIcon5 from "../assets/images/home/skill-slider-5.png";
import SkillIcon6 from "../assets/images/home/skill-slider-6.png";
import SkillIcon7 from "../assets/images/home/skill-slider-7.png";
import SkillIcon8 from "../assets/images/home/skill-slider-8.png";

// product-slider
import ProductSliderImg1 from "../assets/images/product/slider-image-1.jpg";
import ProductSliderImg2 from "../assets/images/product/slider-image-2.jpg";
import ProductSliderImg3 from "../assets/images/product/slider-image-3.jpg";
// HRA Tile
import HraTile1 from "../assets/images/solutions/hrm-img-1.png";
import HraTile2 from "../assets/images/solutions/hrm-img-2.png";
import HraTile3 from "../assets/images/solutions/hrm-img-3.png";

// auto dealer
import AutoDealerSliderImg1 from "../assets/images/auto-dealer/slider-image-1.png";
import AutoDealerSliderImg2 from "../assets/images/auto-dealer/slider-image-2.png";

// candidates
import CandidatesSliderImg1 from "../assets/images/candidates/candidate-slider-image-1.png";
import CandidatesSliderImg2 from "../assets/images/candidates/candidate-slider-image-2.png";
import CandidatesSliderImg3 from "../assets/images/candidates/candidate-slider-image-3.png";

export const SOFT_SKILLS_ITEMS = [
  {
    id: 1,
    direction: "",
    title: "Empathy",
    desc: "Contribute to a culture where compassion and mutual respect underpin every interaction.",
    listItems: [
      "Feel what others are feeling",
      "Actively listen and give genuine responses",
      "Understand others’ personal challenges",
      "Cultivate trust with compassion",
    ],
    iconUrl: HumanAptIcon1,
    offset: 300,
  },
  {
    id: 2,
    direction: "reverse",
    title: "Situational awareness",
    desc: "Stay attuned to unfolding events to ensure a swift and informed response to any situation. ",
    offset: 450,
    listItems: [
      "Read the room ",
      "Proactively identify hazards",
      "Understand what is needed ",
      "Respond appropriately",
    ],
    iconUrl: HumanAptIcon2,
  },
  {
    id: 3,
    direction: "",
    title: "Improvisation",
    desc: "Foster the art of building a dynamic environment where adaptability and creativity thrive. ",
    offset: 450,
    listItems: [
      "Be flexible when things don’t go to plan ",
      "Keep cool under pressure ",
      "Quickly pivot into spontaneous collaboration",
      "Embrace unexpected opportunities ",
    ],
    iconUrl: HumanAptIcon3,
  },
  {
    id: 4,
    direction: "reverse",
    title: "Conflict resolution",
    desc: "Pave the way for harmony and collaboration, which leads to professional growth and team unity. ",
    offset: 450,
    listItems: [
      "Sense tension in others ",
      "Seek common ground ",
      "Come up with a plan",
      "Disarm the bomb ",
    ],
    iconUrl: HumanAptIcon4,
  },
  {
    id: 5,
    direction: "",
    title: "Cultural fit",
    desc: "Harmonize individual values with the collective ethos of the organization for heightened productivity.",
    offset: 450,
    listItems: [
      "Find your tribe",
      "Align on shared core values",
      "Stop at nothing to achieve win-wins ",
      "Strive for an inclusive work environment ",
    ],
    iconUrl: HumanAptIcon5,
  },
];

export const DATA_DRIVEN_ITEMS = [
  {
    id: 1,
    imgUrl: DataDrivenImage1,
    AltText: "Candidate ratings",
    description1:
      "Candidate ratings: Go deeper than IQ; EQ predicts future success",
    description2:
      "First-person : Immersive film production + cinematic writing",
    groupClassImg: "image-group-1",
    groupClass: "group-item-1",
    ButtonText: "Why real-life scenarios?",
  },
  {
    id: 2,
    imgUrl: DataDrivenImage2,
    AltText: "First-person",
    description1:
      "Conflict simulation : Drop candidates into real business scenarios",
    description2: "GenAI : Unbiased scoring over gut feeling",
    groupClassImg: "image-group-2",
    groupClass: "group-item-2",
    ButtonText: "Why real-life scenarios?",
  },
  {
    id: 3,
    imgUrl: DataDrivenImage3,
    AltText: "Conflict simulation",
    description1: "No training : Effortless add-on + ATS integration",
    description2: "Benchmarking : Compare candidates against industry averages",
    groupClassImg: "image-group-3",
    groupClass: "group-item-3",
    ButtonText: "Why real-life scenarios?",
  },
];

export const ASSESSMENT_ITEMS = [
  {
    id: 1,
    IconUrl: AssessmentIcon1,
    title: "Empathy",
    desc: "Feel what your teammates are feeling.",
  },
  {
    id: 2,
    IconUrl: AssessmentIcon2,
    title: "Situational awareness",
    desc: "Read the room and respond appropriately.",
  },
  {
    id: 3,
    IconUrl: AssessmentIcon3,
    title: "Improvisation",
    desc: "Change up when things don’t go to plan.",
  },
  {
    id: 4,
    IconUrl: AssessmentIcon4,
    title: "Conflict resolution",
    desc: "Sense tension and disarm the bomb.",
  },
  {
    id: 5,
    IconUrl: AssessmentIcon5,
    title: "Read People",
    desc: "Read the hidden emotions in every interaction",
  },
  {
    id: 6,
    IconUrl: AssessmentIcon6,
    title: "Self awareness",
    desc: "My impact on this situation.",
  },
];

export const SKILLS_ITEMS = [
  {
    id: 1,
    iconUrl: SkillIcon2,
    desc: "Generative AI",
  },
  {
    id: 2,
    iconUrl: SkillIcon3,
    desc: "Natural language processing",
  },
  {
    id: 3,
    iconUrl: SkillIcon4,
    desc: "Large language modeling",
  },
  {
    id: 4,
    iconUrl: SkillIcon1,
    desc: "Multi-modular assessments",
  },

  {
    id: 5,
    iconUrl: SkillIcon5,
    desc: "Data privacy and compliance",
  },
  {
    id: 6,
    iconUrl: SkillIcon6,
    desc: "For hiring managers",
  },
  {
    id: 7,
    iconUrl: SkillIcon7,
    desc: "For recruiters and talent acquisition",
  },
  {
    id: 8,
    iconUrl: SkillIcon8,
    desc: "For those who want to get it right!",
  },
];

export const CARD_SLIDER_ITEMS = [
  {
    id: 1,
    imgUrl: DataDrivenImage1,
    AltText: "Candidate ratings",
    imgItemclass: "1",
    contentItemclass: "1",
    title: "Measure future success",
    desc: "Typical hiring accounts for intelligence, or IQ. We quantify your candidate’s on-the-job potential by measuring their emotional intelligence, or EQ.",
    buttonText: "How smart is Interactive EQ?",
    modalTitle: "How smart is interactive EQ?",
    modalDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    modalButtonText: "Learn More",
  },
  {
    id: 2,
    imgUrl: DataDrivenImage2,
    AltText: "Candidate ratings",
    imgItemclass: "2",
    contentItemclass: "2",
    title: "First-person simulation",
    desc: "When your candidates are dropped into immersive scenarios brought to life by interactive video, you can see how they will respond under real pressure.",
    buttonText: "Is it for me?",
    modalTitle: "Is it for me?",
    modalDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    modalButtonText: "Learn More",
  },
  {
    id: 3,
    imgUrl: DataDrivenImage3,
    AltText: "Candidate ratings",
    imgItemclass: "3",
    contentItemclass: "3",
    title: "Real business conflicts",
    desc: "Every other soft skill test on the market is read-and-write. iEQ pressure-tests candidates by placing them in real business simulations in real time.",
    buttonText: "Why real-life scenarios?",
    modalTitle: "Why real-life scenarios?",
    modalDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    modalButtonText: "Learn More",
  },
];

// product page

export const PRODUCT_SLIDER_ITEMS = [
  {
    id: 1,
    title: "Data privacy & compliance",
    desc: "We take great care in adhering to fast changing compliance laws related to artificial intelligence, recording, talent recruitment and beyond. Our methods are constantly vetted by the most trusted legal minds in Silicon Valley.",
    imgUrl: ProductSliderImg3,
    isCta: true,
  },
  {
    id: 2,
    title: "The forefront of hiring tech.",
    desc: "Human aptitude scoring by iEQ is a first-of-its-kind breakthrough that you won’t find anywhere else.",
    imgUrl: ProductSliderImg1,
    isCta: true,
  },
  {
    id: 3,
    title: "Multi Module",
    desc: "Pick from a range of role-play scenarios to test your candidates, from chats and email threads to remote and in-person simulations.",
    imgUrl: ProductSliderImg2,
    isCta: true,
  },
];

// solution page
export const HRM_TILE_ITEMS = [
  {
    id: 1,
    imgUrl: HraTile1,
    altText: "Cohesive distributed teams",
    title: "Cohesive distributed teams",
    titleDescription:
      "When teams are scattered across time zones, you must ensure every member has the interpersonal skills to collaborate and make decisions. You need people who fit your company culture. ",
    tileText:
      "Find colleagues that can tell who is engaged and who is tuned-out during meetings. ",
  },
  {
    id: 2,
    imgUrl: HraTile2,
    altText: "Maximize hiring resources",
    title: "Maximize hiring resources",
    titleDescription:
      "Candidates go through multiple rounds of interviews before receiving an offer. Validate your decision by confirming their EQ is as strong as their resume. ",
    tileText: "Save time by avoiding open-ended questions.",
  },
  {
    id: 3,
    imgUrl: HraTile3,
    altText: "Operational efficiency",
    title: "Operational efficiency",
    titleDescription:
      "Seamlessly integrate Interactive EQ with your ATS for a unified, holistic candidate view.",
    tileText:
      "Candidate EQ scoring blends in easily with your recruiting workflow.",
  },
];

// Auto dealer slider
export const AUTO_DEALER_SLIDER_ITEMS = [
  {
    id: 1,
    title: "Service with a smile",
    desc: "You know the stat: 50% of dealership profits come from parts and service. Make sure you hire a team that isn’t just handy but also friendly. Hire workers who circumvent customer issues proactively instead of reactively.",
    imgUrl: AutoDealerSliderImg2,
    isButton: true,
  },
  {
    id: 2,
    title: "Healthy competition",
    desc: "Hire salespeople who work together, not against each other. ",
    imgUrl: AutoDealerSliderImg1,
    isButton: true,
  },
];

// Candidates slider
export const CANDIDATES_SLIDER_ITEMS = [
  {
    id: 1,
    title: "Beyond technical skills",
    desc: "Traditional interviews don't always showcase your strengths in relationships, communication, and leadership.",
    imgUrl: CandidatesSliderImg1,
  },
  {
    id: 2,
    title: "Showcase your true potential",
    desc: "Don't let your potential go unnoticed. Let your Interactive EQ scores demonstrate your soft skills to recruiters.",
    imgUrl: CandidatesSliderImg2,
  },
  {
    id: 3,
    title: "Play the hiring game",
    desc: "This is not your father’s candidate assessment. Our experiential scenarios are as entertaining as they are immersive and realistic.",
    imgUrl: CandidatesSliderImg3,
  },
];
