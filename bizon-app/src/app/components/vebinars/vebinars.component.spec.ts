import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VebinarsComponent } from './vebinars.component';

describe('VebinarsComponent', () => {
  let component: VebinarsComponent;
  let fixture: ComponentFixture<VebinarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VebinarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VebinarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
