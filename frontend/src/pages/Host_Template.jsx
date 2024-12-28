import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MinimalistTemplate from "@/Templates/MinimalistTemplate";
import CreativeTemplate from "@/Templates/CreativeTemplate";
import ProfessionalTemplate from "@/Templates/ProfessionalTemplate";
import DarkThemeTemplate from "@/Templates/DarkThemeTemplate";
import TimelineTemplate from "@/Templates/TimelineTemplate";
import { useParams } from "react-router-dom";
import { settemplate } from "@/Redux/templateSlice";
import axios from "axios";

export default function Host_Template() {
  const { templateName } = useParams();
  const [formData, setFormData] = useState(null); // State to store fetched formData
  const [hideNavbar, setHideNavbar] = useState(false); // State to control navbar visibility
  const [selectedTheme, setSelectedTheme] = useState(null); // State to store selected theme
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the portfolio data, theme, and template from the backend
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/portfolio/github/PARSHAV529`);
        const { data } = response;
console.log(data.formData);

        // Set the fetched data to the state
        setFormData(data.formData);
        setSelectedTheme(data.theme);
        console.log( data.theme);

        dispatch(settemplate(data.template)); // Set the template in Redux
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchPortfolioData();
  }, [dispatch]);

  // Set the template component based on the templateName from params
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

  // Render a loading state or template component if formData is fetched
  if (!formData || !selectedTheme) {
   
    
    return <div>Loading...</div>;
  }

  return (
    <div className={`p-6 ${selectedTheme}-theme`}>
      <div id="template-preview">
        <TemplateComponent formData={formData} the={selectedTheme} hideNavbar={hideNavbar} />
      </div>
    </div>
  );
}
