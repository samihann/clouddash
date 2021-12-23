export default {
    items: [
        {
            id: 'home',
            title: 'Home',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'home',
                    title: 'Home',
                    type: 'item',
                    url: '/homepage',
                    icon: 'feather icon-home',
                },
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'compute',
            title: 'Cloud Compute',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'virtual-machine',
                    title: 'Virtual Machine',
                    type: 'item',
                    url: '/virtual-machine',
                    icon: 'feather icon-server',
                },
                {
                    id: 'virtual-machive-ss',
                    title: 'VM Scale Set',
                    type: 'item',
                    url: '/vmss',
                    icon: 'feather icon-server',
                },
                {
                    id: 'template',
                    title: 'Template',
                    type: 'item',
                    url: '/template',
                    icon: 'feather icon-layout',
                }
            ]
        },
        {
            id: 'automation',
            title: 'Automation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'scheduler',
                    title: 'Instance Scheduler',
                    type: 'item',
                    url: '/scheduler',
                    icon: 'feather icon-clock',
                },
                {
                    id: 'schedule-script',
                    title: 'Script Scheduler',
                    type: 'item',
                    url: '/schedule-script',
                    icon: 'feather icon-file',
                },
            ]
        },
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'sign-up',
                    title: 'Sign Up Page',
                    type: 'item',
                    url: '/auth/signup-1',
                    icon: 'feather icon-lock',
                },
                {
                    id: 'sign-in',
                    title: 'Sign In Page',
                    type: 'item',
                    url: '/auth/signin-1',
                    icon: 'feather icon-log-in',
                },
            ]
        },
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'docs',
                    title: 'Documents',
                    type: 'item',
                    url: '/docs',
                    icon: 'feather icon-info',
                },
                {
                    id: 'about-me',
                    title: 'About Me',
                    type: 'item',
                    url: '/about-me',
                    icon: 'feather icon-user',
                },
            ]
        }

    ]
}