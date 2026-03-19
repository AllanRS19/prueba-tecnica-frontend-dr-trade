import Link from "next/link";
import Image from "next/image";
import ToggleFavoriteButton from "@/components/ToggleFavoriteButton";
import { fetcher } from "@/lib/api";
import { ArrowLeft } from "lucide-react";

const CharacterPage = async ({
    params
}: {
    params: Promise<{ id: string }>
}) => {


    const id = Number((await params).id);

    const { name, image, origin, species, status } = await fetcher<Character>(`/character/${id}`);

    return (
        <section className="character-page-container">
            <div className="character-image-side">
                <Image
                    src={image}
                    alt={name}
                    width={360}
                    height={360}
                    className="object-cover rounded-md"
                    loading="lazy"
                />

                <div className="character-specie">
                    <p>{species}</p>
                </div>
            </div>

            <div className="character-info-side">
                <div className="status-origin">
                    <p>● {status} - {origin.name}</p>
                </div>

                <h1 className="text-4xl font-bold">{name}</h1>

                <div className="flex flex-col gap-6">

                    {/* DATA TABLE */}
                    <div className="border-2 border-white">

                        {/* Row 1 */}
                        <div className="grid grid-cols-2 border-b-2 border-white">
                            <div className="p-4 border-r-2 border-white space-y-2">
                                <h3 className="text-base text-purple-400">Status</h3>
                                <p className="font-bold text-lg">{status}</p>
                            </div>
                            <div className="p-4 space-y-2">
                                <h3 className="text-base text-purple-400">Specie</h3>
                                <p className="font-bold text-lg">{species}</p>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div>
                            <div className="p-4 space-y-2">
                                <h3 className="text-base text-purple-400">Origin</h3>
                                <p className="font-bold text-lg">{origin.name}</p>
                            </div>
                        </div>

                    </div>

                    {/* TOGGLE FAVORITE BUTTON */}
                    <ToggleFavoriteButton id={id} />

                    {/* GO BACK HOME BUTTON */}
                    <Link
                        href="/"
                        className="action-button flex items-center gap-3 bg-green-500"
                    >
                        <ArrowLeft />
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CharacterPage;