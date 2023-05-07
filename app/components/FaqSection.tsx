"use client";
import HeadlessDisclosure from "./HeadlessDisclosure";

const FaqSection = () => {
  return (
    <div className="flex w-full flex-col justify-center px-4 pt-8">
      <div className="mx-auto w-full max-w-[1100px] rounded-2xl bg-white p-2">
        <p className="p-2">
          <span className="text-md rounded-md bg-zinc-800 p-2 text-white md:text-xl lg:text-2xl ">
            Frequently Asked Questions
          </span>
        </p>
        {faq.map((f, i) => (
          <HeadlessDisclosure key={i} question={f.question} answer={f.answer} />
        ))}
      </div>
    </div>
  );
};
export default FaqSection;

const faq = [
  {
    question: "What happens if I accidentally step on a crack on the sidewalk?",
    answer: "Oh, you don't want to know. Just make sure you avoid the cracks.",
  },
  {
    question: "Why do people disappear when they go to the Bermuda Triangle?",
    answer:
      "It's simple really, the triangle is a gateway to another dimension. Those who go missing are the lucky ones, they get to explore the unknown.",
  },
  {
    question: "Can I teach my cat to fly?",
    answer:
      "Unfortunately, no. Cats are not capable of sustained flight, but they are very good at jumping and climbing.",
  },
  {
    question: "Can I train my goldfish to do tricks?",
    answer:
      "While goldfish are intelligent creatures, their small size and lack of limbs make it difficult to train them to do tricks.",
  },
  {
    question: "Why do people say that aliens exist?",
    answer:
      "Because they do. They've been here for centuries, watching and waiting. The question is, what do they want from us?",
  },
  {
    question: "Can I sacrifice my neighbor's cat to summon a demon?",
    answer:
      "Technically, yes. But it's not recommended unless you're willing to deal with the consequences.",
  },
  {
    question: "Can I train my dog to do my homework?",
    answer:
      "While dogs are loyal and intelligent companions, they do not have the capability to do human homework. Stick to doing your own work or seeking help from a tutor or teacher.",
  },
  {
    question: "Why do people say that aliens exist?",
    answer:
      "Because they do. They've been here for centuries, watching and waiting. The question is, what do they want from us?",
  },
  {
    question: "Is it normal to hear voices when I'm alone?",
    answer: "Absolutely. In fact, it's abnormal not to.",
  },
  {
    question: "Can I communicate with ghosts using a ouija board?",
    answer:
      "While some people claim to have successfully communicated with ghosts using a ouija board, it's important to remember that there is no scientific evidence to support the existence of ghosts or the efficacy of ouija boards. Attempting to communicate with the supernatural may be harmful to your mental health and well-being, and may even put you in danger.",
  },
];
