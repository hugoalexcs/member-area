import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-discussion',
  templateUrl: './course-discussion.component.html',
  styleUrls: ['./course-discussion.component.css']
})
export class CourseDiscussionComponent implements OnInit {

  discussions = [
    {
      id: 1,
      title: 'Discussão sobre a primeira aula',
      author: 'Fulano de Tal',
      date: '2022-01-01 10:00:00',
      messages: [
        {
          author: 'Fulano de Tal',
          date: '2022-01-01 10:00:00',
          message: 'A primeira aula foi muito interessante, aprendi bastante.'
        },
        {
          author: 'Ciclano de Tal',
          date: '2022-01-01 11:00:00',
          message: 'Concordo com você Fulano, estou ansioso para a próxima aula.'
        },
        {
          author: 'Beltrano de Tal',
          date: '2022-01-01 12:00:00',
          message: 'Também gostei muito da primeira aula, acho que vamos aprender bastante.'
        }
      ]
    },
    {
      id: 2,
      title: 'Discussão sobre a segunda aula',
      author: 'Beltrano de Tal',
      date: '2022-01-02 10:00:00',
      messages: [
        {
          author: 'Beltrano de Tal',
          date: '2022-01-02 10:00:00',
          message: 'A segunda aula foi ainda melhor que a primeira, estou adorando o curso.'
        },
        {
          author: 'Fulano de Tal',
          date: '2022-01-02 11:00:00',
          message: 'Concordo com você Beltrano, estou aprendendo muito.'
        },
        {
          author: 'Ciclano de Tal',
          date: '2022-01-02 12:00:00',
          message: 'Também gostei bastante da segunda aula, acho que esse curso vai ser muito proveitoso.'
        }
      ]
    }
  ];

  selectedDiscussion: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectDiscussion(discussion: any): void {
    this.selectedDiscussion = discussion;
  }

  addMessage(message: string): void {
    if (message.trim() !== '') {
      this.selectedDiscussion.messages.push({
        author: 'Você',
        date: new Date().toISOString(),
        message: message
      });
    }
  }

  addDiscussion(title: string): void {
    if (title.trim() !== '') {
      this.discussions.push({
        id: this.discussions.length + 1,
        title: title,
        author: 'Você',
        date: new Date().toISOString(),
        messages: []
      });
      this.selectedDiscussion = this.discussions[this.discussions.length - 1];
    }
  }

}
