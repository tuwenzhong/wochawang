import Home from "@/App"
import NotFind from "@/components/notFind"
import Login from "@/components/login"
import Wap from "@/components/wap"
import Categroy from "@/components/categroy"
import Contact from "@/components/contact"
import Cart from "@/components/cart"
import User from "@/components/user"
import Search from "@/components/search"
import Detail from "@/components/detail"

export const OneRouter = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/404",
        component: NotFind
    },
    {
        path:"/login",
        component:Login
    }
]
export const TwoRouter = [
    {
        path: "/home/wap",
        component: Wap
    },
    {
        path: "/home/categroy",
        component: Categroy
    },
    {
        path: "/home/contact",
        component: Contact
    }, 
    {
        path: "/home/cart",
        component: Cart
    }, 
    {
        path: "/home/user",
        component: User
    },
    {
        path:"/home/search",
        component:Search
    },
    {
        path:"/home/detail/:id",
        component:Detail
    }

]
