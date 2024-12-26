import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import MinimalistTemplate from "@/Templates/MinimalistTemplate";
import CreativeTemplate from "@/Templates/CreativeTemplate";
import ProfessionalTemplate from "@/Templates/ProfessionalTemplate";
import DarkThemeTemplate from "@/Templates/DarkThemeTemplate";
import TimelineTemplate from "@/Templates/TimelineTemplate";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { settemplate } from "@/Redux/templateSlice";


export default function TemplatePage() {
  const formData = useSelector((state) => state.formData);
  const { templateName } = useParams();
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const [hideNavbar, setHideNavbar] = useState(false); // State to control navbar visibility
   const dispatch = useDispatch();
  
    // Accessing themes and the selected theme from Redux store

  let TemplateComponent;
  switch (templateName) {
    case "minimalist":
      TemplateComponent = MinimalistTemplate;
      dispatch(settemplate('minimalist'));
      break;
    case "creative":
      TemplateComponent = CreativeTemplate;
      dispatch(settemplate('creative'));
      break;
    case "professional":
      TemplateComponent = ProfessionalTemplate;
      dispatch(settemplate('professional'));
      break;
    case "dark-theme":
      TemplateComponent = DarkThemeTemplate;
      dispatch(settemplate('dark-theme'));
      break;
    case "timeline":
      TemplateComponent = TimelineTemplate;
      dispatch(settemplate('timeline'));
      break;
    default:
      TemplateComponent = MinimalistTemplate;
      dispatch(settemplate('minimalist'));


  }


  const generatePDF = async () => {
    await new Promise((resolve) => {
      setHideNavbar(true);
      setTimeout(resolve, 100); // Give some time for React to update the DOM
    });
    const templateElement = document.getElementById('template-preview');
  
    if (!templateElement) {
      console.error('Template element not found for PDF generation');
      return;
    }
  
    // Capture the element as a canvas
    const canvas = await html2canvas(templateElement, {
      scale: 2, // Improves rendering quality
      useCORS: true, // Allows external images
    });
  
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;
  
    let heightLeft = imgHeight;
    let position = 0;
  
    // Add the first page
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
  
    // Add additional pages if the content exceeds one page
    while (heightLeft > pageHeight) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pageHeight;
    }
  
    // Save the PDF
    pdf.save('template2-portfolio.pdf');

    setHideNavbar(false)

  };
  

 

  return (
    <>
    <div className={` p-6 ${selectedTheme}-theme`}>

     
      
      <div id="template-preview">
        <TemplateComponent formData={formData} theme={selectedTheme} hideNavbar={hideNavbar} />
      </div>
     
    </div>
     <div className="h-full flex justify-between items-center">
     <button className="btn btn-primary" onClick={generatePDF}>
       Download as PDF
     </button>
   </div>
   </>

  );
}
