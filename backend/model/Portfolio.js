const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  formData:{
  basicInfo: {
    name: { type: String, required: true },
    githubUsername: { type: String, required: true },
    email: { type: String, required: true },
    jobTitle: String,
    city: String,
    phone: String,
    aboutMe: String,
    profileImage: String,
  },
  education: [
    {
      degree: String,
      institution: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  experience: [
    {
      title: String,
      company: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  skills: [String],
  projects: [
    {
      name: String,
      description: String,
      link: String,
    },
  ]},
  theme: {
    selectedTheme: { type: String, default: 'default' },
    themes: {
      default: {
        primaryGradient: { type: String, default: 'from-blue-500 to-blue-700' },
        textColor: { type: String, default: 'text-blue-600' },
        backgroundColor: { type: String, default: 'bg-blue-50' },
        borderColor: { type: String, default: 'border-blue-300' },
        btnColor: { type: String, default: 'bg-blue-600 text-white' },
      },
      dark: {
        primaryGradient: { type: String, default: 'from-gray-800 to-gray-900' },
        textColor: { type: String, default: 'text-gray-100' },
        backgroundColor: { type: String, default: 'bg-gray-900' },
        borderColor: { type: String, default: 'border-gray-700' },
        btnColor: { type: String, default: 'bg-gray-800 text-white' },
      },
      vibrant: {
        primaryGradient: { type: String, default: 'from-orange-500 to-pink-500' },
        textColor: { type: String, default: 'text-pink-600' },
        backgroundColor: { type: String, default: 'bg-orange-50' },
        borderColor: { type: String, default: 'border-pink-400' },
        btnColor: { type: String, default: 'bg-pink-600 text-white' },
      },
      earthy: {
        primaryGradient: { type: String, default: 'from-gray-500 to-gray-700' },
        textColor: { type: String, default: 'text-gray-800' },
        backgroundColor: { type: String, default: 'bg-gray-200' },
        borderColor: { type: String, default: 'border-gray-500' },
        btnColor: { type: String, default: 'bg-gray-600 text-white' },
      },
    },
  },
  template: {
    selectedTemplate: { type: String, default: 'minimalist' },
  },
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
