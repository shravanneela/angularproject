
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Time } from '../time';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-homepage',
  imports: [CommonModule, FormsModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

  goals = [
    {
      id: 1,
      text: '',
      completed: false,
    }
  ];
  newGoal = '';
  currentTime = '';
  currentLocation = '';
  constructor(private router: Router, private time: Time) { }

  ngOnInit() {
    this.time.getCurrentTime().subscribe((data: any) => {
      this.currentTime = this.getTimeInTwelveHourFormat(data.time);
  
    });
      this.time.getcurrentLocation().subscribe((res: any) => {
        this.currentLocation = res.city ;
      });
  }
  addGoal() {
    console.log('Add goal clicked');
    console.log('New goal entered by the user:', this.newGoal);
    console.log(this.goals[this.goals.length - 1]?.id);
    this.goals.push({
      id: this.goals[this.goals.length - 1]?.id + 1 || 1,
      text: this.newGoal,
      completed: false,
    });
    this.newGoal = '';

  }
  deleteGoal(id: number) {
    console.log('Delete Goal clicked for id:', id);
    this.goals = this.goals.filter((goal) => goal.id !== id);
  }
  logout() {
    console.log('Logout clicked');
    this.router.navigate(['/signin']);
  }

  getTimeInTwelveHourFormat(time: string): string {
    const [hourStr, minutes] = time.split(':');
    let hour=parseInt(hourStr, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour=hour%12 || 12; // Convert to 12-hour format
    return `${hour}:${minutes} ${ampm}`;
  }

}
