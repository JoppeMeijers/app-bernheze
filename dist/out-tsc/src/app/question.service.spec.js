import { TestBed } from '@angular/core/testing';
import { QuestionService } from './question.service';
describe('QuestionService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(QuestionService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=question.service.spec.js.map