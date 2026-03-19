"use client";

import FetchError from "@/components/FetchError";
import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void; }) {
    return (
        <div className="py-8 px-6">
            <FetchError
                title="Oops, looks like something went wrong on our end"
                description="It seems like we ran into an error while we were trying to fetch your data. Please try again later"
                icon="/icons/error-fetching.png"
            >
                <Button
                    onClick={() => reset()}
                    className="action-button text-base! font-semibold px-6!"
                >
                    Try again
                </Button>
            </FetchError>
        </div>

    );
}