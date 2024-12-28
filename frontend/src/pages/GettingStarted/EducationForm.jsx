import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "@/Redux/formDataSlice";
import {motion} from "framer-motion";

export function EducationForm() {
  const dispatch = useDispatch();
  const educationData = useSelector((state) => state.formData.education || []);

  const handleAdd = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newEducation = {
      degree: formData.get("degree"),
      institute: formData.get("institute"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      marks: formData.get("marks"),
    };

    if (!newEducation.degree || !newEducation.institute || !newEducation.startDate || !newEducation.marks) {
      alert("Please fill all required fields.");
      return;
    }

    dispatch(setEducation([...educationData, newEducation]));
    event.target.reset();
  };

  const handleRemove = (index) => {
    const updatedEducation = educationData.filter((_, i) => i !== index);
    dispatch(setEducation(updatedEducation));
  };

  return (
    <div className="space-y-6 p-6 rounded-xl shadow-lg bg-white"> 
  <motion.h2
    className="text-xl font-semibold"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    Education
  </motion.h2>

  {/* Display the list of education entries */}
  <motion.div
    className="space-y-4 mb-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {educationData.map((edu, index) => (
      <motion.div
        key={index}
        className="p-4 border rounded-lg bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        // Added hover animation
      >
        <h3 className="font-bold text-lg">{edu.degree}</h3>
        <p>{edu.institute}</p>
        <p>
          {edu.startDate} - {edu.endDate || "Present"}
        </p>
        <p>Marks: {edu.marks}</p>
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

  {/* Form to add new education */}
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
      whileHover={{ scale: 1.05 }}  // Hover effect for the form fields
    >
      <Label htmlFor="degree">Degree</Label>
      <Input id="degree" name="degree" placeholder="Enter your degree" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}  // Hover effect for the form fields
    >
      <Label htmlFor="institute">Institute</Label>
      <Input id="institute" name="institute" placeholder="Enter the name of your institute" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}  // Hover effect for the form fields
    >
      <Label htmlFor="startDate">Start Date</Label>
      <Input type="date" id="startDate" name="startDate" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}  // Hover effect for the form fields
    >
      <Label htmlFor="endDate">End Date</Label>
      <Input type="date" id="endDate" name="endDate" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}  // Hover effect for the form fields
    >
      <Label htmlFor="marks">Marks</Label>
      <Input id="marks" name="marks" placeholder="Enter your marks or 'Pursuing'" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        type="submit"
        variant="primary"
        whileHover={{ scale: 1.05 }}  // Hover effect for the button
      >
        Add Education
      </Button>
    </motion.div>
  </motion.form>
</div>

  );
}
