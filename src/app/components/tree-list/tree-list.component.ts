import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tree-list",
  templateUrl: "./tree-list.component.html",
  styleUrls: ["./tree-list.component.css"],
})
export class TreeList implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("Iniciou");
  }
}
