import CharactersList from "@/components/CharactersList";
import SearchBar from "@/components/SearchBar";
import CharactersListSkeleton from "@/components/skeletons/CharactersListSkeleton";
import { Suspense } from "react";

const Home = async ({
    searchParams
}: {
    searchParams?: Promise<{ page: string; name: string; }>
}) => {

    const page = (await searchParams)?.page || "";
    const name = (await searchParams)?.name || "";

    return (
        <div className="home-container">
            <SearchBar />
            <Suspense
                key={`${page}-${name}`}
                fallback={<CharactersListSkeleton />}
            >
                <CharactersList page={page} name={name}  />
            </Suspense>
        </div>
    )
}

export default Home;