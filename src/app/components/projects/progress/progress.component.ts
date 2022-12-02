import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progress : any[] = [
  ]

  totalCompleted :any = 0
  redeemedPoints = 0


  constructor(private msg : MessengerService) { }

  ngOnInit(): void {
    var progressList = JSON.parse(localStorage.getItem("progressList") || "[]");
    this.progress = progressList;



      
    
    // localStorage.setItem('progressList', JSON.stringify(this.progress));
    // progressList = JSON.parse(localStorage.getItem("progressList") || "[]");
    // console.log(progressList)
    // this.totalCompleted = 0
    this.progress.forEach((item)=>{
      
        this.totalCompleted += item.taskPoints
      
    })
    localStorage.setItem('totalCompleted', String(this.totalCompleted));

    this.totalCompleted = (localStorage.getItem('totalCompleted'|| 0));

    // console.log(this.totalCompleted);
    this.msg.getMsg().subscribe((task :any)=>{
      // console.log(task);
    console.log(progressList, this.progress);
    
          this.progress.push({
            taskId: task.id,
            taskName : task.task_name,
            taskPoints : task.points,
            state : "DONE"
    
          })
        
      
    
      localStorage.setItem('progressList', JSON.stringify(this.progress));
      progressList = JSON.parse(localStorage.getItem("progressList") || "[]");
      console.log(progressList)
      this.totalCompleted = 0
      this.progress.forEach((item)=>{
        
          this.totalCompleted += item.taskPoints
        
      })
      localStorage.setItem('totalCompleted', String(this.totalCompleted));
      this.totalCompleted = (localStorage.getItem('totalCompleted'|| 0));
      console.log(this.totalCompleted);
    });

    
  }

  redeemPoints(){
    this.redeemedPoints = this.totalCompleted;
    this.totalCompleted = 0
    localStorage.setItem('redeemedPoints', String(this.redeemedPoints));
  }

}
