import React from "react";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getVideos } from "@/actions/action";
import connect from "@/lib/db";
import VideoBody from "@/components/VideoBody";

export default async function EditCommand() {
  await connect();
  const commands = await getVideos();
  return (
    <main className="py-8">
      <Table>
        <TableCaption>A list of all videos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">I.D.</TableHead>
            <TableHead>Command</TableHead>
            <TableHead>Response</TableHead>
            <TableHead className="text-right">Edit/Delete</TableHead>
          </TableRow>
        </TableHeader>
        <VideoBody videos={commands} />
      </Table>
    </main>
  );
}
