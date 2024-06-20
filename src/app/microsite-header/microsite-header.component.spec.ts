import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositeHeaderComponent } from './microsite-header.component';

describe('MicrositeHeaderComponent', () => {
  let component: MicrositeHeaderComponent;
  let fixture: ComponentFixture<MicrositeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrositeHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrositeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
