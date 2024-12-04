import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSelector } from "react-redux";

export function BasicInfoForm({ formData, handleChange }) {
  const reduxData = useSelector(state=>state.formData.basicInfo)
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Basic Information</h2>

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Enter your name"
          value={reduxData.name || ""}
          onChange={(e) => handleChange("basicInfo", "name", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter your email"
          value={reduxData.email || ""}
          onChange={(e) => handleChange("basicInfo", "email", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input
          id="jobTitle"
          placeholder="Enter your job title"
          value={reduxData.jobTitle || ""}
          onChange={(e) => handleChange("basicInfo", "jobTitle", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          placeholder="Enter your city"
          value={reduxData.city || ""}
          onChange={(e) => handleChange("basicInfo", "city", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          placeholder="Enter your phone number"
          value={reduxData.phone || ""}
          onChange={(e) => handleChange("basicInfo", "phone", e.target.value)}
        />
      </div>
    </div>
  );
}
