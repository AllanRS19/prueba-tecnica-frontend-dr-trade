"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toggleFavorite, isFavorite, cn } from "@/lib/utils";
import { Heart, HeartOff } from "lucide-react";
import { sileo } from "sileo";
import { usePathname } from "next/navigation";

const ToggleFavoriteButton = ({ id }: { id: number }) => {

    const pathname = usePathname();

    const isFavoritePage = pathname === '/favorites';

    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(isFavorite(id));
    }, [id]);

    const handleToggle = () => {
        const updated = toggleFavorite(id);
        if (!updated) {
            sileo.error({ title: "There was an error updating your preference" })
        }
        setFavorite(updated.includes(id));

        sileo.success({ title: `Character ${favorite ? "removed from" : "added to"} favorites` })
    };

    return (
        <Button
            onClick={handleToggle}
            className={cn("action-button", {
                "danger": favorite,
                "regular": !favorite
            })}
        >
            {favorite ? <HeartOff /> : <Heart />}
            {favorite ? `Remove ${!isFavoritePage ? 'from favorites' : ''}` : "Add to favorites"}
        </Button>
    );
};

export default ToggleFavoriteButton;