import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ItensService } from "../services/itens.service";

import { Item } from "src/models/item.model";

@Component({
  selector: "edit-item",
  templateUrl: "./edit-item.component.html",
  styleUrls: ["./edit-item.component.css"],
})
export class EditItem implements OnInit {
  private title = "New Item";

  private itens: Item[];

  private newItem: Item;

  private name: string;
  private parent: number;
  private description: string;

  constructor(private router: Router, private itensService: ItensService) {}

  ngOnInit() {
    const channels = localStorage.getItem("channels");
    this.itens = JSON.parse(channels);
  }

  save() {
    this.newItem = {
      status: "Active",
      users: 0,
      parent: this.parent,
      percent: 49,
      id: 4,
      name: this.name,
      description: this.description,
    };

    if (this.name && this.parent) {
      this.itens.push();

      // console.log(this.channels)

      // localStorage.setItem("channels", this.itens);
    }
  }

  cancel() {
    this.router.navigate(["home"]);
  }
}
