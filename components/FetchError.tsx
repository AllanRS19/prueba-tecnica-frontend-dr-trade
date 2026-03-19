import Link from "next/link";
import Image from "next/image";

const FetchError = ({ title, description, icon, redirectTo, redirectText, children }: NoResultsProps) => {
    return (
        <div className="no-results">
            <div className="no-results-info">
                <Image
                    src={icon}
                    alt="Error fetching"
                    width={240}
                    height={240}
                    className="max-sm:size-40"
                />
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-lg text-muted-foreground">{description}</p>
                {redirectTo && (
                    <Link
                        href={redirectTo}
                        className="action-button go-home-link"
                    >
                        {redirectText}
                    </Link>
                )}
                {children && children}
            </div>
        </div>
    )
}

export default FetchError;