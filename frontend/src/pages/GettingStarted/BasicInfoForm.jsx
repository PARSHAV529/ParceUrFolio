import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BasicInfoForm({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Basic Information</h2>

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Enter your name"
          value={formData.basicInfo.name || ""}
          onChange={(e) => handleChange("basicInfo", "name", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter your email"
          value={formData.basicInfo.email || ""}
          onChange={(e) => handleChange("basicInfo", "email", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input
          id="jobTitle"
          placeholder="Enter your job title"
          value={formData.basicInfo.jobTitle || ""}
          onChange={(e) => handleChange("basicInfo", "jobTitle", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          placeholder="Enter your city"
          value={formData.basicInfo.city || ""}
          onChange={(e) => handleChange("basicInfo", "city", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          placeholder="Enter your phone number"
          value={formData.basicInfo.phone || ""}
          onChange={(e) => handleChange("basicInfo", "phone", e.target.value)}
        />
      </div>
    </div>
  );
}
