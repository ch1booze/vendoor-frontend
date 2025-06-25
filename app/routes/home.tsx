import { Hero } from "~/home/hero";
import { Header } from "~/components/header";
import { Features } from "~/home/features";
import { FAQS } from "~/home/faqs";
import type { Route } from "./+types/home";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [{ title: "vendoor | Manage your biz with ease" }];
}

export default function Home() {
  return (
    <div className="border-b border-gray-200">
      <Header />
      <Hero />
      <Features />
      <FAQS />
      <Footer />
    </div>
  );
}
