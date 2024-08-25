import { templateList } from "@/lib";
import React, { useState } from "react";
import TemplateCard from "./TemplateCard";

export interface Template {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form?: TemplateForm[];
}

export interface TemplateForm {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const Templates = ({ searchInput }: { searchInput: string }) => {
  const [templates, setTemplates] = useState<Template[]>(templateList);

  React.useEffect(() => {
    if (searchInput) {
      setTemplates((prev) =>
        prev.filter((t) =>
          t.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setTemplates(templateList);
    }
  }, [searchInput]);

  return (
    <div className="py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {templates.map((template, i) => (
          <TemplateCard key={i} {...template} />
        ))}
      </div>
    </div>
  );
};

export default Templates;
