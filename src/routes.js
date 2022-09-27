import Home from './components/Home.vue';
import AboutUs from './components/AboutUs';
import DailyToursViews from './components/DailyToursViews';
import WeeklyToursViews from './components/WeeklyToursViews';
import VipTurkey from './components/VipTurkeyViews';
import ContactUs from './components/ContactUs';
import ToursDescription from './components/ToursDescription';

export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        meta: {
            name: 'Everyday Travel'
        }
    },
    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            transition: 'slide-left',
            name: 'Home '
        },
    },
    {
        path: '/about-us',
        component: AboutUs,
        name: 'about-us',
        meta: {
            transition: 'slide-left',
            name: 'About Us'
        },
    },
    {
        path: '/daily-tours',
        component: DailyToursViews,
        name: 'daily-tours',
        meta: {
            transition: 'slide-left',
            name: 'Daily Tours'
        },
    },
    {
        path: '/weekly-tours',
        component: WeeklyToursViews,
        name: 'weekly-tours',
        meta: {
            transition: 'slide-left',
            name: 'Weekly Tours'
        },
    },
    {
        path: '/vip-turkey',
        component: VipTurkey,
        name: 'vip-turkey',
        meta: {
            transition: 'slide-left',
            name: 'Vip Turkey Tours'
        },
    },
    {
        path: '/details/:id',
        component: ToursDescription,
        name: 'details',
        meta: {
            transition: 'slide-left',
            name : 'Tour Details'
        },
    },
    {
        path: '/contact-us',
        component: ContactUs,
        name: 'contact-us',
        meta: {
            transition: 'slide-left',
            name: 'Contact Us'
        },
    },
];

