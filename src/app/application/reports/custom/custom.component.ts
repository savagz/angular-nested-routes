import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Swal.fire({
      title: "Level 3",
      text: "Custom Component !",
      icon: "success",
    });
  }

}
