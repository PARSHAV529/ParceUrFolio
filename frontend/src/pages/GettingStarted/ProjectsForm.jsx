import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setProjects } from "@/Redux/formDataSlice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export function ProjectsForm({ formData, setFormData }) {
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    link: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const dispatch = useDispatch()


  // Effect to reset form when editing a project
  useEffect(() => {
    if (editingIndex !== null) {
      setNewProject(formData.projects[editingIndex]);
    } else {
      setNewProject({ name: "", description: "", link: "" });
    }
  }, [editingIndex, formData.projects]);

  const handleAddOrEditProject = () => {
    if (editingIndex !== null) {
      // Edit the existing project
      setFormData((prev) => {
        const updatedProjects = [...prev.projects];
        updatedProjects[editingIndex] = newProject;
        return { ...prev, projects: updatedProjects };
      });
      setEditingIndex(null); // Reset editing state
    } else {
      // Add a new project
      setFormData((prev) => ({
        ...prev,
        projects: [...prev.projects, newProject],
      }));
      const updatedArray = [...formData.projects, newProject];
      dispatch(setProjects(updatedArray))
    }
    setNewProject({ name: "", description: "", link: "" }); // Reset form after submission
  };

  const handleEdit = (index) => {
    setEditingIndex(index); // Set the index of the project to edit
  };

  const handleRemove = (index) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Projects</h2>
      <div>
        {(formData.projects || []).map((project, index) => (
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
