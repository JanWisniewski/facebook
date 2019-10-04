import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddFormComponent } from './post-add-form.component';

describe('PostAddFormComponent', () => {
  let component: PostAddFormComponent;
  let fixture: ComponentFixture<PostAddFormComponent>;
  let $component = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddFormComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });

  afterEach(() => {
    $component.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
