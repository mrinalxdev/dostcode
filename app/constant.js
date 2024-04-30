import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";

export const menu = [
    {
        id : 1, 
        name : "All Courses",
        icon : BookOpen,
        path : "/courses"
    },
    {
        id : 2,
        name : "Membership",
        icon : BadgeIcon,
        path : '/member'
    },
    {
        id : 3,
        name : "Contribute",
        icon : GraduationCap,
        path : '/contribute'
    }
]