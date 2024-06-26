"use client";
import { Socials } from "@/components/site/socials";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const mutation = useMutation(
    (
      formData: {
        firstname: string,
        lastname: string,
        email: string,
        password: string,
      }) => {
      return axios.post("/api/message", formData)
    },
    {
      onSuccess: () => {
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: ""
        })
      }
    }
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = formData;

    mutation.mutate({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    })
  };

  return (
    <div className="relative z-10 flex justify-center">
      <head><title>soapreal_ | Contact</title></head>
      <div className="absolute inset-0">
        <BackgroundBeams />
      </div>
      <div className="relative max-w-md w-full mx-auto rounded-none md:rounded-2xl mt-[8rem] p-4 md:p-8 shadow-input bg-black/[0.5] bg-opacity-30 backdrop-filter backdrop-blur-sm">
        <h2 className="font-bold text-xl text-neutral-200">Send something to me.</h2>
        <p className="text-sm max-w-sm mt-2 text-neutral-300"></p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input required id="firstname" placeholder="John" type="text" value={formData.firstname} onChange={handleChange} />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input required id="lastname" placeholder="Doe" type="text" value={formData.lastname} onChange={handleChange} />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input required id="email" placeholder="example@example.com" type="email" value={formData.email} onChange={handleChange} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Message</Label>
            <Input required id="password" placeholder="Hey, how are you." type="message" value={formData.password} onChange={handleChange} />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={mutation.isLoading}
          >
            Send &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="mt-10">
            <Socials
              username="soapreal_"
              youtube="soapreal_"
              discord="462098132881375263"
              twitch="soapreal_"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;
