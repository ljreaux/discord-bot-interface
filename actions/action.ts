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
const deleteCommand = async (id: string) => {
  await Post.deleteOne({ _id: id }).then((result) => console.log(result));
};
const updateCommand = async (post: {
  _id: string;
  command: string;
  response: string;
}) => {
  await Post.updateOne(
    { _id: post._id },
    { command: post.command, response: post.response }
  ).then((result) => console.log(result));
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

const deleteRecipe = async (id: string) => {
  await Recipe.deleteOne({ _id: id }).then((result) => console.log(result));
};
const updateRecipe = async (recipe: {
  _id: string;
  name: string;
  link: string;
}) => {
  await Recipe.updateOne(
    { _id: recipe._id },
    { name: recipe.name, link: recipe.link }
  ).then((result) => console.log(result));
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

export {
  addCommand,
  getCommands,
  deleteCommand,
  updateCommand,
  addRecipe,
  getRecipes,
  deleteRecipe,
  updateRecipe,
};
