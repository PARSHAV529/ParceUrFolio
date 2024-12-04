import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setExperience } from "@/Redux/formDataSlice";

export function ExperienceForm() {
  const dispatch = useDispatch();
  const experienceData = useSelector((state) => state.formData.experience || []);

  const handleAdd = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newExperience = {
      role: formData.get("role"),
      company: formData.get("company"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
    };

    if (!newExperience.role || !newExperience.company || !newExperience.startDate) {
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
    <div>
      <h2 className="text-xl font-semibold">Experience</h2>

      {/* Display the list of experience entries */}
      <div className="space-y-4 mb-6">
        {experienceData.map((exp, index) => (
          <div key={index} className="p-4 border rounded-lg bg-gray-50">
            <h3 className="font-bold text-lg">{exp.role}</h3>
            <p>{exp.company}</p>
            <p>
              {exp.startDate} - {exp.endDate || "Present"}
            </p>
            <Button
              variant="destructive"
              onClick={() => handleRemove(index)}
              className="mt-2"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      {/* Form to add new experience */}
      <form onSubmit={handleAdd} className="space-y-4">
        <div>
          <Label htmlFor="role">Role</Label>
          <Input id="role" name="role" placeholder="Enter your role" />
        </div>

        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Enter the company name" />
        </div>

        <div>
          <Label htmlFor="startDate">Start Date</Label>
          <Input type="date" id="startDate" name="startDate" />
        </div>

        <div>
          <Label htmlFor="endDate">End Date</Label>
          <Input type="date" id="endDate" name="endDate" />
        </div>

        <Button type="submit" variant="primary">
          Add Experience
        </Button>
      </form>
    </div>
  );
}
