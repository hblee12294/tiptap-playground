import { Editor } from "@tiptap/react";
import { BaseControl } from "@/components/controls/BaseControl";

interface HeadingControlProps {
  editor: Editor;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const HeadingControl = ({ editor, level }: HeadingControlProps) => (
  <BaseControl
    editor={editor}
    onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
    isActive={editor.isActive("heading", { level })}
  >
    H{level}
  </BaseControl>
);
