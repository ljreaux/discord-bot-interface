import React from "react";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCommands } from "@/actions/action";
import connect from "@/lib/db";
import CommandBody from "@/components/CommandBody";

export default async function EditCommand() {
  await connect();
  const commands = await getCommands();
  return (
    <main className="py-8">
      <Table>
        <TableCaption>A list of all commands.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">I.D.</TableHead>
            <TableHead>Command</TableHead>
            <TableHead>Response</TableHead>
            <TableHead className="text-right">Edit/Delete</TableHead>
          </TableRow>
        </TableHeader>
        <CommandBody commands={commands} />
      </Table>
    </main>
  );
}
