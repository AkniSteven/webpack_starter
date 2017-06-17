module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    extends: 'eslint-config-airbnb',
    globals: {
        Pusher: true,
        io: true,
        ActionCable: true
    },
    env: {
        browser: true
    },
    rules: {
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 0,
            maxBOF: 0,
        }],
        'no-undef': 'off',
        'no-unused-vars': 'off',
    }
};