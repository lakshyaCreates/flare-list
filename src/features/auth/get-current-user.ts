import { auth } from "@/auth";
import { getUserById } from "@/db";

export async function getCurrentUser() {
    const session = await auth();
    const user = session?.user;

    if (!user || !user.id) return null;

    const dbUser = await getUserById(user.id);
    if (!dbUser || !dbUser.id) return null;

    return dbUser;
}
