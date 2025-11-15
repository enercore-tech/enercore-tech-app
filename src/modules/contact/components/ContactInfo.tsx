import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "enercoretech@gmail.com",
      href: "mailto:enercoretech@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+66 2 123 4567",
      href: "tel:+6621234567",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Bangkok, Thailand",
      href: null,
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
      href: null,
    },
  ];

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
      <div className="space-y-4">
        {contactInfo.map((info) => {
          const Icon = info.icon;
          return (
            <div key={info.label} className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-2">
                <Icon className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-sm">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-foreground hover:text-primary font-medium transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{info.value}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
