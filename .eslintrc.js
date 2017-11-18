module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: ['html','react'],
    // add your custom rules here
    rules: {
        'max-len': ['error', 90, {
            ignoreUrls: true,
            ignoreComments: true,
            ignoreTrailingComments: true
        }],
        'max-lines': ['error', 500],
        "no-unused-vars":0
    },
    globals: {}
}
