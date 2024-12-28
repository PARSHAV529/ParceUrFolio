import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   basicInfo: {
//     name: '',
//     email: '',
//     jobTitle: '',
//     city: '',
//     phone: '',
//     aboutMe: '', // Added
//     profileImage: '', // Added
//   },
//   education: [],
//   experience: [],
//   skills: [],
//   projects: [],
// };

const initialState = {
  basicInfo: {
    githubUsername: '',
    name: '',
    email: 'parshav.andhariya@example.com', // Replace with your actual email
    jobTitle: 'Software Developer',
    city: '',
    phone: '+91 7383649720', // Replace with your actual phone number
    aboutMe: 'Aspiring software developer passionate about building efficient and user-friendly applications. Skilled in MERN stack development and React Native.',
    profileImage:''

  },
  education: [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institute: 'Dharmsinh Desai Institute of Technology (DDIT)',
      startDate: '2021-08-01',
      endDate: '2025-05-15',
      marks: '7.5 CGPA', // Replace with your actual GPA or marks
    },
  ],
  experience: [
    {
      role: 'Software Developer Intern',
      company: 'Esparkbiz',
      startDate: '2024-10-01',
      endDate: '2025-02-28',
      description: 'Developed and optimized components for web applications, leveraging React.js and Node.js.',
    },
    
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'CSS', 'HTML', 'Git',  'C++', 'Java'],
  projects: [
    // {
    //   name: 'ParceUrFolio',
    //   description: 'A portfolio builder website using React, Node.js, MongoDB, and Shadcn UI. Features include template selection, color palette customization, and hosting.',
    //   link: 'https://github.com/parshav/ParceUrFolio', // Replace with your actual project link
    // },
    // {
    //   name: 'Resume Analyzer',
    //   description: 'Developed a resume analysis tool using Streamlit, BERT, and spaCy to extract and analyze resume data.',
    //   link: 'https://github.com/parshav/ResumeAnalyzer', // Replace with your actual project link
    // },
  ],
};



const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setBasicInfo(state, action) {
      state.basicInfo = { ...state.basicInfo, ...action.payload }; // Updated to merge changes
    },
    setEducation(state, action) {
      state.education = action.payload;
    },
    setExperience(state, action) {
      state.experience = action.payload;
    },
    setSkills(state, action) {
      state.skills = action.payload;
    },
    setProjects(state, action) {
      state.projects = action.payload;
    },
    addEducation(state, action) {
      state.education.push(action.payload);
    },
    addExperience(state, action) {
      state.experience.push(action.payload);
    },
    addSkill(state, action) {
      state.skills.push(action.payload);
    },
    addProject(state, action) {
      state.projects.push(action.payload);
    },
    removeEducation(state, action) {
      state.education = state.education.filter((_, index) => index !== action.payload);
    },
    removeExperience(state, action) {
      state.experience = state.experience.filter((_, index) => index !== action.payload);
    },
    removeSkill(state, action) {
      state.skills = state.skills.filter((_, index) => index !== action.payload);
    },
    removeProject(state, action) {
      state.projects = state.projects.filter((_, index) => index !== action.payload);
    },
    updateEducation(state, action) {
      const { index, data } = action.payload;
      state.education[index] = data;
    },
    updateExperience(state, action) {
      const { index, data } = action.payload;
      state.experience[index] = data;
    },
    updateSkill(state, action) {
      const { index, data } = action.payload;
      state.skills[index] = data;
    },
    updateProject(state, action) {
      const { index, data } = action.payload;
      state.projects[index] = data;
    },
  },
});

export const {
  setBasicInfo,
  setEducation,
  setExperience,
  setSkills,
  setProjects,
  addEducation,
  addExperience,
  addSkill,
  addProject,
  removeEducation,
  removeExperience,
  removeSkill,
  removeProject,
  updateEducation,
  updateExperience,
  updateSkill,
  updateProject,
} = formDataSlice.actions;

export default formDataSlice.reducer;
