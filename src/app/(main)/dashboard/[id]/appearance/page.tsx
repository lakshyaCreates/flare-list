interface Props {
    params: Promise<{ id: string }>;
}

export default async function WaitlistIdAppearancePage({ params }: Props) {
    const { id } = await params;

    return (
        <div>
            Appearance Page of the waitlistId:{" "}
            <span className="font-medium tracking-wide underline">{id}</span>
        </div>
    );
}
