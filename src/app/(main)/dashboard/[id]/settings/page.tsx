interface Props {
    params: Promise<{ id: string }>;
}

export default async function WaitlistIdSettingsPage({ params }: Props) {
    const { id } = await params;

    return (
        <div>
            Settings Page of the waitlistId:{" "}
            <span className="font-medium tracking-wide underline">{id}</span>
        </div>
    );
}
