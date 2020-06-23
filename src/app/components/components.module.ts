import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TreeList } from "./tree-list/tree-list.component";
import { EditItem } from "./edit-item/edit-item.component";

import { ItensService } from "./services/itens.service";

@NgModule({
  declarations: [TreeList, EditItem],
  imports: [CommonModule],
  providers: [ItensService],
})
export class ComponentsModule {}
