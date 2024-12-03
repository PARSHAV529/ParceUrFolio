// src/pages/PortfolioPreview.js
import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';

// Dynamically load the selected template
const PortfolioTemplates = {
  MinimalistTemplate: React.lazy(() => import('@/Templates/MinimalistTemplate')),
  CreativeTemplate: React.lazy(() => import('@/Templates/CreativeTemplate')),
  ProfessionalTemplate: React.lazy(() => import('@/Templates/ProfessionalTemplate')),
  DarkThemeTemplate: React.lazy(() => import('@/Templates/DarkThemeTemplate')),
  TimelineTemplate: React.lazy(() => import('@/Templates/TimelineTemplate')),
};

export default function PortfolioPreview({ formData }) {
  const { templateName } = useParams();
  const Template = PortfolioTemplates[templateName];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Template formData={formData} />
    </Suspense>
  );
}
