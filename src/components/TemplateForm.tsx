"use client";
import React, { useState } from "react";
import { Template } from "./Templates";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Loader2Icon } from "lucide-react";

type Props = {
  currentTemplate: Template;
  userFormData: (formData: { [index: string]: string }) => void;
  loading: boolean;
};

const TemplateForm = ({ currentTemplate, userFormData, loading }: Props) => {
  const [formData, setFormData] = useState<{ [index: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if(!formData){toast}
    userFormData(formData);
  };

  return (
    <Card className="shadow-md h-full">
      <CardHeader>
        <CardDescription>{currentTemplate.category}</CardDescription>
        <CardTitle className="flex items-center gap-2">
          <img
            src={currentTemplate.icon}
            width={50}
            height={50}
            alt={currentTemplate.name}
          />
          {currentTemplate.name}
        </CardTitle>
        <CardDescription>{currentTemplate.desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {currentTemplate.form?.map((formInput, i) => (
            <div key={i} className="mb-4 space-y-1">
              <Label htmlFor={formInput.name} className="font-semibold">
                {formInput.label}
              </Label>
              {formInput.field == "input" ? (
                <Input
                  name={formInput.name}
                  onChange={handleInputChange}
                  value={formData[formInput.name] || ""}
                  id={formInput.name}
                  required={formInput.required}
                />
              ) : formInput.field == "textarea" ? (
                <Textarea
                  name={formInput.name}
                  onChange={handleInputChange}
                  value={formData[formInput.name] || ""}
                  id={formInput.name}
                  required={formInput.required}
                  className="h-[10rem] resize-none"
                />
              ) : null}
            </div>
          ))}
          <Button
            type="submit"
            disabled={loading}
            className="w-full flex items-center gap-2"
          >
            {loading && <Loader2Icon className="w-4 h-4 animate-spin" />}
            Generate Content
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TemplateForm;
