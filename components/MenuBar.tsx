import { useCurrentEditor } from "@tiptap/react";
import {
  BoldControl,
  ItalicControl,
  StrikeControl,
  CodeControl,
} from "@/components/controls/MarkControls";
import { HeadingControl } from "@/components/controls/HeadingControls";
import {
  BulletListControl,
  OrderedListControl,
} from "@/components/controls/ListControls";
import { BaseControl } from "@/components/controls/BaseControl";

export const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="py-2 sticky top-0 bg-white z-1">
      <div className="flex flex-wrap gap-1">
        <BoldControl editor={editor} />
        <ItalicControl editor={editor} />
        <StrikeControl editor={editor} />
        <CodeControl editor={editor} />

        <BaseControl
          editor={editor}
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          Clear marks
        </BaseControl>

        <BaseControl
          editor={editor}
          onClick={() => editor.chain().focus().clearNodes().run()}
        >
          Clear nodes
        </BaseControl>

        <BaseControl
          editor={editor}
          onClick={() => editor.chain().focus().setParagraph().run()}
          isActive={editor.isActive("paragraph")}
        >
          Paragraph
        </BaseControl>

        {[1, 2, 3, 4, 5, 6].map((level) => (
          <HeadingControl
            key={level}
            editor={editor}
            level={level as 1 | 2 | 3 | 4 | 5 | 6}
          />
        ))}

        <BulletListControl editor={editor} />
        <OrderedListControl editor={editor} />

        <BaseControl
          editor={editor}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive("codeBlock")}
        >
          Code block
        </BaseControl>

        <BaseControl
          editor={editor}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
        >
          Blockquote
        </BaseControl>

        <BaseControl
          editor={editor}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          Horizontal rule
        </BaseControl>

        <BaseControl
          editor={editor}
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          Hard break
        </BaseControl>

        <BaseControl
          editor={editor}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          Undo
        </BaseControl>

        <BaseControl
          editor={editor}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          Redo
        </BaseControl>
      </div>
    </div>
  );
};
