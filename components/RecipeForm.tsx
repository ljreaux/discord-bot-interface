"use client";
import { addRecipe } from "@/actions/action";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";

export default function Form() {
  const [post, setPost] = useState({
    name: "",
    link: "",
  });
  const { toast } = useToast();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const { name } = await addRecipe(post);
        toast({
          title: "Command Successfully Added!",
          description: `${name} command has been successfully added`,
        });
        setPost({
          name: "",
          link: "",
        });
      }}
      className="flex flex-col w-screen gap-6 justify-center items-center py-12"
    >
      <h1 className="text-2xl">
        Enter a new recipe name and link in the form below.
      </h1>
      <div className="flex items-center  w-full justify-between px-8">
        <label>Recipe Name:</label>
        <Input
          name="command"
          type="text"
          value={post.name}
          onChange={(e) => {
            setPost({
              ...post,
              name: e.target.value,
            });
          }}
          required
          className="w-11/12"
        />
      </div>
      <div className="flex items-center  w-full justify-between px-8">
        <label>Link: </label>
        <Textarea
          name="response"
          value={post.link}
          onChange={(e) => {
            setPost({
              ...post,
              link: e.target.value,
            });
          }}
          required
          className="w-11/12"
        />
      </div>
      <Button
        type="submit"
        className={cn(buttonVariants({ variant: "secondary" }), "w-2/4")}
      >
        Submit
      </Button>
    </form>
  );
}
