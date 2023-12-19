import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

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
  post?: Swagger.FreePostDetailResponseDto | undefined;
}

export default function Quill({ post }: QuillProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.freePost.title);
      setContent(post.freePost.description);
    }
  }, [post]);

  function submitHandler(event: any) {
    event.preventDefault();

    // const requestObj = {
    //   id: new Date().toISOString(),
    //   title: title,
    //   content: content,
    //   isDraft: isDraft,
    //   isPublished: isPublished,
    // };

    // fetch("/api/posts", {
    //   method: "POST",
    //   body: JSON.stringify(requestObj),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }

  function handleTitleChange(event: any) {
    event.preventDefault();
    setTitle(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        value={title}
        name="title"
        placeholder="Enter a title"
        onChange={handleTitleChange}
        required
      />
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        onChange={setContent}
        theme="snow"
      />
      <button>Save</button>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </form>
  );
}
