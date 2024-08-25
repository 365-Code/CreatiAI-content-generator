"use client";
import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor, EditorProps } from "@toast-ui/react-editor";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";

type Props = {
  templateContent: string;
};

const TemplateOutput = ({ templateContent }: Props) => {
  const editorRef = useRef<Editor | null>(null);

  const handleEditorChange = () => {
    if (!editorRef.current) return;
  };

  useEffect(() => {
    if (templateContent && editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(templateContent);
    }
  }, [templateContent]);

  return (
    <div className="flex-1 flex flex-col gap-4 h-full">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Your Results
            <Button className="flex items-center gap-2">
              <Copy className="w-4 h-4" />
              Copy
            </Button>
          </CardTitle>
        </CardHeader>
      </Card>
      <div className="overflow-x-auto h-full flex-1">
        <Editor
          ref={editorRef}
          initialValue="Your Results Will Appear Here"
          previewStyle="vertical"
          height="100%"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default TemplateOutput;
