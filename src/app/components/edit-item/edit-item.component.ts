import { Component, OnInit } from "@angular/core";

@Component({
  selector: "edit-item",
  templateUrl: "./edit-item.component.html",
  styleUrls: ["./edit-item.component.css"],
})
export class EditItem implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("Iniciou");
  }
}
