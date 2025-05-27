import { CalendarDays, ClipboardPlus, FileChartLine, History, LayoutDashboard, MessageCircleMore, Phone, Settings } from "lucide-react"

export const generalNavLinks = [
    { label: 'Dashboard', icon: LayoutDashboard  },
    { label: 'History', icon: History },
    { label: 'Calendar', icon: CalendarDays },
    { label: 'Appointments', icon: ClipboardPlus},
    { label: 'Statistics', icon: FileChartLine },
]

export const toolsNavLinks = [
    { label: 'Chat', icon: MessageCircleMore },
    { label: 'Support', icon: Phone },
]

export const otherLinks = [
    {label:'Setting',icon: Settings }
]