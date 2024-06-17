import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRecipes } from "@/actions/action";
import TableItem from "@/components/TableItem";
import connect from "@/lib/db";

export default async function EditRecipe() {
  await connect();
  const recipes = await getRecipes();
  return (
    <main>
      <Table>
        <TableCaption>A list of all recipes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">I.D.</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Link</TableHead>
            <TableHead className="text-right">Edit/Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recipes.map((recipe, i) => (
            <TableRow key={recipe._id}>
              <TableCell className="font-medium">{recipe._id}</TableCell>
              <TableItem recipe={recipe} index={i} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
