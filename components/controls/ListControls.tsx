import { Editor } from "@tiptap/react";
import { BaseControl } from "@/components/controls/BaseControl";

interface ListControlProps {
  editor: Editor;
}

export const BulletListControl = ({ editor }: ListControlProps) => (
  <BaseControl
    editor={editor}
    onClick={() => editor.chain().focus().toggleBulletList().run()}
    isActive={editor.isActive("bulletList")}
  >
    Bullet list
  </BaseControl>
);

export const OrderedListControl = ({ editor }: ListControlProps) => (
  <BaseControl
    editor={editor}
    onClick={() => editor.chain().focus().toggleOrderedList().run()}
    isActive={editor.isActive("orderedList")}
  >
    Ordered list
  </BaseControl>
);
