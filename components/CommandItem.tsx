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
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { deleteCommand, updateCommand } from "@/actions/action";

export default function TableItem({
  command,
  deleteThis,
}: {
  command: { command: string; response: string; _id: string };
  deleteThis: () => void;
}) {
  const [item, setItem] = useState({
    command: command.command,
    response: command.response,
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
        <Textarea
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
                updateCommand({ ...item, _id: command._id });
                setEdit(false);
                toast({
                  title: "Command Updated",
                  description: `${command.command} has been updated.`,
                });
              }}
            >
              Submit Changes
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setItem({
                  command: command.command,
                  response: command.response,
                });
                setEdit(false);
              }}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Buttons setEdit={setEdit} id={command._id} deleteThis={deleteThis} />
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
              recipe.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: "destructive" })}
              onClick={() => {
                deleteCommand(id);
                deleteThis();
                toast({
                  title: "Command Deleted",
                  description: `Command ${id} has been deleted.`,
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
