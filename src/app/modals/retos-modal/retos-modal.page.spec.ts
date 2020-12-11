import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetosModalPage } from './retos-modal.page';

describe('RetosModalPage', () => {
  let component: RetosModalPage;
  let fixture: ComponentFixture<RetosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
