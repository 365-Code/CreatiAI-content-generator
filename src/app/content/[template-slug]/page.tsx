"use client";
import TemplateForm from "@/components/TemplateForm";
import { Template } from "@/components/Templates";
import { Button } from "@/components/ui/button";
import { templateList } from "@/lib";
import { AlertTriangle, ArrowLeft, Circle } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import { useMutation } from "react-query";

interface Props {
  params: { "template-slug": string };
}

const TemplateOutput = dynamic(() => import("@/components/TemplateOutput"), {
  ssr: false,
});

const ContentTemplate = ({ params }: Props) => {
  const currentTemplate: Template = templateList.find(
    (template) => template.slug == params["template-slug"]
  ) as Template;

  const [templateContent, setTemplateContent] = useState<string>("");

  const {
    mutate: generateAiContent,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: "generate-ai-content",
    mutationFn: async (formData: { [index: string]: string }) => {
      if (!currentTemplate) return;
      const templatePrompt = currentTemplate.aiPrompt;
      const geminiPrompt = JSON.stringify(formData) + ", " + templatePrompt;
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contentPrompt: geminiPrompt }),
      });
      // const result = await geminiSession(geminiPrompt);
      const result = await response.json();
      return {
        content: result.content,
      };
    },
    onSuccess(data) {
      if (data?.content) {
        setTemplateContent(data.content);
      }
    },
  });

  const handleTemplateContent = (templateData: { [index: string]: string }) => {
    generateAiContent(templateData);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:h-screen">
      <Link href={"/"}>
        <Button className="mb-4">
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="flex-1 h-full overflow-hidden grid grid-cols-1 gap-4 md:grid-cols-3">
        <TemplateForm
          currentTemplate={currentTemplate}
          userFormData={handleTemplateContent}
          loading={isLoading}
        />
        <div className="h-screen md:h-full md:col-span-2">
          <TemplateOutput templateContent={templateContent} />
        </div>
      </div>
    </div>
  );
};

export default ContentTemplate;
