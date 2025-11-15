"use client";

import React, { useState } from "react";
import { TextField } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import { Label } from "radix-ui";
import { useContact } from "~/modules/contact/hooks/useContact";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    interestedProducts: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [alreadyExists, setAlreadyExists] = useState(false);

  const { submit, isLoading } = useContact({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: "", contact: "", interestedProducts: "" });
    },
    onDuplicate: () => {
      setAlreadyExists(true);
    },
    onError: (message) => {
      setErrors({ general: message });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.contact.trim())
      newErrors.contact = "Contact information is required";
    if (!formData.interestedProducts.trim())
      newErrors.interestedProducts = "Please enter interested products";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    void submit(formData);
  };

  const reset = () => {
    setSubmitted(false);
    setAlreadyExists(false);
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="space-y-4 py-10 text-center">
        <h3 className="text-2xl font-semibold">Thank You!</h3>
        <p className="text-muted-foreground">
          We've received your message and will get back to you shortly.
        </p>
        <Button variant="solid" onClick={reset}>
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  if (alreadyExists) {
    return (
      <div className="space-y-4 py-10 text-center">
        <h3 className="text-2xl font-semibold">Already Submitted</h3>
        <p className="text-muted-foreground">
          Looks like you've already submitted your contact information. We'll
          follow up with you shortly.
        </p>
        <Button variant="solid" onClick={reset}>
          Submit New Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label.Root htmlFor="name" className="mb-2 block">
            Name <span className="text-red-500">*</span>
          </Label.Root>
          <TextField.Root
            className="!mt-2"
            size="3"
            variant="classic"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <Label.Root htmlFor="contact" className="mb-2 block">
            Contact <span className="text-red-500">*</span>
          </Label.Root>
          <TextField.Root
            className="!mt-2"
            size="3"
            variant="classic"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Email or phone number"
          />
          {errors.contact && (
            <p className="mt-1 text-sm text-red-500">{errors.contact}</p>
          )}
        </div>

        <div>
          <Label.Root htmlFor="interestedProducts" className="mb-2 block">
            Interested Products <span className="text-red-500">*</span>
          </Label.Root>
          <TextField.Root
            className="!mt-2"
            size="3"
            variant="classic"
            id="interestedProducts"
            value={formData.interestedProducts}
            onChange={handleChange}
            placeholder="e.g., Solar Energy Systems, Energy Storage Solutions"
          />
          {errors.interestedProducts && (
            <p className="mt-1 text-sm text-red-500">
              {errors.interestedProducts}
            </p>
          )}
        </div>

        <div>
          <Button
            type="submit"
            variant="solid"
            size="3"
            className="!w-full"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>

        {errors.general && (
          <p className="mt-2 text-sm text-red-500">{errors.general}</p>
        )}
      </form>
    </div>
  );
}
