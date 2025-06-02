"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps {
    searchParams?: Record<string, string | string[] | undefined>;
};

// @ts-ignore
const DashboardPage = ({
    searchParams,
}: DashboardPageProps) => {
    const { organization } = useOrganization(); 

    return (
        <div className="flex-1 h-[calc(100%-80px)] p-6">
            {/* {JSON.stringify(searchParams)} */}
            {!organization ? (
                <EmptyOrg /> 
            ) : (
                <BoardList
                    orgId={organization.id}
                    query={{
                        search: Array.isArray(searchParams?.search) ? searchParams?.search[0] : searchParams?.search,
                        favourites: Array.isArray(searchParams?.favourites) ? searchParams?.favourites[0] : searchParams?.favourites,
                    }}
                />
            )}
        </div>
    );
}

export default DashboardPage;