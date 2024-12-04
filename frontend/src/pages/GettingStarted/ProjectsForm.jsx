import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setProjects } from "@/Redux/formDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export function ProjectsForm() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.formData.projects || []);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    link: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrEditProject = () => {
    if (newProject.name.trim() && newProject.description.trim()) {
      const updatedProjects = [...projects];

      if (editingIndex !== null) {
        updatedProjects[editingIndex] = newProject; // Edit project
      } else {
        updatedProjects.push(newProject); // Add new project
      }

      dispatch(setProjects(updatedProjects));
      setNewProject({ name: "", description: "", link: "" });
      setEditingIndex(null);
    } else {
      alert("Please fill out the project name and description.");
    }
  };

  const handleEdit = (index) => {
    setNewProject(projects[index]);
    setEditingIndex(index);
  };

  const handleRemove = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    dispatch(setProjects(updatedProjects));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Projects</h2>

      {/* Display list of projects */}
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg">
            <div className="mb-2">
              <strong>{project.name}</strong>
            </div>
            <div className="mb-2">{project.description}</div>
            {project.link && (
              <div className="mb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {project.link}
                </a>
              </div>
            )}
            <div className="flex gap-2">
              <Button variant="default" onClick={() => handleEdit(index)}>
                Edit
              </Button>
              <Button variant="destructive" onClick={() => handleRemove(index)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Form to add or edit a project */}
      <div className="mb-4">
        <Input
          type="text"
          value={newProject.name}
          placeholder="Project Name"
          onChange={(e) =>
            setNewProject((prev) => ({ ...prev, name: e.target.value }))
          }
          className="mb-2"
        />
        <Input
          type="text"
          value={newProject.description}
          placeholder="Project Description"
          onChange={(e) =>
            setNewProject((prev) => ({ ...prev, description: e.target.value }))
          }
          className="mb-2"
        />
        <Input
          type="url"
          value={newProject.link}
          placeholder="Project Link"
          onChange={(e) =>
            setNewProject((prev) => ({ ...prev, link: e.target.value }))
          }
        />
      </div>
      <Button variant="default" onClick={handleAddOrEditProject}>
        {editingIndex !== null ? "Update Project" : "Add Project"}
      </Button>
    </div>
  );
}
