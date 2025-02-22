"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PLACEHOLDER } from "@/configs/placeholder";
import { MenuBar } from "@/components/MenuBar";

const extensions = [StarterKit];

const Editor = () => {
  const editor = useEditor({
    extensions,
    content: PLACEHOLDER,
    immediatelyRender: false,
  });

  return (
    <>
      <MenuBar />
      <EditorContent editor={editor} />
    </>
  );
};

export default Editor;
