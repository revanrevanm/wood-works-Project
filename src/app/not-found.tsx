import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-cream-fade px-6 pt-24">
      <div className="text-center">
        <p className="font-display text-[8rem] font-semibold leading-none text-gold-gradient">
          404
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-walnut-800">
          This page got lost in the workshop
        </h1>
        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
          back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="primary" size="lg">
            <Link href="/">
              <Home className="h-5 w-5" /> Back Home
            </Link>
          </Button>
          <Button asChild variant="whatsapp" size="lg">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
