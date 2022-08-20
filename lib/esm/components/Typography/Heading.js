import React from "react";
var Heading = function (_a) {
    var children = _a.children, _b = _a.as, as = _b === void 0 ? "h1" : _b, className = _a.className;
    return React.createElement(as, { className: className }, children);
};
export default Heading;
