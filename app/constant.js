import { BadgeIcon, BookOpen, GraduationCap, User } from "lucide-react";



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
    },
    {
        if : 4,
        name : "Dashboard",
        icon : User,
        path : '/dashboard',
        auth : user,
    }
]

