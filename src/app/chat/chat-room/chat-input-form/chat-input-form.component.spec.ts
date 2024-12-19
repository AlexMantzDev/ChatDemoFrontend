import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInputFormComponent } from './chat-input-form.component';

describe('ChatInputFormComponent', () => {
  let component: ChatInputFormComponent;
  let fixture: ComponentFixture<ChatInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatInputFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
