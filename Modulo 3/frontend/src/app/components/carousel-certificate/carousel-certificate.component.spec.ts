import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCertificateComponent } from './carousel-certificate.component';

describe('CarouselCertificateComponent', () => {
  let component: CarouselCertificateComponent;
  let fixture: ComponentFixture<CarouselCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
