"use client"
import { ChildProps } from "@/components/Provider";
import { Template } from "@/components/Templates";
import { Button } from "@/components/ui/button";
import { templateList } from "@/lib";
import Link from "next/link";
import React from "react";

interface Props extends ChildProps {
  params: {
    "template-slug": string;
  };
}

const TemplateLayout = ({ params, children }: Props) => {
  const currentTemplate: Template | undefined = templateList.find(
    (template) => template.slug == params["template-slug"]
  );

  if (!currentTemplate) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/error.svg" alt="Error" className="w-52 h-52" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Content Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The content you are looking for does not exist. Please check the URL
            or return to the homepage.
          </p>
          <Link href="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default TemplateLayout;
