import Balancer from "react-wrap-balancer";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { LoginCardContent } from "./login-card-content";

export const LoginCard = () => {
    return (
        <Card className="w-96 drop-shadow-xl">
            <CardHeader>
                <CardTitle className="text-xl">Login</CardTitle>
                <CardDescription>
                    Login using a magic link sent to your email or use the
                    available OAuth providers.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <LoginCardContent />
            </CardContent>
            <CardFooter>
                <Balancer>
                    <p className="text-muted-foreground text-xs font-light">
                        Don't have an account? Use any of the options above and
                        your account will be automatically registered.
                    </p>
                </Balancer>
            </CardFooter>
        </Card>
    );
};
