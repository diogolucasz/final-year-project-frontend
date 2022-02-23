import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { validatePermissions } from "../utilities/validatePermissions";

interface useCanProps {
    permissions?: string[];
    roles?: string[];
}


export function useCan({ permissions, roles }: useCanProps) {

    const { user, isAuthenticated } = useContext(AuthContext)

    if (!isAuthenticated) {
        return false;
    }

    const userHasPermissions = validatePermissions({ user, permissions, roles })

    return userHasPermissions;
}