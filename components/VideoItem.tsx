"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { useState } from "react";
import { TableCell } from "./ui/table";
import { Input } from "./ui/input";
import { Button, buttonVariants } from "./ui/button";
import { deleteVideo } from "@/actions/action";
import { useToast } from "./ui/use-toast";
import { updateVideo } from "@/actions/action";

export default function TableItem({
  video,
  deleteThis,
}: {
  video: { command: string; response: string; _id: string };
  deleteThis: () => void;
}) {
  const [item, setItem] = useState({
    command: video.command,
    response: video.response,
  });
  const [edit, setEdit] = useState(false);
  const { toast } = useToast();

  return (
    <>
      <TableCell>
        {" "}
        <Input
          value={item.command}
          disabled={!edit}
          onChange={(e) => setItem({ ...item, command: e.target.value })}
        />
      </TableCell>
      <TableCell>
        <Input
          value={item.response}
          disabled={!edit}
          onChange={(e) => setItem({ ...item, response: e.target.value })}
        />
      </TableCell>
      <TableCell className="text-right flex gap-2 justify-end">
        {edit ? (
          <>
            <Button
              className="bg-green-500"
              onClick={() => {
                updateVideo({ ...item, _id: video._id });
                setEdit(false);
                toast({
                  title: "video Updated",
                  description: `${video.command} has been updated.`,
                });
              }}
            >
              Submit Changes
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setItem({ command: video.command, response: video.response });
                setEdit(false);
              }}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Buttons setEdit={setEdit} id={video._id} deleteThis={deleteThis} />
        )}
      </TableCell>
    </>
  );
}

const Buttons = ({
  setEdit,
  id,
  deleteThis,
}: {
  setEdit: (edit: boolean) => void;
  id: string;
  deleteThis: () => void;
}) => {
  const { toast } = useToast();
  return (
    <>
      <Button onClick={() => setEdit(true)}>Edit</Button>

      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="destructive">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              video.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: "destructive" })}
              onClick={() => {
                deleteVideo(id);
                deleteThis();
                toast({
                  title: "video Deleted",
                  description: `video ${id} has been deleted.`,
                });
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
