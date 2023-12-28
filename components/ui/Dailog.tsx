"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export function DialogDemo() {
  const [name, setName] = useState('null');
  const [email, setEmail] = useState("");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    toast.success("Submitted Successfully!");
    e.target.reset();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} className="bg-purple-500 text-md">
          Get a quote
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get a quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and we will get back to you as soon as
            possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submitHandler}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Enter Your Name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Email
              </Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                id="username"
                placeholder="Enter Your Email"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
     <Toaster />
    </Dialog>
  );
}
