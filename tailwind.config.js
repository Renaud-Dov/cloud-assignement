module.exports = {
    content: ["./src/**/*.{js,jsx}",'./node_modules/tw-elements/dist/js/**/*.js',"./node_modules/flowbite/**/*.js"],
    theme: {
        fontFamily: {
            'Lato': ["Lato"]
        },
        extend: {
            keyframes: {
                wiggle: {
                    // move to the left
                    from: {
                        transform: 'translateX(10px)',
                    },
                    to: {
                        transform: 'translateX(-100px)',
                    }
                },
                'wiggle-back': {
                    // move to the right
                    from: {
                        transform: 'translateX(10px)',
                        opacity: 0
                    },
                    to: {
                        transform: 'translateX(0)',
                        opacity: 1
                    }
                },
                disappear: {
                    from: {
                        opacity: 1
                    },
                    to: {
                        opacity: 0
                    }
                },
            },
            animation: {
                wiggle: 'wiggle 1s forwards  ease-in-out',
                'wiggle-back': 'wiggle-back 1s forwards  ease-in-out',
                disappear: 'disappear 1s forwards  ease-in-out',
            }
        },
    },
    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/forms')
    ]
}
