module.exports = {
    content: ["./src/**/*.{js,jsx}",'./node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        fontFamily: {
            'Lato': ["Lato"]
        },
        extend: {},
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ]
}
