import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setSkills } from "@/Redux/formDataSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function SkillsForm({ formData, handleAddSkill, handleRemoveSkill }) {
  const [newSkill, setNewSkill] = useState("");
  const dispatch = useDispatch()

  const addSkill = () => {
    if (newSkill.trim()) {
      handleAddSkill(newSkill.trim());
      const updatedArray = [...formData, newSkill];
      dispatch(setSkills(updatedArray))
      setNewSkill("");
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {(formData || []).map((skill, index) => (
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
      <div className="flex items-center gap-2 mt-4">
        <Input
          type="text"
          value={newSkill}
          placeholder="Enter a skill"
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <Button onClick={addSkill}>Add Skill</Button>
      </div>
    </div>
  );
}
