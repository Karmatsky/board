import Image from "next/image";

export const Loading = () => {
    return (
        <div className="h-full w-full flex flex-col gap-y-4 justify-center items-center">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={120}
                className="animate-pulse duration-700"
            />
            {/* <p className="text-gray-500 text-sm">Loading...</p> */}

        </div>
    )
}