"use client";
import { truncate } from "@/app/lib/functions";
import { SafeAnimal } from "@/app/types";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

interface AnimalCardProps {
  animal: SafeAnimal;
  lastFeatured?: number;
  deleteBtn?: boolean;
  cancelBtn?: boolean;
}

const AnimalCard: React.FC<AnimalCardProps> = ({
  animal,
  lastFeatured,
  deleteBtn,
  cancelBtn,
}) => {
  const router = useRouter();

  const handleDelete = useCallback(
    (id: string) => {
      axios
        .delete(`/api/animals/${id}`)
        .then(() => {
          toast.success("Deleted");
          router.refresh();
        })
        .catch(() => {
          toast.error("Something went wrong!");
        });
    },
    [router]
  );

  const handleCancelSession = useCallback(
    (id: string) => {
      axios
        .delete(`/api/sessions/${id}`)
        .then(() => {
          toast.success("Cancelled Your Session");
          router.refresh();
        })
        .catch(() => {
          toast.error("Something went wrong!");
        });
    },
    [router]
  );

  return (
    <div
      className={`${
        lastFeatured === 3 ? "hidden sm:block lg:hidden xl:block" : ""
      } mx-auto w-full max-w-[400px] rounded-lg bg-slate-50 capitalize shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-600`}
    >
      {/* Image Container */}
      <div className="relative mx-auto flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-t-lg">
        <Image
          alt="animal card"
          src={animal.image}
          fill
          className="h-full w-full overflow-hidden object-cover"
        />
      </div>
      {/* Info */}
      <div className="flex flex-col gap-1">
        <div
          className={`w-full bg-zinc-800 p-3 text-center text-2xl font-light tracking-wider text-white ${merriweather.className}`}
        >
          {truncate(animal.name, 20)}
        </div>

        <div className="space-y-3 px-2">
          <div className="flex items-center justify-between font-light text-neutral-800">
            <p>{truncate(animal.species, 10)}</p>
            <p>{truncate(animal.location, 19)}</p>
          </div>
          <p>
            <span className="rounded-md bg-zinc-800 px-2 py-1 text-xl text-white">
              {animal.personality}
            </span>
          </p>
          <p>
            <span className="rounded-md bg-zinc-800 px-2 py-1 text-xl text-white">
              {animal.age} Years Old
            </span>
          </p>

          {/* button container */}
          <div className="pb-3">
            <button
              onClick={() => {
                router.push(`/animal/${animal.id}`);
              }}
              className="my-1 w-full rounded-md border-2 border-zinc-800 p-2 transition duration-300 hover:bg-zinc-800 hover:text-white"
            >
              View More
            </button>
            {deleteBtn && (
              <div className="text-center">
                <button
                  onClick={() => {
                    handleDelete(animal.id);
                  }}
                  className="font-semibold text-neutral-600 transition duration-300 hover:text-neutral-800"
                >
                  Delete
                </button>
              </div>
            )}
            {cancelBtn && (
              <div className="text-center">
                <button
                  onClick={() => {
                    handleCancelSession(animal.id);
                  }}
                  className="font-semibold text-neutral-600 transition duration-300 hover:text-neutral-800"
                >
                  Cancel Session
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnimalCard;
