
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Landing() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Landing Page</h1>

      <Card />
      <Card />
      <Card />

      {/* Buttons with different sizes and shapes */}
      <div className="mt-6 space-y-4">
        <Button title="Small Rounded-sm" styles="text-sm px-3 py-1 rounded-sm" />
        <Button title="Medium Rounded-md" styles="text-base px-4 py-2 rounded-md" />
        <Button title="Large Rounded-full" styles="text-lg px-5 py-3 rounded-full" />
      </div>
    </div>
  );
}
