// Softskill imagery
// import TimeManagementIcon from "../assets/images/home/time-management.svg";
import DecisionIcon from "../assets/images/home/decision-making.svg";
import LearningIcon from "../assets/images/home/learning-agility.svg";
import OrganisationIcon from "../assets/images/home/organisation-skill.svg";
import ProblemIcon from "../assets/images/home/problem-solving.svg";
import AwarenessIcon from "../assets/images/home/self-awareness.svg";

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

export const SOFT_SKILLS_ITEMS = [
  {
    id: 1,
    direction: "reverse",
    title: "Empathy",
    desc: "Feel what your teammates are feeling.",
    iconUrl: AwarenessIcon,
    offset: 300,
  },
  {
    id: 2,
    direction: "",
    title: "Situational awareness",
    desc: "Read the room and respond appropriately.",
    offset: 450,
    iconUrl: DecisionIcon,
  },
  {
    id: 3,
    direction: "reverse",
    title: "Improvisation",
    desc: "Change up when things don’t go to plan.",
    offset: 450,
    iconUrl: LearningIcon,
  },
  {
    id: 4,
    direction: "",
    title: "Conflict resolution",
    desc: "Sense tension and disarm the bomb.",
    offset: 450,
    iconUrl: OrganisationIcon,
  },
  {
    id: 5,
    direction: "reverse",
    title: "Self awareness",
    desc: "My impact on this situation.",
    offset: 450,
    iconUrl: ProblemIcon,
  },
];

export const DATA_DRIVEN_ITEMS = [
  {
    id: 1,
    imgUrl: DataDrivenImage1,
    AltText: "Candidate ratings",
    contentTitle: "Candidate ratings",
    description: "Go deeper than IQ; EQ predicts future success",
    groupClassImg: "image-group-1",
    groupClass: "group-item-1",
    ButtonText: "Why real-life scenarios?",
  },
  {
    id: 2,
    imgUrl: DataDrivenImage2,
    AltText: "First-person",
    contentTitle: "First-person",
    description: "Immersive film production + cinematic writing",
    groupClassImg: "image-group-2",
    groupClass: "group-item-1",
    ButtonText: "Why real-life scenarios?",
  },
  {
    id: 3,
    imgUrl: DataDrivenImage3,
    AltText: "Conflict simulation",
    contentTitle: "Conflict simulation",
    description: "Drop candidates into real business scenarios",
    groupClassImg: "image-group-3",
    groupClass: "group-item-2",
    ButtonText: "Why real-life scenarios?",
  },
  {
    id: 4,
    imgUrl: DataDrivenImage3,
    AltText: "GenAI",
    contentTitle: "GenAI",
    description: "Unbiased scoring over gut feeling",
    groupClassImg: "image-group-4",
    groupClass: "group-item-2",
    ButtonText: "Why real-life scenarios?",
  },
  {
    id: 5,
    imgUrl: DataDrivenImage3,
    AltText: "No training",
    contentTitle: "No training",
    description: "Effortless add-on + ATS integration",
    groupClassImg: "image-group-5",
    groupClass: "group-item-3",
    ButtonText: "Why real-life scenarios?",
  },
  {
    id: 6,
    imgUrl: DataDrivenImage3,
    AltText: "Benchmarking",
    contentTitle: "Benchmarking",
    description: "Compare candidates against industry averages",
    groupClassImg: "image-group-6",
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
    iconUrl: SkillIcon1,
    desc: "Multi-modular assessments",
  },
  {
    id: 2,
    iconUrl: SkillIcon2,
    desc: "Generative AI",
  },
  {
    id: 3,
    iconUrl: SkillIcon3,
    desc: "Natural language processing",
  },
  {
    id: 4,
    iconUrl: SkillIcon4,
    desc: "Large language modeling",
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
