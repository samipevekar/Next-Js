"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as actions from "@/actions"
import { useActionState } from "react";

export default function CreateSnippetPage() {

  const [formStateData, xyx] = useActionState(actions.createSnippet,{message:''})

    

  return (
    <form action={xyx}>
      <div className="my-2">
        <Label className="my-1">Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div className="my-2">
        <Label className="my-1">Code</Label>
        <Textarea name="code" id="code" />
      </div>
      {formStateData.message && <div className="p-2 mt-2 bg-red-300 border-2 border-red-600">{formStateData.message}</div>}
      <Button type="submit" className="my-4" >New</Button>
    </form>
  );
}
