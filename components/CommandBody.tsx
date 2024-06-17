"use client";
import React, { useState } from "react";
import { TableCell, TableRow, TableBody } from "./ui/table";
import TableItem from "./CommandItem";

export default function CommandBody({
  commands,
}: {
  commands: { _id: string; command: string; response: string }[];
}) {
  const [commandList, setCommandList] = useState(commands);
  const deleteRecipeListItem = (i: number) =>
    setCommandList(commandList.filter((_, index) => index !== i));
  return (
    <TableBody>
      {commandList.map((command, i) => (
        <TableRow key={command._id}>
          <TableCell className="font-medium">{command._id}</TableCell>
          <TableItem
            command={command}
            deleteThis={() => deleteRecipeListItem(i)}
          />
        </TableRow>
      ))}
    </TableBody>
  );
}
