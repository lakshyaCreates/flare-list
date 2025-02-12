import { getWaitlistBySlug } from "@/db";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const waitlist = await getWaitlistBySlug(slug);

    return <div>{JSON.stringify(waitlist)}</div>;
}
