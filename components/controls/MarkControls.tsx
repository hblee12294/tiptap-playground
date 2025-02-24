import { Editor } from "@tiptap/react";
import { BaseControl } from "@/components/controls/BaseControl";

interface MarkControlProps {
  editor: Editor;
}

export const BoldControl = ({ editor }: MarkControlProps) => (
  <BaseControl
    editor={editor}
    onClick={() => editor.chain().focus().toggleBold().run()}
    disabled={!editor.can().chain().focus().toggleBold().run()}
    isActive={editor.isActive("bold")}
  >
    Bold
  </BaseControl>
);

export const ItalicControl = ({ editor }: MarkControlProps) => (
  <BaseControl
    editor={editor}
    onClick={() => editor.chain().focus().toggleItalic().run()}
    disabled={!editor.can().chain().focus().toggleItalic().run()}
    isActive={editor.isActive("italic")}
  >
    Italic
  </BaseControl>
);

export const StrikeControl = ({ editor }: MarkControlProps) => (
  <BaseControl
    editor={editor}
    onClick={() => editor.chain().focus().toggleStrike().run()}
    disabled={!editor.can().chain().focus().toggleStrike().run()}
    isActive={editor.isActive("strike")}
  >
    Strike
  </BaseControl>
);

export const CodeControl = ({ editor }: MarkControlProps) => (
  <BaseControl
    editor={editor}
    onClick={() => editor.chain().focus().toggleCode().run()}
    disabled={!editor.can().chain().focus().toggleCode().run()}
    isActive={editor.isActive("code")}
  >
    Code
  </BaseControl>
);
