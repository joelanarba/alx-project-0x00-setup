
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
        <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
        <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
        <Button title="Large Rounded-full" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}
