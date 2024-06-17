"use client";
import React, { useState } from "react";
import { TableCell } from "./ui/table";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function TableItem({
  command,
  index,
}: {
  command: { command: string; response: string };
  index: number;
}) {
  const [{ command: instruction, response }, setItem] = useState({
    command: command.command,
    response: command.response,
  });
  const [edit, setEdit] = useState(false);

  return (
    <>
      <TableCell>
        {" "}
        <Input
          value={instruction}
          disabled={!edit}
          onChange={(e) => setItem({ response, command: e.target.value })}
        />
      </TableCell>
      <TableCell>
        <Textarea
          value={response}
          disabled={!edit}
          onChange={(e) =>
            setItem({ command: instruction, response: e.target.value })
          }
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
