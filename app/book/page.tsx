import Hero from "@/components/book/Hero";
import Clinics from "@/components/book/Clinics";
import BookingForm from "@/components/book/BookingForm";

export default function BookPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Clinics />
      <BookingForm />
    </main>
  );
}