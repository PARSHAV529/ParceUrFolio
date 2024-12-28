import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // For Icons

export default function GenerateResume() {
  const formData = useSelector((state) => state.formData); // Get the data from Redux

  const handleGenerateResume = () => {
    const doc = new jsPDF();
    
    const PAGE_HEIGHT = 297; // A4 page height in mm
    const MARGIN = 20; // Left margin
    const LINE_HEIGHT = 10; // Height of one line of space

    // Set up the font and size
    doc.setFont("helvetica", "normal");

    // Header Section
    doc.setFontSize(28);
    doc.setFont("helvetica", "bold");
    doc.text(MARGIN, 30, formData.basicInfo.name); // Name
    
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(MARGIN, 40, formData.basicInfo.jobTitle); // Job Title

    // Contact Info (Email, Location, Phone) in one line
    doc.setFontSize(10);
    doc.text(MARGIN, 50, `${formData.basicInfo.email} | ${formData.basicInfo.phone} | ${formData.basicInfo.city}`);

    let nextSectionY = 60; // Start the Y position for the next section

    // Education Section
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text(MARGIN, nextSectionY, "Education");
    
    // Horizontal Line after Education Title
    doc.line(MARGIN, nextSectionY + 5, 190, nextSectionY + 5);

    nextSectionY += LINE_HEIGHT;

    formData.education.forEach((edu) => {
      // Check if content exceeds page height, if so, add a new page
      if (nextSectionY > PAGE_HEIGHT - 40) {
        doc.addPage();
        nextSectionY = 20; // Reset Y position for new page
      }

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      // Degree, College, Marks
      doc.text(MARGIN, nextSectionY, `${edu.degree} - ${edu.marks}`);
      doc.text(MARGIN, nextSectionY + 5, edu.institute);

      // Timeline if available
      if (edu.startDate && edu.endDate) {
        doc.text(MARGIN, nextSectionY + 10, `${edu.startDate} to ${edu.endDate}`);
      }

      nextSectionY += 20; // Move the Y position down after each education entry
    });

    // Skills Section
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text(MARGIN, nextSectionY, "Skills");
    
    // Horizontal Line after Skills Title
    doc.line(MARGIN, nextSectionY + 5, 190, nextSectionY + 5);

    nextSectionY += LINE_HEIGHT;

    // Skills display horizontally with wrapping
    let x = MARGIN;
    const maxWidth = 180; // Max width of the line
    const spaceBetweenSkills = 3; // Space between skills

    formData.skills.forEach((skill) => {
      // If adding the skill exceeds the max width, move to the next line
      const skillWidth = doc.getTextWidth(skill);
      if (x + skillWidth > maxWidth) {
        x = MARGIN; // Reset to the start of the next line
        nextSectionY += LINE_HEIGHT; // Move down to the next line
      }

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(x, nextSectionY, skill);

      x += skillWidth + spaceBetweenSkills; // Move x position for next skill
    });

    nextSectionY += LINE_HEIGHT; // Update next section Y after skills section

    // Projects Section
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text(MARGIN, nextSectionY, "Projects");
    
    // Horizontal Line after Projects Title
    doc.line(MARGIN, nextSectionY + 5, 190, nextSectionY + 5);

    nextSectionY += LINE_HEIGHT;

    formData.projects.forEach((project) => {
      // Check if content exceeds page height, if so, add a new page
      if (nextSectionY > PAGE_HEIGHT - 40) {
        doc.addPage();
        nextSectionY = 20; // Reset Y position for new page
      }

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(MARGIN, nextSectionY, project.name); // Display Project Name
      nextSectionY += LINE_HEIGHT;

      // Project Description (Smaller Font)
      const projectDescription = project.description;
      const projectLink = project.link ? project.link : project.homepage ? project.homepage : project.html_url;

      doc.setFontSize(10);  // Smaller font for description
      doc.setFont("helvetica", "normal");

      let descriptionY = nextSectionY;
      const descriptionWidth = 180; // Max width for text
      const lines = doc.splitTextToSize(projectDescription, descriptionWidth);

      lines.forEach((line, i) => {
        doc.text(MARGIN, descriptionY + i * LINE_HEIGHT, line);
      });
      descriptionY += lines.length * LINE_HEIGHT;

      // Add Project Link as clickable
      doc.textWithLink(`Link: ${projectLink}`, MARGIN, descriptionY, { url: projectLink });

      nextSectionY = descriptionY + LINE_HEIGHT;
    });

    // Experience Section
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text(MARGIN, nextSectionY, "Experience");
    
    // Horizontal Line after Experience Title
    doc.line(MARGIN, nextSectionY + 5, 190, nextSectionY + 5);

    nextSectionY += LINE_HEIGHT;

    formData.experience.forEach((exp) => {
      // Check if content exceeds page height, if so, add a new page
      if (nextSectionY > PAGE_HEIGHT - 40) {
        doc.addPage();
        nextSectionY = 20; // Reset Y position for new page
      }

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      doc.text(MARGIN, nextSectionY, `${exp.role} at ${exp.company} (${exp.startDate} - ${exp.endDate})`);
      
      const expDescription = exp.description;
      const expDescriptionLines = doc.splitTextToSize(expDescription, 180);

      let descriptionExpY = nextSectionY + 5;
      expDescriptionLines.forEach((line, i) => {
        doc.text(MARGIN, descriptionExpY + i * LINE_HEIGHT, line);
      });

      nextSectionY = descriptionExpY + expDescriptionLines.length * LINE_HEIGHT + LINE_HEIGHT; // Move after description
    });

    // Save PDF
    doc.save(`${formData.basicInfo.name}-Resume.pdf`);
  };

  return (
    <div className="mt-8">
      {/* Button to generate resume */}
      <Button onClick={handleGenerateResume} variant="primary" className="mt-4">
        Download ATS-Friendly Resume
      </Button>
    </div>
  );
}
