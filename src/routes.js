import Home from './components/Home.vue';
import AboutUs from './components/AboutUs';
import ToursViews from './components/ToursViews';
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
        path: '/tours',
        component: ToursViews,
        name: 'tours',
        meta: {
            transition: 'slide-left',
            name: 'Tours'
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

