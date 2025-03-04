interface Props {
    params: Promise<{ id: string }>;
}

export default async function WaitlistIdPage({ params }: Props) {
    const { id } = await params;

    return (
        <div>
            Dashboard Page of the waitlistId:{" "}
            <span className="font-medium tracking-wide underline">{id}</span>
        </div>
    );
}
