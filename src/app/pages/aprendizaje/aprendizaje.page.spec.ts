import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprendizajePage } from './aprendizaje.page';

describe('AprendizajePage', () => {
  let component: AprendizajePage;
  let fixture: ComponentFixture<AprendizajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprendizajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AprendizajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
