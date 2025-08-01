"use client";

import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import Image from "next/image";
import { Overlay } from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/actions";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutations";

import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

interface BoardCardProps {
    id: string;
    title: string;
    authorName: string;
    authorId: string;
    createdAt: number;
    imageUrl: string;
    orgId: string;
    isFavourite: boolean;
}

export const BoardCard = ({
    id,
    title,
    authorName,
    authorId,
    createdAt,
    imageUrl,
    orgId,
    isFavourite,
}: BoardCardProps) => {
    const { userId } = useAuth();

    const authorLabel = userId === authorId ? "You" : authorName;
    const createdAtLabel = formatDistanceToNow(createdAt, {
        addSuffix: true,
    });

    const {
        mutate: onFavourite,
        pending: pendingFavourite,
    } = useApiMutation(api.board.favourite)
    const {
        mutate: onUnfavourite,
        pending: pendingUnfavourite,
    } = useApiMutation(api.board.unfavourite)

    const toggleFavourite = () => {
        if (isFavourite) {
            onUnfavourite({ id })
                .catch(() => toast.error("Failed to unfavourite"))
        } else {
            onFavourite({ id, orgId })
                .catch(() => toast.error("Failed to favourite"))
        }
    }

    return (
        <Link href={`/board/${id}`}>
            <div className="group aspect-[100/127] border rounded-lg 
            flex flex-col justify-between overflow-hidden">
                <div className="relative flex-1 bg-amber-50">
                    <Image 
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-fit"
                    />
                    <Overlay />
                    <Actions
                        id={id}
                        title={title}
                        side="right"
                    >
                        <button
                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none"
                        >
                            <MoreHorizontal
                                 className="text-white opacity-75 hover:opacity-100 transition-opacity"
                            />
                        </button>
                    </Actions>
                </div>
                <Footer 
                    isFavourite={isFavourite}
                    title={title}
                    authorLabel={authorLabel}
                    createdAtLabel={createdAtLabel}
                    onClick={toggleFavourite}
                    disabled={pendingFavourite || pendingUnfavourite}
                />
            </div>
        </Link>
    );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
    return (
        <div className="aspect-[100/127] rounded-lg 
         justify-between overflow-hidden">
            <Skeleton className="h-full w-full" />
        </div>
    )
}