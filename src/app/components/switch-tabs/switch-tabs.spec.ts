import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTabs } from './switch-tabs';

describe('SwitchTabs', () => {
  let component: SwitchTabs;
  let fixture: ComponentFixture<SwitchTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
