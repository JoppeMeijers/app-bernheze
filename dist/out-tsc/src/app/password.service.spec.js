import { TestBed } from '@angular/core/testing';
import { PasswordService } from './password.service';
describe('PasswordService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PasswordService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=password.service.spec.js.map