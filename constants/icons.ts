import user from "@/assets/icons/user.png";
import explore from "@/assets/icons/explore.png";
import settings from "@/assets/icons/settings.png";
import home from "@/assets/icons/home.png";


export const icons = {
    user, explore, settings, home
} as const

export type IconKey = keyof typeof icons