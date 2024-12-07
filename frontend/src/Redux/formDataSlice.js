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
    name: 'John Doe',
    email: 'john.doe@example.com',
    jobTitle: 'Software Engineer',
    city: 'San Francisco, CA',
    phone: '+1 123 456 7890',
    aboutMe: 'Passionate developer with a knack for problem-solving and creating efficient software solutions.',
    profileImage: 'https://via.placeholder.com/150', // Example placeholder URL
  },
  education: [
    {
      degree: 'Bachelor of Technology',
      institute: 'Stanford University',
      startDate: '2018-08-01',
      endDate: '2022-05-15',
      marks: '3.8 GPA',
    },
    {
      degree: 'Master of Science',
      institute: 'MIT',
      startDate: '2022-09-01',
      endDate: '2024-06-15',
      marks: '4.0 GPA',
    },
  ],
  experience: [
    {
      role: 'Software Developer Intern',
      company: 'Google',
      startDate: '2023-06-01',
      endDate: '2023-09-01',
      description: 'Developed scalable backend services using Node.js and enhanced API performance by 25%.',
    },
    {
      role: 'Junior Software Engineer',
      company: 'Facebook',
      startDate: '2024-07-01',
      endDate: '2024-12-01',
      description: 'Worked on front-end frameworks to improve user engagement by 30%.',
    },
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'CSS', 'HTML'],
  projects: [
    {
      name: 'E-Commerce Platform',
      description: 'Developed a full-stack e-commerce web application with user authentication and product management.',
      link: 'https://github.com/johndoe/ecommerce-platform',
    },
    {
      name: 'Portfolio Website',
      description: 'Designed and implemented a personal portfolio website to showcase projects and skills.',
      link: 'https://johndoe.dev',
    },
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
