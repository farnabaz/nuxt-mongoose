export default {
    mode: 'spa',
    generate: {
        fallback: true
    },
    components: true,
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/tailwindcss'
    ],
    modules: [
        '@nuxtjs/auth',
        '@nuxtjs/axios'
    ],
    serverMiddleware: [
        '~/functions'
    ],
    plugins: [
    ],

    auth: {
        redirect: {
            login: '/user/login',
            logout: '/',
            home: false,
        },
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'api/auth.login',
                        propertyName: 'res',
                    },
                    logout: { url: 'api/auth.logout' },
                    user: {
                        url: 'api/auth.me',
                        propertyName: 'res',
                    },
                },
            },
        },
    },
}