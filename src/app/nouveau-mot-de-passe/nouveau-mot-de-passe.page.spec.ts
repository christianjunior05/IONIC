import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouveauMotDePassePage } from './nouveau-mot-de-passe.page';

describe('NouveauMotDePassePage', () => {
  let component: NouveauMotDePassePage;
  let fixture: ComponentFixture<NouveauMotDePassePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauMotDePassePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouveauMotDePassePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
