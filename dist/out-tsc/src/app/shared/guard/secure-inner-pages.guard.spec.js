import { TestBed, inject } from '@angular/core/testing';
import { SecureInnerPagesGuard } from './secure-inner-pages.guard';
describe('SecureInnerPagesGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [SecureInnerPagesGuard]
        });
    });
    it('should ...', inject([SecureInnerPagesGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=secure-inner-pages.guard.spec.js.map