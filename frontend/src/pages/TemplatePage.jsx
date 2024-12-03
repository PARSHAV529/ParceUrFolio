// src/components/TemplatePage.js
import React from 'react';
import { useSelector } from 'react-redux';
import MinimalistTemplate from '@/Templates/MinimalistTemplate';
import CreativeTemplate from '@/Templates/CreativeTemplate';
import ProfessionalTemplate from '@/Templates/ProfessionalTemplate';
import DarkThemeTemplate from '@/Templates/DarkThemeTemplate';
import TimelineTemplate from '@/Templates/TimelineTemplate';

export default function TemplatePage({ templateName }) {
  const formData = useSelector((state) => state.formData);

  // Choose the template based on the templateName
  let TemplateComponent;
  switch (templateName) {
    case 'minimalist':
      TemplateComponent = MinimalistTemplate;
      break;
    case 'creative':
      TemplateComponent = CreativeTemplate;
      break;
    case 'professional':
      TemplateComponent = ProfessionalTemplate;
      break;
    case 'dark-theme':
      TemplateComponent = DarkThemeTemplate;
      break;
    case 'timeline':
      TemplateComponent = TimelineTemplate;
      break;
    default:
      TemplateComponent = MinimalistTemplate;
  }

  return <TemplateComponent formData={formData} />;
}
