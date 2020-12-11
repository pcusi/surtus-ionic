import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscripcionPage } from './inscripcion.page';

describe('InscripcionPage', () => {
  let component: InscripcionPage;
  let fixture: ComponentFixture<InscripcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
