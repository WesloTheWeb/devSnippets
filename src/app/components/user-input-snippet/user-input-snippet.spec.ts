import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputSnippet } from './user-input-snippet';

describe('UserInputSnippet', () => {
  let component: UserInputSnippet;
  let fixture: ComponentFixture<UserInputSnippet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInputSnippet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInputSnippet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
