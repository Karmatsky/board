import Image from "next/image";

export const EmptySearch = () => {
    return (
        <div>
            <Image
                src="./empty-search.svg"
                height={140}
                width={140}
                alt="Empty search"
            />
            <h2 className="text-2xl font-semibold mt-6">
                No results found!
            </h2>
            <p className="text-muted-foreground text-sm mt-2 ">
                Try searching for something else
            </p>
        </div>
    )
}