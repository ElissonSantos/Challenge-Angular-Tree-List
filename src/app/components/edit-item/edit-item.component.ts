import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "edit-item",
  templateUrl: "./edit-item.component.html",
  styleUrls: ["./edit-item.component.css"],
})
export class EditItem implements OnInit {
  private title = "New Item";

  constructor(private router: Router) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(["home"]);
  }
}
