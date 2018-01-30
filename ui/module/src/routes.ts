
export module Routes {

    export const Root = [
        {
            route: ['', 'style-guide'],
            name: 'style-guide',
            moduleId: 'style-guide',
            nav: false,
            title: 'Style Guide'
        },
        {route: 'login', name: 'login', moduleId: 'login/auth', nav: false, title: 'Atmosphere'},
        {route: 'approvals', name: 'approvals', moduleId: 'login/approvals', nav: false, title: 'Approvals'}
    ];


    export const Main = [
        {
            route: 'settings',
            name: 'settings',
            moduleId: 'modules/main/routes/settings/index',
            nav: true,
            title: 'Settings',
            settings: {
                t: "main.routes.settings",
                isActive: true,
                icon: 'settings',
            }
        }, {
            route: 'users',
            name: 'users',
            moduleId: 'modules/main/routes/users/index',
            nav: true,
            title: 'Manage Users',
            settings: {
                t: "main.routes.users",
                icon: 'person_outline'
            }
        }, {
            route: 'main',
            name: 'main',
            moduleId: 'modules/main/routes/main/index',
            nav: true,
            title: 'Main',
            settings: {
                t: "main.routes.main",
                icon: 'home'
            }
        },
        {
            route: 'administration',
            name: 'administration',
            moduleId: 'modules/main/routes/admin/index',
            nav: true,
            title: 'Administration',
            settings: {
                t: "main.routes.admin",
                icon: 'build'
            }
        }

    ];

    export const Admin = [
        {
            route: 'signups',
            name: 'signups',
            moduleId: 'modules/main/routes/admin/signups/signups',
            nav: true,
            title: 'Signups',
            settings: {
                t: "main.routes.admin",
                icon: 'build'
            }
        },

        {
            route: 'system',
            name: 'system',
            moduleId: 'modules/main/routes/admin/system/system',
            nav: true,
            title: 'System',
            settings: {
                t: "main.routes.admin",
                icon: 'build'
            }
        }
    ];


    

}