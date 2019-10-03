import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostListComponent} from './post-list.component';
import {PostListItemComponent} from '../post-list-item/post-list-item.component';
import fakePosts from 'src/fakes/fake-posts';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../shared/shared.module';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let $component = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostListComponent, PostListItemComponent],
      imports: [RouterTestingModule, SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;

    component.posts = fakePosts;
    fixture.detectChanges();
  });

  afterEach(() => {
    $component.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
