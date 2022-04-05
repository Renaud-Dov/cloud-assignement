module.exports = {
    content: ["./src/**/*.{js,jsx}",'./node_modules/tw-elements/dist/js/**/*.js',"./node_modules/flowbite/**/*.js"],
    theme: {
        fontFamily: {
            'Lato': ["Lato"]
        },
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ]
}
