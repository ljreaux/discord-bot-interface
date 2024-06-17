"use server";

import Post from "@/models/commands";
import Recipe from "@/models/recipes";

const addCommand = async (post: { command: string; response: string }) => {
  const { command, response } = post;

  const newPost = new Post({ command, response });
  const savedPost = await newPost.save();

  return {
    command: savedPost.command,
    response: savedPost.response,
    id: savedPost._id,
  };
};

const getCommands = async () => {
  const posts = await Post.find({}).then((posts) =>
    posts.map((post) => {
      return {
        _id: post._id.toString(),
        command: post.command,
        response: post.response,
      };
    })
  );

  return posts;
};

const addRecipe = async (post: { name: string; link: string }) => {
  const { name, link } = post;

  const newPost = new Recipe({ name, link });
  const savedPost = await newPost.save();
  return {
    name: savedPost.name,
    link: savedPost.link,
    id: savedPost._id,
  };
};

const getRecipes = async () => {
  const recipes = Recipe.find().then((recipes) =>
    recipes.map((recipe) => {
      return {
        _id: recipe._id.toString(),
        name: recipe.name,
        link: recipe.link,
      };
    })
  );

  return recipes;
};

export { addCommand, getCommands, addRecipe, getRecipes };
