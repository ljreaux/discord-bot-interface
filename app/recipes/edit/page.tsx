import React from "react";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRecipes } from "@/actions/action";
import TableBody from "@/components/TableBody";
import connect from "@/lib/db";

export default async function EditRecipe() {
  await connect();
  const recipes = await getRecipes();
  return (
    <main className="py-8">
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
        <TableBody recipes={recipes} />
      </Table>
    </main>
  );
}
