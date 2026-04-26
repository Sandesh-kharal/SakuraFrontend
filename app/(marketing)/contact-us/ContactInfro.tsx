import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 px-0 sm:space-y-8 lg:mt-0">
      {/* Contact Section */}
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary sm:text-xl">
            Get in Touch
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-indigo-600" />
            <div>
              <p className="font-semibold">Email Us</p>
              <p className="text-sm text-muted-foreground">
                support@Sakura.com <br />
                consultation@Sakura.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 text-indigo-600" />
            <div>
              <p className="font-semibold">Call Us</p>
              <p className="text-sm text-muted-foreground">
                +977 1-234567 (Nepal)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-indigo-600" />
            <div>
              <p className="font-semibold">Visit Us</p>
              <p className="text-sm text-muted-foreground">
                Thamel, Kathmandu <br />
                Nepal 44600
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary sm:text-xl">
            Business Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <span>Monday - Friday</span>
              <span className="text-muted-foreground">9:00 AM - 6:00 PM NPT</span>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <span>Saturday</span>
              <span className="text-muted-foreground">10:00 AM - 4:00 PM NPT</span>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <span>Sunday & Holidays</span>
              <span className="text-muted-foreground">Closed</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            *Consultation hours may vary during festivals and auspicious days
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
