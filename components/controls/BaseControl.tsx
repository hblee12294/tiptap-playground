import { Editor } from "@tiptap/react";

interface BaseControlProps {
  editor: Editor;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
  children: React.ReactNode;
}

export const BaseControl = ({
  onClick,
  disabled = false,
  isActive = false,
  children,
}: BaseControlProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-2 py-1 mr-1 rounded cursor-pointer ${
        isActive ? "bg-gray-200" : "hover:bg-gray-100"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};
