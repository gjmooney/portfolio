import ContactForm from "@/components/ContactForm";
import AnimatedText from "@/components/animations/AnimatedText";
import Transition from "@/components/animations/TransitionEffect";
import Image from "next/image";
import hand from "public/contact/hand.png";

const page = () => {
  return (
    <main className="my-14 flex w-full flex-col items-center justify-center">
      <Transition />
      <AnimatedText text="Say Hi" />
      <div className="mt-16 flex h-full">
        <div className="h-full w-1/2">
          <Image priority src={hand} alt="hand" />
        </div>
        <ContactForm />
      </div>
    </main>
  );
};
export default page;
