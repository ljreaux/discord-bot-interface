"use client";
import React, { useState } from "react";
import { TableCell, TableRow, TableBody } from "./ui/table";
import TableItem from "./TableItem";

export default function RecipeTable({
  recipes,
}: {
  recipes: { _id: string; name: string; link: string }[];
}) {
  const [recipeList, setRecipeList] = useState(recipes);
  const deleteRecipeListItem = (i: number) =>
    setRecipeList(recipeList.filter((_, index) => index !== i));
  return (
    <TableBody>
      {recipeList.map((recipe, i) => (
        <TableRow key={recipe._id}>
          <TableCell className="font-medium">{recipe._id}</TableCell>
          <TableItem
            recipe={recipe}
            deleteThis={() => deleteRecipeListItem(i)}
          />
        </TableRow>
      ))}
    </TableBody>
  );
}
