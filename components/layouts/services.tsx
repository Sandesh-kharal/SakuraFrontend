import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  { title: "Language Training", desc: "Master Japanese with expert guidance." },
  { title: "Visa Support", desc: "Step-by-step help with documentation." },
  { title: "Job Placement", desc: "Guaranteed opportunities across 6 sectors." },
];

export default function Services() {
  return (
    <section className="py-16 px-6 grid gap-6 md:grid-cols-3">
      {services.map((service, idx) => (
        <Card key={idx} className="shadow-md">
          <CardHeader>
            <CardTitle>{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{service.desc}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
