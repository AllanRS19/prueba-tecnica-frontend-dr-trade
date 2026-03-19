// import { fetcher } from "@/lib/api";
// import NoResults from "@/components/NoResults";
// import SearchBar from "@/components/SearchBar";
// import CharacterCard from "@/components/shared/CharacterCard";
// import CharactersPagination from "@/components/CharactersPagination";

// const Home = async ({
//     searchParams
// }: {
//     searchParams?: Promise<{ page: string; name: string; }>
// }) => {

//     const page = (await searchParams)?.page || "";
//     const name = (await searchParams)?.name || "";

//     const { info, results: characters } = await fetcher<ApiResponse<Character>>('character', { page, name });

//     return (
//         <div className="home-container">
//             <SearchBar />
//             {characters.length > 0 ? (
//                 <>
//                     <section className="characters-grid">
//                         {characters.map((character) => (
//                             <CharacterCard
//                                 key={character.id}
//                                 {...character}
//                             />
//                         ))}
//                     </section>
//                     <CharactersPagination 
//                         totalPages={info?.pages as number}
//                         currentPage={Number(page) === 0 ? 1 : Number(page)}
//                     />
//                 </>
//             ) : <NoResults
//                 icon="/icons/no-results.png"
//                 title="Oops, looks like we were unable to find any results"
//                 description="Try searching using another words"
//             />}
//         </div>
//     )
// }

// export default Home;

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