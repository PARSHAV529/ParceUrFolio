import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setProjects } from "@/Redux/formDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import axios from "axios";

export function ProjectsForm() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.formData.projects || []);
  const [manualProjects, setManualProjects] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    link: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [username, setusername] = useState('PARSHAV529');

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

    const [ user, setUser ] = useState({
        name: 'Loading...'
    })

    useEffect(() => {
        if(!username) return

        loadUser()
        loadProjects()
    }, [])

    async function loadUser(){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`)

            setUser(response.data)
            console.log(response.data);
            
        } catch(err){
            alert(`It was not possible to find user ${username}!`)
        }
    }

    async function loadProjects(){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100&type=all`)
            
            dispatch(setProjects(response.data));
            console.log(response.data);
        } catch(err){
            alert('It was not possible to find projects!')
        }
    }


  const ImportProjectFromGithub = () => {

    if (username) {
      console.log(username);
      
        loadUser()
        loadProjects()
    } else {
        alert('Please fill out the username field.')
    }
  }

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

      <div className="flex items-center space-x-2 gap-3">
      <Switch
                      checked={manualProjects}
                      onCheckedChange={()=>setManualProjects((prev) => !prev)}
                     
                    />
      <Label htmlFor="airplane-mode">{!manualProjects ? "Github":"Manual"}</Label>
    </div>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg">
            <div className="mb-2">
              <strong>{project.name}</strong>
            </div>
            <div className="mb-2">{project.description}</div>
            {(project.link || project.html_url ) && (
              <div className="mb-2">
                <a
                  href={manualProjects ? project.link : project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {manualProjects ? project.link : project.html_url}
                </a>
              </div>
            )}
            {(project.homepage  ) && (
              <div className="mb-2">
                <a
                  href={ project.homepage }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {  project.homepage}
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
      {manualProjects ? (
        <div className="mb-4 mt-4">
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
        </div>
      ):(<div className="mt-4">
        <Label htmlFor="username">Enter Github Username</Label>
        <Input
          id="username"
          type="text"
          value={username}
          placeholder="Github Username"
          onChange={(e) =>
          {
            setusername(e.target.value)
            // console.log(e.target.value)
          }
            
          }
          className="mb-2"
        />
      </div>)}
      <Button variant="default" onClick={manualProjects ? handleAddOrEditProject: ImportProjectFromGithub}>
        {!manualProjects ? "Import Projects " : editingIndex !== null ? "Update Project" : "Add Project"}
      </Button>
    </div>
  );
}
