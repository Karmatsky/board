import Image from "next/image";

export const EmptyFavourites = () => {
    return (
        <div>
            <Image
                src="./empty-favourites.svg"
                height={140}
                width={140}
                alt="Empty favourites"
            />
            <h2 className="text-2xl font-semibold mt-6">
                No favourite board!
            </h2>
            <p className="text-muted-foreground text-sm mt-2 ">
                Try favouriting a board
            </p>
        </div>
    )
}