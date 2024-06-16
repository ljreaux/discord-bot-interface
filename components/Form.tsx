"use client";
import { addCommand } from "@/actions/action";
import { useState } from "react";

export default function Form() {
  const [post, setPost] = useState({
    command: "",
    response: "",
  });
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await addCommand(post);
        setPost({
          command: "",
          response: "",
        });
      }}
    >
      <div>
        <label>command</label>
        <input
          name="command"
          type="text"
          value={post.command}
          onChange={(e) => {
            setPost({
              ...post,
              command: e.target.value,
            });
          }}
          required
          className="text-black"
        />
      </div>
      <div>
        <label>response</label>
        <textarea
          name="response"
          value={post.response}
          onChange={(e) => {
            setPost({
              ...post,
              response: e.target.value,
            });
          }}
          required
          className="text-black"
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
