import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TreeList } from "./tree-list/tree-list.component";
import { EditItem } from "./edit-item/edit-item.component";

@NgModule({
  declarations: [TreeList, EditItem],
  imports: [CommonModule],
})
export class ComponentsModule {}
