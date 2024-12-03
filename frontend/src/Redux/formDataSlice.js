import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   basicInfo: {
//     name: '',
//     email: '',
//     phone: '',
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
    phone: '+1 234 567 890',
  },
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'XYZ University',
      year: '2024',
    },
    {
      degree: 'High School Diploma',
      institution: 'ABC High School',
      year: '2020',
    },
  ],
  experience: [
    {
      role: 'Software Developer Intern',
      company: 'TechCorp',
      startDate: 'June 2023',
      endDate: 'August 2023',
      description: 'Worked on building features for the company’s main web application using React.js and Node.js.',
    },
    {
      role: 'Junior Developer',
      company: 'Web Solutions',
      startDate: 'September 2023',
      endDate: 'Present',
      description: 'Developing and maintaining web applications, focusing on front-end development using React and backend with Node.js.',
    },
  ],
  skills: ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'MongoDB', 'Git'],
  projects: [
    {
      name: 'Portfolio Website',
      description: 'Built a personal portfolio website to showcase projects and skills.',
      link: 'https://github.com/johndoe/portfolio',
    },
    {
      name: 'E-commerce App',
      description: 'Developed an e-commerce application with product browsing, user authentication, and a shopping cart.',
      link: 'https://github.com/johndoe/e-commerce',
    },
  ],
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setBasicInfo(state, action) {
      state.basicInfo = action.payload;
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
      state.education = state.education.filter((item, index) => index !== action.payload);
    },
    removeExperience(state, action) {
      state.experience = state.experience.filter((item, index) => index !== action.payload);
    },
    removeSkill(state, action) {
      state.skills = state.skills.filter((item, index) => index !== action.payload);
    },
    removeProject(state, action) {
      state.projects = state.projects.filter((item, index) => index !== action.payload);
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
