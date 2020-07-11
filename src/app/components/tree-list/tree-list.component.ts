import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ItensService } from "../services/itens.service";

@Component({
  selector: "tree-list",
  templateUrl: "./tree-list.component.html",
  styleUrls: ["./tree-list.component.css"],
})
export class TreeList implements OnInit {
  private itens = [];

  constructor(private router: Router) {}

  editItem() {
    this.router.navigate(["edititem"]);
  }

  ngOnInit() {
    const channels = localStorage.getItem("channels");
    this.itens = JSON.parse(channels);
  }
}
