import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import DatePickerInput from "./DatePickerInput";
import { useDispatch } from "react-redux";
import { setEducation } from "@/Redux/formDataSlice";

export function EducationForm({ formData, handleChange, handleAddOrEdit }) {
  const [degree, setDegree] = useState("");
  const [institute, setInstitute] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [marks, setMarks] = useState("");
  const dispatch = useDispatch()


  const handleSubmit = () => {
    if (degree && institute && startDate && marks) {
      const newEducation = { degree, institute, startDate, endDate, marks };
      handleAddOrEdit("education",null, newEducation,"add");
      const updatedArray = [...formData, newEducation];
      dispatch(setEducation(updatedArray))
      

      // Reset the form
      setDegree("");
      setInstitute("");
      setStartDate(null);
      setEndDate(null);
      setMarks("");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Education</h2>

      <div>
        <Label htmlFor="degree">Degree</Label>
        <Input
          id="degree"
          placeholder="Enter your degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="institute">Institute</Label>
        <Input
          id="institute"
          placeholder="Enter the name of your institute"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="startDate">Start Date</Label>
        {/* <DatePickerInput
          selected={startDate}
          handleChange={(date) => setStartDate(date)}
        /> */}
        <Input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="endDate">End Date</Label>
        {/* <DatePickerInput
          selected={endDate}
          handleChange={(date) => setEndDate(date)}
        /> */}
         <Input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="marks">Marks</Label>
        <Input
          id="marks"
          placeholder="Enter your marks or 'Pursuing'"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
      </div>

      <Button onClick={handleSubmit} variant="primary">
        Add Education
      </Button>
    </div>
  );
}
