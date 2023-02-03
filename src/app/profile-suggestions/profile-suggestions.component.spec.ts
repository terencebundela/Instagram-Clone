import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSuggestionsComponent } from './profile-suggestions.component';

describe('ProfileSuggestionsComponent', () => {
  let component: ProfileSuggestionsComponent;
  let fixture: ComponentFixture<ProfileSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
