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
import { getCommands } from "@/actions/action";
import CommandItem from "@/components/CommandItem";
import connect from "@/lib/db";

export default async function EditCommand() {
  await connect();
  const commands = await getCommands();
  return (
    <main>
      <Table>
        <TableCaption>A list of all recipes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">I.D.</TableHead>
            <TableHead>Command</TableHead>
            <TableHead>Response</TableHead>
            <TableHead className="text-right">Edit/Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {commands.map((command, i) => {
            return (
              <TableRow key={command._id}>
                <TableCell className="font-medium">{command._id}</TableCell>
                <CommandItem command={command} index={i} />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
