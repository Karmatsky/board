"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounce } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import {
    ChangeEvent,
    useEffect,
    useState,
} from "react";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 500);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const url = qs.stringifyUrl(
            {
                url: "/",
                query: {
                    search: debouncedValue,
                },
            }, { skipEmptyString: true, skipNull: true }
        );
        router.push(url);
    }, [debouncedValue, router]);

    return (
        <div className="w-full relative">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"/>
            <Input 
            className="w-full max-w-[516px] pl-9"
            placeholder="Search boards"
            onChange={handleChange}
            value={value}  
            />  
        </div>
    )
};