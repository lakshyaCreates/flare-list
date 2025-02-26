interface Props {
    params: Promise<{ id: string }>;
}

export default async function WaitlistIdPage({ params }: Props) {
    const { id } = await params;

    return <div>{id}</div>;
}
