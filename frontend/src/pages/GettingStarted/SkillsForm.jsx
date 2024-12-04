import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setSkills } from "@/Redux/formDataSlice";
import { useDispatch, useSelector } from "react-redux";

export function SkillsForm() {
  const dispatch = useDispatch();
  const skillsData = useSelector((state) => state.formData.skills || []);

  const handleAddSkill = (event) => {
    event.preventDefault();
    const newSkill = event.target.skill.value.trim();

    if (newSkill && !skillsData.includes(newSkill)) {
      dispatch(setSkills([...skillsData, newSkill]));
      event.target.reset(); // Clear the input field
    } else if (skillsData.includes(newSkill)) {
      alert("This skill is already added.");
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skillsData.filter((_, i) => i !== index);
    dispatch(setSkills(updatedSkills));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Skills</h2>

      {/* Display the list of skills */}
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-800"
          >
            <span className="mr-2">{skill}</span>
            <button
              className="text-red-500"
              onClick={() => handleRemoveSkill(index)} // Remove skill on click
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Form to add a new skill */}
      <form onSubmit={handleAddSkill} className="flex items-center gap-2 mt-4">
        <Input
          id="skill"
          name="skill"
          type="text"
          placeholder="Enter a skill"
        />
        <Button type="submit">Add Skill</Button>
      </form>
    </div>
  );
}
