import React from "react";
import { useSelector } from "react-redux";
import MinimalistTemplate from "@/Templates/MinimalistTemplate";
import CreativeTemplate from "@/Templates/CreativeTemplate";
import ProfessionalTemplate from "@/Templates/ProfessionalTemplate";
import DarkThemeTemplate from "@/Templates/DarkThemeTemplate";
import TimelineTemplate from "@/Templates/TimelineTemplate";
import { useParams } from "react-router-dom";

export default function TemplatePage() {
  const formData = useSelector((state) => state.formData);
  const { templateName } = useParams();
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);

  let TemplateComponent;
  switch (templateName) {
    case "minimalist":
      TemplateComponent = MinimalistTemplate;
      break;
    case "creative":
      TemplateComponent = CreativeTemplate;
      break;
    case "professional":
      TemplateComponent = ProfessionalTemplate;
      break;
    case "dark-theme":
      TemplateComponent = DarkThemeTemplate;
      break;
    case "timeline":
      TemplateComponent = TimelineTemplate;
      break;
    default:
      TemplateComponent = MinimalistTemplate;
  }

  return (
    <div className={`h-full p-6 ${selectedTheme}-theme`}>
      <TemplateComponent formData={formData} theme={selectedTheme} />
    </div>
  );
}
