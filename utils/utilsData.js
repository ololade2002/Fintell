
import { UilChart,UilEstate,
    UilClipboardAlt,
    UilUsdSquare, UilSetting, UilUser, UilArrowUp, UilArrowDown,UilUsersAlt, UilMoneyWithdrawal } from '@iconscout/react-unicons'



export const sidebarData = [
    {
        title:'Dashboard',
        icon:UilEstate,
    },
    {
        title:'Purchase',
        icon:UilClipboardAlt,
    },
    {
        title:'Analytics',
        icon:UilChart,
    },
    {
        title:'Production',
        icon:UilUsdSquare,
    },
    {
        title:'Accounts',
        icon:UilUser,
    },
    {
        title:'Settings',
        icon:UilSetting,
    },
]

export const customerSection = [
    {
        title:'Customers',
        icon1:UilUsersAlt,
        number:'1,456',
        icon2: UilArrowUp,
        text:'+6.5%'
    },
    {
        title:'Revenue',
        icon1:UilUsdSquare,
        number:'$5,200',
        icon2:UilArrowUp,
        text:'+0.10%'
    },
    {
        title:'Profit',
        icon1: UilMoneyWithdrawal,
        number:'60%',
        icon2:UilArrowUp,
        text:'+10%'
    },
    {
        title:'Invoices',
        icon1:UilClipboardAlt,
        number:'1.135',
        icon2:UilArrowUp,
        text:'+11.5%'
    },
]

