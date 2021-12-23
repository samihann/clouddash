import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import('./Pages/Dashboard'));
const HomePage = React.lazy(() => import('./Pages/HomePage'));
const VirtualMachine = React.lazy(() => import('./Pages/VirtualMachine'));
const VMSS = React.lazy(() => import('./Pages/VMSS'));
const Template = React.lazy(() => import('./Pages/Template'));
const Scheduler = React.lazy(() => import('./Pages/Automation/Scheduler'));
const ScheduleScript = React.lazy(() => import('./Pages/Automation/ScheduleScript'));
const Docs = React.lazy(() => import('./Pages/Documentation/Docs'));
const AboutMe = React.lazy(() => import('./Pages/Documentation/AboutMe'));

const routes = [
    { path: '/dashboard', exact: true, name: 'Home', component: Dashboard },
    { path: '/homepage', exact: true, name: 'HomePage', component: HomePage },
    { path: '/virtual-machine', exact: true, name: 'Virtual Machine', component: VirtualMachine },
    { path: '/vmss', exact: true, name: 'Virtual Machine SS', component: VMSS },
    { path: '/template', exact: true, name: 'Template', component: Template },
    { path: '/scheduler', exact: true, name: 'Scheduler', component: Scheduler },
    { path: '/schedule-script', exact: true, name: 'ScheduleScript', component: ScheduleScript },
    { path: '/docs', exact: true, name: 'Docs', component: Docs },
    { path: '/about-me', exact: true, name: 'About Me', component: AboutMe },
];

export default routes;