System.register(['./http-status-codes', './in-memory-backend.service'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (http_status_codes_1_1) {
                exportStar_1(http_status_codes_1_1);
            },
            function (in_memory_backend_service_1_1) {
                exportStar_1(in_memory_backend_service_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=core.js.map