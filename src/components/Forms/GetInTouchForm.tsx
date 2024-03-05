"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../Button/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { getintouchFormSubmission } from "@/lib/send-email";

function GetInTouchForm() {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
  const schema = z.object({
    formId: z.string(),
    Name: z.string().min(1, { message: "Name is required" }),
    Email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
    Message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      formId: "getInTouchForm",
      Name: "",
      Email: "",
      Message: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    getintouchFormSubmission(values);
    toast({
      variant: "default",
      description: "Your message has been sent successfully",
    });
    form.reset();
  }
  return (
    <div className="border p-5 rounded-lg">

      <h2 className="text-[1.688rem] md:text-4xl mb-4 inline-block">
        Get In Touch
        <div className="h-0.5 w-3/4 bg-[#BC1D8D]" />
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="formId"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="hidden" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name"
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4 bg-[#fafafa] border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4 bg-[#fafafa] border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Message"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    rows={5}
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4 bg-[#fafafa] border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            title="Send Your Enquiry"
            className="bg-white text-black "
            svgClassName="bg-[#F89520] group-hover/btn:right-[11rem]"
            type="submit"
          />
        </form>
      </Form>
    </div>
  );
}

export default GetInTouchForm;
