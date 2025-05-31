// pages/landing.tsx

import React from "react";
import Card from "@/components/Card"; // Import the Card component

export default function Landing() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Landing Page</h1>
      
      {/* Use the Card component here */}
      <Card />
      <Card />
      <Card />
    </div>
  );
}
