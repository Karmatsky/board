"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";


import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Hint } from "@/components/ui/hint";

export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Hint 
                label="Create a new organization"
                side="right"
                align="start"
                sideOffset={8}
                >
                <div className="aspect-square">
                    <button className="bg-white/25 h-full w-full rounded-md
                    flex items-center justify-center opacity-60 hover:opacity-100 transition">
                        <Plus className="text-white" />
                    </button>
                </div>
                </Hint>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
};