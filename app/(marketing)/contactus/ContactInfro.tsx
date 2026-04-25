import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin,  } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="w-1/2 mx-auto p-6 space-y-8 container  mt-30">
      {/* Contact Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-primary font-semibold">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-indigo-600" />
            <div>
              <p className="font-semibold">Email Us</p>
              <p className="text-sm text-muted-foreground">
                support@Sakura.com <br />
                consultation@Sakura.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-indigo-600" />
            <div>
              <p className="font-semibold">Call Us</p>
              <p className="text-sm text-muted-foreground">
                +977 1-234567 (Nepal) 
                 </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-600" />
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
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-primary font-semibold">Business Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="text-muted-foreground">9:00 AM - 6:00 PM NPT</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span className="text-muted-foreground">10:00 AM - 4:00 PM NPT</span>
            </div>
            <div className="flex justify-between">
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
