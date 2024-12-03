import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { setExperience } from "@/Redux/formDataSlice";
import { useDispatch } from "react-redux";

export function ExperienceForm({ formData, handleAddOrEdit, handleEdit }) {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (role && company && startDate) {
      const newExperience = { role, company, startDate, endDate };
      handleAddOrEdit(newExperience); 
      const updatedArray = [...formData, newExperience];
      dispatch(setExperience(updatedArray))// Ensure you call the correct function
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Experience</h2>
      
      <div>
        <Label htmlFor="role">Role</Label>
        <Input
          id="role"
          placeholder="Enter your role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          placeholder="Enter the company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="startDate">Start Date</Label>
        <Input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="endDate">End Date</Label>
        <Input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <Button onClick={handleSubmit} variant="primary">
        Add Experience
      </Button>
    </div>
  );
}
