import { Edit, Palette, Download, Server, UserCircle } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Menu items for ParceUrFolio
const items = [
  {
    title: "Get Started",
    url: "/GettingStarted",
    icon: UserCircle,
  },
  {
    title: "Select Template",
    url: "/select-template",
    icon: Edit,
  },
  {
    title: "Choose Theme",
    url: "/themes",
    icon: Palette,
  },
  {
    title: "Download Portfolio(PDF)",

    icon: Download,
  },
  {
    title: "Host Portfolio",
    url: "/host",
    icon: Server,
  },
  {
    title: "Download Resume",
    url: "/resume",
    icon: Download,
  },
];

export function AppSidebar() {
  const [hideNavbar, setHideNavbar] = useState(false);

  // Accessing themes and the selected theme from Redux store
  const { selectedtemplate } = useSelector((state) => state.theme); // State to control navbar visibility

  const generatePDF = async () => {
    await new Promise((resolve) => {
      setHideNavbar(true);
      setTimeout(resolve, 100); // Give some time for React to update the DOM
    });
    const templateElement = document.getElementById("template-preview");

    if (!templateElement) {
      console.error("Template element not found for PDF generation");
      return;
    }

    // Capture the element as a canvas
    const canvas = await html2canvas(templateElement, {
      scale: 2, // Improves rendering quality
      useCORS: true, // Allows external images
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // Add the first page
    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);

    // Add additional pages if the content exceeds one page
    while (heightLeft > pageHeight) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Save the PDF
    pdf.save('${selectedtemplate}-portfolio.pdf');

    setHideNavbar(false);
  };
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <SidebarGroupLabel>ParceUrFolio</SidebarGroupLabel>
          </Link>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.url ? (
                      <Link
                        to={item.url}
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <item.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.title}
                        </span>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                        <item.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />

                        <span
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                          onClick={generatePDF}
                        >
                          Download as PDF
                        </span>
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
