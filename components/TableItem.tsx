"use client";
import React, { useState } from "react";
import { TableCell } from "./ui/table";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function TableItem({
  recipe,
  index,
}: {
  recipe: { name: string; link: string };
  index: number;
}) {
  const [{ name, link }, setItem] = useState({
    name: recipe.name,
    link: recipe.link,
  });
  const [edit, setEdit] = useState(false);

  return (
    <>
      <TableCell>
        {" "}
        <Input
          value={name}
          disabled={!edit}
          onChange={(e) => setItem({ link, name: e.target.value })}
        />
      </TableCell>
      <TableCell>
        <Input
          value={link}
          disabled={!edit}
          onChange={(e) => setItem({ name, link: e.target.value })}
        />
      </TableCell>
      <TableCell className="text-right flex gap-2 justify-end">
        {edit ? (
          <>
            <Button className="bg-green-500">Submit Changes</Button>
            <Button variant="destructive" onClick={() => setEdit(false)}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => setEdit(true)}>Edit</Button>
            <Button variant="destructive">Delete</Button>
          </>
        )}
      </TableCell>
    </>
  );
}
