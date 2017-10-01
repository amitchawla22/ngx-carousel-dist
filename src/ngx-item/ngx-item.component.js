import { Component } from '@angular/core';
var NgxItemComponent = /** @class */ (function () {
    function NgxItemComponent() {
    }
    NgxItemComponent.prototype.ngOnInit = function () {
    };
    NgxItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-item',
                    template: "<div class=\"item\"><ng-content></ng-content></div>",
                    styles: ["\n    .item {\n        display: inline-block;\n        white-space: initial;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgxItemComponent.ctorParameters = function () { return []; };
    return NgxItemComponent;
}());
export { NgxItemComponent };
//# sourceMappingURL=ngx-item.component.js.map