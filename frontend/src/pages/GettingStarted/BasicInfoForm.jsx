import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSelector, useDispatch } from "react-redux";
import { setBasicInfo } from "@/Redux/formDataSlice";
import { motion } from "framer-motion";


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
    <motion.div
      className="space-y-6 p-6 rounded-xl shadow-lg bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.h2
        className="text-3xl font-extrabold text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        Basic Information
      </motion.h2>

      <div className="space-y-6">
        <motion.div
          className="space-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Label htmlFor="name" className="font-bold">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={basicInfo.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Label htmlFor="email" className="font-bold">
            Email
          </Label>
          <Input
            id="email"
            placeholder="Enter your email"
            value={basicInfo.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Label htmlFor="jobTitle" className="font-bold">
            Job Title
          </Label>
          <Input
            id="jobTitle"
            placeholder="Enter your job title"
            value={basicInfo.jobTitle || ""}
            onChange={(e) => handleChange("jobTitle", e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Label htmlFor="city" className="font-bold">
            City
          </Label>
          <Input
            id="city"
            placeholder="Enter your city"
            value={basicInfo.city || ""}
            onChange={(e) => handleChange("city", e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Label htmlFor="phone" className="font-bold">
            Phone
          </Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            value={basicInfo.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Label htmlFor="aboutMe" className="font-bold">
            About Me
          </Label>
          <Textarea
            id="aboutMe"
            placeholder="Write a brief introduction about yourself"
            value={basicInfo.aboutMe || ""}
            onChange={(e) => handleChange("aboutMe", e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Label htmlFor="profileImage" className="font-bold">
            Profile Image
          </Label>
          <div className="flex items-center gap-4">
            <Input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageUpload}
              className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
            />
            {basicInfo.profileImage && (
              <motion.img
                src={basicInfo.profileImage}
                alt="Profile Preview"
                className="w-16 h-16 rounded-full object-cover border-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
