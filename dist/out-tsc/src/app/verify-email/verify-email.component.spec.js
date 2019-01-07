import { async, TestBed } from '@angular/core/testing';
import { VerifyEmailComponent } from './verify-email.component';
describe('VerifyEmailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [VerifyEmailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(VerifyEmailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=verify-email.component.spec.js.map