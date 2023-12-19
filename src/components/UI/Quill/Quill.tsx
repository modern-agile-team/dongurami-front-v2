import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

import { Button } from "@/components";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: {
    container: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
    ],
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
];

interface QuillProps {
  value: {
    title: string;
    description: string;
    isAnonymous?: boolean;
    isAllowComment?: boolean;
  };

  handleClickUpdate: () => void;

  setValue: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      isAnonymous: boolean;
      isAllowComment: boolean;
    }>
  >;
}

export default function Quill({
  value,
  handleClickUpdate,
  setValue,
}: QuillProps) {
  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setValue((prevValue) => ({
      ...prevValue,
      title: event.target.value,
    }));
  }

  function handleContentChange(content: string) {
    setValue((prevValue) => ({
      ...prevValue,
      description: content,
    }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleClickUpdate();
      }}
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        value={value.title}
        name="title"
        placeholder="Enter a title"
        onChange={handleTitleChange}
        required
      />
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        value={value.description}
        onChange={handleContentChange}
        theme="snow"
      />
      <Button>{value ? "생성" : "수정"}</Button>
      <div dangerouslySetInnerHTML={{ __html: value.description }} />
    </form>
  );
}
