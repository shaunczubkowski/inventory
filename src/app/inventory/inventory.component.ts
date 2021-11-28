import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "../models/item";
import { ItemService } from "../services/item.service";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.css"],
})
export class InventoryComponent implements OnInit {
  items$: Observable<Item[]> | undefined;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items$ = this.itemService.getItems();
  }

  deleteItem(itemId: string): void {
    this.itemService.deleteItem(itemId);
  }
}
