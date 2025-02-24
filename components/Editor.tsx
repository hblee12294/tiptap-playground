"use client";

import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PLACEHOLDER } from "@/configs/placeholder";
import { MenuBar } from "@/components/MenuBar";

const extensions = [StarterKit];

const Editor = () => {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={PLACEHOLDER}
      immediatelyRender={false}
      editorContainerProps={{
        className: "prose prose-slate max-w-none",
      }}
    ></EditorProvider>
  );
};

export default Editor;
