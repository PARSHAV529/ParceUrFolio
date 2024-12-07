import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSelector, useDispatch } from "react-redux";
import { setBasicInfo } from "@/Redux/formDataSlice";

export function BasicInfoForm() {
  const dispatch = useDispatch();
  const basicInfo = useSelector((state) => state.formData.basicInfo);

  const handleChange = (field, value) => {
    dispatch(setBasicInfo({ [field]: value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleChange("profileImage", e.target.result); // Save image as base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Basic Information</h2>

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Enter your name"
          value={basicInfo.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter your email"
          value={basicInfo.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input
          id="jobTitle"
          placeholder="Enter your job title"
          value={basicInfo.jobTitle || ""}
          onChange={(e) => handleChange("jobTitle", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          placeholder="Enter your city"
          value={basicInfo.city || ""}
          onChange={(e) => handleChange("city", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          placeholder="Enter your phone number"
          value={basicInfo.phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="aboutMe">About Me</Label>
        <Textarea
          id="aboutMe"
          placeholder="Write a brief introduction about yourself"
          value={basicInfo.aboutMe || ""}
          onChange={(e) => handleChange("aboutMe", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="profileImage">Profile Image</Label>
        <div className="flex items-center gap-4">
          <Input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {basicInfo.profileImage && (
            <img
              src={basicInfo.profileImage}
              alt="Profile Preview"
              className="w-16 h-16 rounded-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
