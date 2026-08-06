// Lead capture is template-level configuration. Only the Apps Script URL changes per client.
export const leadConfig = {
  propertyEnquiry: {
    eyebrow: "Property enquiry",
    title: "Tell us what you are looking for",
    description: "Share your requirement and a property advisor will contact you shortly.",
    submitLabel: "Request a callback",
    source: "property-enquiry",
    successMessage: "Thank you. Your requirement has been received.",
    reloadSuccessMessage: "Thank you for sharing your requirement. Our property advisor will be in touch shortly.",
  },
  fields: {
    name: { label: "Full name", placeholder: "Your name" },
    phone: { label: "Phone number", placeholder: "10-digit mobile number" },
    email: { label: "Email address", placeholder: "you@example.com" },
    budget: { label: "Budget" },
    propertyType: { label: "Property type" },
    location: { label: "Preferred location" },
    message: { label: "Additional requirements", placeholder: "Anything else we should know?" },
  },
} as const;
