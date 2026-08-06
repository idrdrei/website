import FadeIn from "../FadeIn";
import {
  FaFacebookMessenger,
  FaWhatsapp,
  FaViber,
} from "react-icons/fa";
export default function CallToAction() {
  return (
    <section
  id="contact"
  className="scroll-mt-24 bg-[#1F4E8C] py-32 text-white"
>
      <div className="mx-auto flex max-w-5xl flex-col items-center px-8 text-center lg:px-16">

        <FadeIn>
          <p className="text-sm uppercase tracking-[0.35em] text-white/70">
            Book a Consultation
          </p>

          <h2 className="mt-6 text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
            Your vision deserves
            <br />
            expert care.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/75">
            Whether you're considering LASIK, cataract surgery,
            evaluation for an eye tumor, or a comprehensive eye
            examination, we're here to help you see your best.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">

  {/* Messenger */}
  <a
    href="https://www.facebook.com/idrdrei"
    target="_blank"
    rel="noopener noreferrer"
className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-medium text-[#1F4E8C] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-[#0084FF] hover:text-white"  >
    <FaFacebookMessenger size={20} />
    <span>Book via Messenger</span>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/639761782924?text=Hello%20Dr.%20Martin,%20I'd%20like%20to%20book%20an%20appointment."
    target="_blank"
    rel="noopener noreferrer"
className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:border-[#25D366]"  >
    <FaWhatsapp size={20} />
    <span>WhatsApp</span>
  </a>

  {/* Viber */}
  <a
    href="viber://chat?number=%2B639058616824"
className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7360F2] hover:border-[#7360F2]"  >
    <FaViber size={20} />
    <span>Viber</span>
  </a>

</div>

        </FadeIn>

      </div>
    </section>
  );
}