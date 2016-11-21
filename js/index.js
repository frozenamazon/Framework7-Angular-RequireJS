requirejs.config({
    paths: {
        angular: 'js/angular.min',
        framework7: 'js/framework7.min'
    },
    priority: [
        "angular"
    ],
    shim: {
        angular: {
            exports: "angular"
        },
        framework7: {
            exports: "framework7"
        }
    },
    deps: [
        "./js/main"
    ]
});
