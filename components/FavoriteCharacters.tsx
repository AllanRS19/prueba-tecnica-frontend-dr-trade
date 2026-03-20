"use client";

import { useEffect, useState } from "react";
import { getFavorites } from "@/lib/utils";
import { fetcher } from "@/lib/api";
import NoResults from "@/components/NoResults";
import FavoritesSkeleton from "./skeletons/FavoritesSkeleton";
import CharacterCard from "./shared/CharacterCard";
import FetchError from "./FetchError";

const FavoriteCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getStoredFavorites = async () => {

            const ids = getFavorites();

            if (!ids.length || ids.length === 0) {
                setCharacters([]);
                setLoading(false);
                return;
            }

            try {

                const charactersData = await fetcher<Character[]>(`/character/${ids.join(",")}`);
                const normalized = Array.isArray(charactersData) ? charactersData : [charactersData];
                setCharacters(normalized);

            } catch (error: any) {
                setError(error.message);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getStoredFavorites();
    }, []);

    if (loading) return <FavoritesSkeleton />;

    if (error) return <FetchError
        title="Oops, looks like something went wrong on our end"
        description="It seems like we ran into an error while we were trying to fetch your data. Please try again later"
        icon="/icons/error-fetching.png"
        redirectText="Go back to home"
        redirectTo="/"
    />

    if (!characters.length || characters.length === 0) {
        return (
            <NoResults
                title="You do not have any favorites"
                description="It seems like you haven't selected any characters as favorites"
                icon="/icons/no-results.png"
                redirectTo="/"
                redirectText="Check characters"
            />
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-semibold text-white">Favorites</h1>
            <section className="characters-grid">
                {characters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        {...character}
                        isFavoritePage={true}
                    />
                ))}
            </section>
        </div>
    );
};

export default FavoriteCharacters;