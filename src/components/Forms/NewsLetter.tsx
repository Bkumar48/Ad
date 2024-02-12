"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Icons } from "../Icons/Icons";
type Inputs = {
  formId: string;
  Email: string;
};
const NewsLetter = () => {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;


  const schema = z.object({
    formId: z.string(),
    Email: z.string().min(5, { message: "Email is required" }).email(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
  try {
    if (!scriptUrl) {
      throw new Error('Script URL is not defined');
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    reset(); // Reset the form after successful submission
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
};

  
  return (
    <form className="mt-6 relative" action="" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("formId")} value="newletterForm" />
      <input
        type="email"
        placeholder="Enter your email"
        {...register("Email")}
        className="w-full md:w-full p-2 rounded-md relative h-12 outline-none"
      />

      {errors.Email && <p className="text-red-600 pt-4">{errors.Email.message}</p>}

      <Button
        // type="submit"
        className="absolute inset-y-1 right-2 bg-[#FB9100] rounded-tl-none rounded-br-none "
      >
        <Icons.ArrowRightBroken className="text-xl" />
      </Button>
    </form>
  );
};

export default NewsLetter;
