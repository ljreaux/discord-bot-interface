"use server";

import Post from "@/models/commands";

const addCommand = async (post: { command: string; response: string }) => {
  const command = post.command;
  const response = post.response;

  const newPost = new Post({ command, response });
  await newPost.save();
};

const getCommands = async () => {
  return Post.find();
};

export { addCommand, getCommands };
