import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Quiz } from '../models/quiz.model';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-course-quiz',
  templateUrl: './course-quiz.component.html',
  styleUrls: ['./course-quiz.component.css']
})
export class CourseQuizComponent implements OnInit {
  @Input() quizId: string;
  quiz: Quiz;
  quizForm: FormGroup;

  constructor(private quizService: QuizService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.quizService.getQuiz(this.quizId).subscribe((quiz) => {
      this.quiz = quiz;
      this.createForm();
    });
  }

  createForm(): void {
    const formControls = {};
    this.quiz.questions.forEach((question) => {
      formControls[question.id] = [''];
    });
    this.quizForm = this.formBuilder.group(formControls);
  }

  onSubmit(): void {
    const answers = {};
    let correctAnswers = 0;
    this.quiz.questions.forEach((question) => {
      const selectedOption = this.quizForm.value[question.id];
      answers[question.id] = selectedOption;
      if (selectedOption === question.answer) {
        correctAnswers++;
      }
    });
    const score = (correctAnswers / this.quiz.questions.length) * 100;
    alert(`You got ${correctAnswers} out of ${this.quiz.questions.length
