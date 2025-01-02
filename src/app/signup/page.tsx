"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AttachNetLogo from "../components/AttachNetLogo";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Button from "../atoms/Button";

export default function SignupPage() {
  const searchParams = useSearchParams();
  const roleType = searchParams?.get("role") === "1" ? "Student" : "Teacher";
  const role = searchParams?.get("role");

  const [formData, setFormData] = useState({
    role: role,
    name: "",
    email: "",
    academicId: "",
    department: "",
    phone: "",
    batch: "",
    password: "",
  });

  const departments = ["CSE", "EEE", "CE", "ME", "BME", "ETE", "MSE", "MIE", "PME", "WRE", "Archi"];
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { name, email, academicId, department, phone, batch, password } = formData;
    if (!name || !email || !academicId || !department || !phone || !batch || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("User created successfully:", result);
        router.push("/login");
      } else {
        const error = await response.json();
        console.error("Failed to create user:", error);
        alert("Failed to create user. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred while creating the user.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container max-w-lg mx-auto p-8 bg-white shadow-md rounded-md">
        <div className="text-center mb-6">
          <div className="flex flex-col items-center">
            <AttachNetLogo />
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">
              Create Your AttachNet Account
            </h1>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label text="Role" />
            <input
              type="text"
              value={roleType}
              readOnly
              className="block w-full px-4 py-2 bg-gray-200 rounded-md border border-gray-300 text-gray-700 focus:outline-none"
            />
          </div>

          <div>
            <Label text="Name" />
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 py-2 bg-white rounded-md border border-gray-300 text-gray-700 focus:ring focus:ring-indigo-200"
            />
          </div>

          <div>
            <Label text="Email" />
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 bg-white rounded-md border border-gray-300 text-gray-700 focus:ring focus:ring-indigo-200"
            />
          </div>

          <div>
            <Label text={`${roleType} ID`} />
            <Input
              type="text"
              name="academicId"
              placeholder="Enter your academic ID"
              value={formData.academicId}
              onChange={handleChange}
              className="block w-full px-4 py-2 bg-white rounded-md border border-gray-300 text-gray-700 focus:ring focus:ring-indigo-200"
            />
          </div>

          <div>
            <Label text="Department" />
            <Select
              name="department"
              value={formData.department}
              onChange={handleChange}
              options={departments}
              placeholder="Select your department"
              className="block w-full px-4 py-2 bg-white rounded-md border border-gray-300 text-gray-700 focus:ring focus:ring-indigo-200"
            />
          </div>

          <div>
            <Label text="Phone" />
            <Input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full px-4 py-2 bg-white rounded-md border border-gray-300 text-gray-700 focus:ring focus:ring-indigo-200"
            />
          </div>

          <div>
            <Label text="Batch" />
            <Input
              type="text"
              name="batch"
              placeholder="Enter your batch"
              value={formData.batch}
              onChange={handleChange}
              className="block w-full px-4 py-2 bg-white rounded-md border border-gray-300 text-gray-700 focus:ring focus:ring-indigo-200"
            />
          </div>

          <div>
            <Label text="Password" />
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full px-4 py-2 bg-white rounded-md border border-gray-300 text-gray-700 focus:ring focus:ring-indigo-200"
            />
          </div>

          <Button
            text="Submit"
            onClick={handleSubmit}
            className="w-full px-5 py-3 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 text-white font-medium rounded-md hover:from-teal-500 hover:to-indigo-600 transition-colors"
          />

          <div className="text-center mt-4">
            <span className="text-gray-600">Already have an account? </span>
            <Button
              text="Log In"
              onClick={() => router.push("/login")}
              className="text-indigo-600 hover:underline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
