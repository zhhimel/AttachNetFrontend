"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import AttachNetLogo from "../components/AttachNetLogo";
import Select from "../atoms/Select";
import Button from "../atoms/Button";


export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState("");
  const router = useRouter();

  const roles = [
    { id: 1, name: "Student" },
    { id: 2, name: "Teacher" },
  ];

  const handleRoleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSelectedRole(e.target.value);
  };

  const handleGetStarted = () => {
    if (!selectedRole) {
      alert("Please select a role to continue.");
      return;
    }

    const selectedRoleId = roles.find((role) => role.name === selectedRole)?.id;

    router.push(`/signup?role=${selectedRoleId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
      <header className="w-full py-6 bg-white shadow-md">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <AttachNetLogo />
          <h2 className="text-lg font-semibold text-gray-700 mt-2">AttachNet Portal</h2>
        </div>

      </header>

      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Discover Your Journey
          </h1>
          <p className="text-sm text-gray-600">
            Choose your role to begin exploring AttachNet's features
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
        >
          <div className="relative mb-6">
            <Select
              name="role"
              value={selectedRole}
              onChange={handleRoleChange}
              options={roles.map((role) => role.name)}
              placeholder="Select your role"
              className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-300 text-gray-700 focus:ring focus:ring-green-200 focus:border-green-400"
            />
          </div>

          <div className="space-y-4">
            <Button
              text="Start Now"
              onClick={handleGetStarted}
              className="w-full px-5 py-3 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 text-white font-medium rounded-md hover:from-teal-500 hover:to-indigo-600 transition-colors"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <span className="text-gray-600">Already a member? </span>
              <Button
                text="Log In"
                onClick={() => router.push("/login")}
                className="bg-transparent text-blue-500 font-semibold hover:text-blue-700 transition-colors"
              />
            </motion.div>
          </div>
        </motion.div>
      </main>

      <footer className="w-full py-4 bg-gray-200 text-center text-sm text-gray-600">
        © 2025 AttachNet. All rights reserved.
      </footer>
    </div>
  );
}
