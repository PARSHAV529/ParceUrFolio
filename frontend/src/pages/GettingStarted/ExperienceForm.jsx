import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setExperience } from "@/Redux/formDataSlice";
import { motion } from "framer-motion";

export function ExperienceForm() {
  const dispatch = useDispatch();
  const experienceData = useSelector(
    (state) => state.formData.experience || []
  );

  const handleAdd = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newExperience = {
      role: formData.get("role"),
      company: formData.get("company"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
    };

    if (
      !newExperience.role ||
      !newExperience.company ||
      !newExperience.startDate
    ) {
      alert("Please fill all required fields.");
      return;
    }

    dispatch(setExperience([...experienceData, newExperience]));
    event.target.reset();
  };

  const handleRemove = (index) => {
    const updatedExperience = experienceData.filter((_, i) => i !== index);
    dispatch(setExperience(updatedExperience));
  };

  return (
    <div className="space-y-6 p-6 rounded-xl shadow-lg bg-white"> 
      <motion.h2
        className="text-xl font-semibold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        Experience
      </motion.h2>

      {/* Display the list of experience entries */}
      <motion.div
        className="space-y-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="p-4 border rounded-lg bg-gray-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-lg">{exp.role}</h3>
            <p>{exp.company}</p>
            <p>
              {exp.startDate} - {exp.endDate || "Present"}
            </p>
            <motion.div whileHover={{ scale: 1.1 }} className="w-12">
              <Button
                variant="destructive"
                onClick={() => handleRemove(index)}
                className="mt-2"
              >
                Remove
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Form to add new experience */}
      <motion.form
        onSubmit={handleAdd}
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }} // Hover effect for the form fields
        >
          <Label htmlFor="role">Role</Label>
          <Input id="role" name="role" placeholder="Enter your role" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }} // Hover effect for the form fields
        >
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            placeholder="Enter the company name"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }} // Hover effect for the form fields
        >
          <Label htmlFor="startDate">Start Date</Label>
          <Input type="date" id="startDate" name="startDate" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }} // Hover effect for the form fields
        >
          <Label htmlFor="endDate">End Date</Label>
          <Input type="date" id="endDate" name="endDate" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            type="submit"
            variant="primary"
            whileHover={{ scale: 1.05 }} // Hover effect for the button
          >
            Add Experience
          </Button>
        </motion.div>
      </motion.form>
    </div>
  );
}
