import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackBackpackComponent } from './pack-backpack.component';

describe('PackBackpackComponent', () => {
  let component: PackBackpackComponent;
  let fixture: ComponentFixture<PackBackpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackBackpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackBackpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
