import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { TreeList } from "./components/tree-list/tree-list.component";
import { EditItem } from "./components/edit-item/edit-item.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: TreeList },
  { path: "edititem", component: EditItem },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// import { NgModule } from "@angular/core";
// import { Routes, RouterModule } from "@angular/router";

// import { TreeList } from "./components/tree-list/tree-list.component";
// import { EditItem } from "./components/edit-item/edit-item.component";

// const routes: Routes = [
//   {
//     path: "",
//     redirectTo: "home",
//     pathMatch: "full",
//   },
//   {
//     path: "home",
//     component: TreeList,
//   },
//   {
//     path: "edititem",
//     component: EditItem,
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
