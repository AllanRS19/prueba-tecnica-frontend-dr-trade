import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ToggleFavoriteButton from "../ToggleFavoriteButton";

const CharacterCard = ({
    id,
    name,
    image,
    status,
    species,
    gender,
    origin: {
        name: originName
    },
    episode,
    isFavoritePage
}: CharacterCardProps) => {

    return (
        <div className="character-card">
            {isFavoritePage && (
                <div className="absolute right-4 top-4 size-fit z-50">
                    <ToggleFavoriteButton id={id} />
                </div>
            )}
            <Link href={`/character/${id}`}>
                <Image
                    src={image}
                    alt={name}
                    width={290}
                    height={160}
                    className="character-image"
                    loading="lazy"
                />
                <div className="character-card-body">
                    <div className="w-full flex items-center">
                        <p className="text-base font-semibold">{name}</p>
                        <div className="flex items-center ml-auto border-2 rounded-lg p-1">
                            <div className={cn("size-3 rounded-full bg-red-500 mr-1", {
                                "bg-green-500": status.toLowerCase() === 'alive',
                                "bg-red-500": status.toLowerCase() === 'dead'
                            })} />
                            <p className="text-xs">{status} ~ {species}</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap items-center gap-2">
                        <div className="border-2 rounded-lg p-1">
                            <p className="text-xs">Origin: {originName}</p>
                        </div>

                        <div className="border-2 rounded-lg p-1">
                            <p className="text-xs">Gender: {gender}</p>
                        </div>

                        <div className="border-2 rounded-lg p-1">
                            <p className="text-xs">{episode.length} episodes</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CharacterCard;