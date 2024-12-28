import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setSkills } from "@/Redux/formDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";


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
    <div className="space-y-6 p-6 rounded-xl shadow-lg bg-white"> 
  <motion.h2
    className="text-lg font-semibold mb-4"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    Skills
  </motion.h2>

  {/* Display the list of skills */}
  <motion.div
    className="flex flex-wrap gap-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {skillsData.map((skill, index) => (
      <motion.div
        key={index}
        className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-800"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }} // Hover effect to slightly scale up on hover
      >
        <span className="mr-2">{skill}</span>
        <motion.button
          className="text-red-500"
          onClick={() => handleRemoveSkill(index)}
          whileHover={{ scale: 1.2 }} // Hover effect for the remove button
        >
          ×
        </motion.button>
      </motion.div>
    ))}
  </motion.div>

  {/* Form to add a new skill */}
  <motion.form
    onSubmit={handleAddSkill}
    className="flex items-center gap-2 mt-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="w-full"
       // Hover effect for the input field
    >
      <Input
        id="skill"
        name="skill"
        type="text"
        placeholder="Enter a skill"
        
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }} // Hover effect for the add button
    >
      <Button type="submit">Add Skill</Button>
    </motion.div>
  </motion.form>
</div>

  );
}
