interface Props {
    params: Promise<{ id: string }>;
}

export default async function WaitlistIdAnalyticsPage({ params }: Props) {
    const { id } = await params;

    return (
        <div>
            Analytics Page of the waitlistId:{" "}
            <span className="font-medium tracking-wide underline">{id}</span>
        </div>
    );
}
