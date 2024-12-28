import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setProjects } from "@/Redux/formDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import axios from "axios";
import { motion } from "framer-motion";

export function ProjectsForm() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.formData.basicInfo.githubUsername);

  const projects = useSelector((state) => state.formData.projects || []);
  const [manualProjects, setManualProjects] = useState(false);
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
      setManualProjects((prev) => !prev);
    } else {
      alert("Please fill out the project name and description.");
    }
  };
  useEffect(()=>{
    loadProjects();
  },[projects])
  

  const loadProjects = async () => {
    if (!username) return;

    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100&type=all`);

      // Extract only the required fields
      const processedProjects = response.data.map((repo) => ({
        name: repo.name,
        description: repo.description || "No description available",
        link: repo.homepage || repo.html_url,
      }));

      dispatch(setProjects(processedProjects));
    } catch (err) {
      alert("It was not possible to find projects!");
    }
  };

  const ImportProjectFromGithub = () => {
    if (username) {
      // loadProjects();
    } else {
      alert("Please fill out the username field.");
    }
  };

  const handleEdit = (index) => {
    setManualProjects(true);
    setNewProject(projects[index]);
    setEditingIndex(index);
  };

  const handleRemove = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    dispatch(setProjects(updatedProjects));
  };

  return (
    <div className="space-y-6 p-6 rounded-xl shadow-lg bg-white">
      <motion.h2
        className="text-lg font-semibold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        Projects
      </motion.h2>

      {/* Switch for manual/GitHub projects */}
      <motion.div
        className="flex items-center space-x-2 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Switch
          checked={manualProjects}
          onCheckedChange={() => setManualProjects((prev) => !prev)}
        />
        <Label htmlFor="airplane-mode">{!manualProjects ? "GitHub" : "Manual"}</Label>
      </motion.div>

      {/* Display the list of projects */}
      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-4 p-4 border rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
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
            <div className="flex justify-start items-center space-x-5">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="default" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="destructive" onClick={() => handleRemove(index)}>
                  Remove
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Form to add or edit a project */}
      {manualProjects && (
        <motion.div
          className="mb-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
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
              setNewProject((prev) => ({
                ...prev,
                description: e.target.value,
              }))
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
        </motion.div>
      )}

      {manualProjects && (
        <motion.div whileHover={{ scale: 1.1 }} className="w-12">
          <Button
            variant="default"
            onClick={handleAddOrEditProject}
          >
            {editingIndex !== null ? "Update Project" : "Add Project"}
          </Button>
        </motion.div>
      )}
    </div>
  );
}
