import { fetcher } from "@/lib/api";
import NoResults from "@/components/NoResults";
import CharacterCard from "@/components/shared/CharacterCard";
import CharactersPagination from "@/components/CharactersPagination";

export default async function CharactersList({
    page,
    name,
}: {
    page?: string;
    name?: string;
}) {
    const { info, results: characters } =
        await fetcher<ApiResponse<Character>>("character", { page, name });

    if (characters.length === 0) {
        return (
            <NoResults
                icon="/icons/no-results.png"
                title="Oops, looks like we were unable to find any results"
                description="Try searching using another words"
            />
        );
    }

    return (
        <>
            <section className="characters-grid">
                {characters.map((character) => (
                    <CharacterCard key={character.id} {...character} />
                ))}
            </section>

            <CharactersPagination
                totalPages={info?.pages as number}
                currentPage={Number(page) === 0 ? 1 : Number(page)}
            />
        </>
    );
}