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
import { deleteRecipe } from "@/actions/action";
import { useToast } from "./ui/use-toast";
import { updateRecipe } from "@/actions/action";

export default function TableItem({
  recipe,
  deleteThis,
}: {
  recipe: { name: string; link: string; _id: string };
  deleteThis: () => void;
}) {
  const [item, setItem] = useState({
    name: recipe.name,
    link: recipe.link,
  });
  const [edit, setEdit] = useState(false);
  const { toast } = useToast();

  return (
    <>
      <TableCell>
        {" "}
        <Input
          value={item.name}
          disabled={!edit}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
        />
      </TableCell>
      <TableCell>
        <Input
          value={item.link}
          disabled={!edit}
          onChange={(e) => setItem({ ...item, link: e.target.value })}
        />
      </TableCell>
      <TableCell className="text-right flex gap-2 justify-end">
        {edit ? (
          <>
            <Button
              className="bg-green-500"
              onClick={() => {
                updateRecipe({ ...item, _id: recipe._id });
                setEdit(false);
                toast({
                  title: "Recipe Updated",
                  description: `${recipe.name} has been updated.`,
                });
              }}
            >
              Submit Changes
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setItem({ name: recipe.name, link: recipe.link });
                setEdit(false);
              }}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Buttons setEdit={setEdit} id={recipe._id} deleteThis={deleteThis} />
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
                deleteRecipe(id);
                deleteThis();
                toast({
                  title: "Recipe Deleted",
                  description: `Recipe ${id} has been deleted.`,
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
