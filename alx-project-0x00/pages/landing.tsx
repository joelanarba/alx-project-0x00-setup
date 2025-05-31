
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
      <div className="space-y-4 mt-6">
        <Button title="Small Button" styles="text-sm px-3 py-1 rounded-sm" />
        <Button title="Medium Button" styles="text-base px-4 py-2 rounded-md" />
        <Button title="Large Button" styles="text-lg px-5 py-3 rounded-full" />
        <Button title="Extra Button" styles="text-lg px-5 py-3 rounded-lg" />
      </div>
    </div>
  );
}
