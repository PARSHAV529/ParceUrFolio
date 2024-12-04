import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "@/Redux/formDataSlice";

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
    <div>
      <h2 className="text-xl font-semibold">Education</h2>

      {/* Display the list of education entries */}
      <div className="space-y-4 mb-6">
        {educationData.map((edu, index) => (
          <div key={index} className="p-4 border rounded-lg bg-gray-50">
            <h3 className="font-bold text-lg">{edu.degree}</h3>
            <p>{edu.institute}</p>
            <p>
              {edu.startDate} - {edu.endDate || "Present"}
            </p>
            <p>Marks: {edu.marks}</p>
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

      {/* Form to add new education */}
      <form onSubmit={handleAdd} className="space-y-4">
        <div>
          <Label htmlFor="degree">Degree</Label>
          <Input id="degree" name="degree" placeholder="Enter your degree" />
        </div>

        <div>
          <Label htmlFor="institute">Institute</Label>
          <Input id="institute" name="institute" placeholder="Enter the name of your institute" />
        </div>

        <div>
          <Label htmlFor="startDate">Start Date</Label>
          <Input type="date" id="startDate" name="startDate" />
        </div>

        <div>
          <Label htmlFor="endDate">End Date</Label>
          <Input type="date" id="endDate" name="endDate" />
        </div>

        <div>
          <Label htmlFor="marks">Marks</Label>
          <Input id="marks" name="marks" placeholder="Enter your marks or 'Pursuing'" />
        </div>

        <Button type="submit" variant="primary">
          Add Education
        </Button>
      </form>
    </div>
  );
}
