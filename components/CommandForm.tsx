"use client";
import { addCommand } from "@/actions/action";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";

export default function Form() {
  const [post, setPost] = useState({
    command: "!",
    response: "",
  });
  const { toast } = useToast();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const { command } = await addCommand(post);
        toast({
          title: "Command Successfully Added!",
          description: `${command} command has been successfully added`,
        });
        setPost({
          command: "",
          response: "",
        });
      }}
      className="flex flex-col w-screen gap-6 justify-center items-center py-12"
    >
      <h1 className="text-2xl">
        Enter a new command and response in the form below.
      </h1>
      <div className="flex items-center  w-full justify-between px-8">
        <label>Command:</label>
        <Input
          name="command"
          type="text"
          value={post.command}
          onChange={(e) => {
            setPost({
              ...post,
              command: e.target.value,
            });
          }}
          required
          className="w-11/12"
        />
      </div>
      <div className="flex items-center  w-full justify-between px-8">
        <label>Response: </label>
        <Textarea
          name="response"
          value={post.response}
          onChange={(e) => {
            setPost({
              ...post,
              response: e.target.value,
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
