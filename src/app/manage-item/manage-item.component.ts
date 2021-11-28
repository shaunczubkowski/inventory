import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ItemService } from "../services/item.service";

@Component({
  selector: "app-manage-item",
  templateUrl: "./manage-item.component.html",
  styleUrls: ["./manage-item.component.css"],
})
export class ManageItemComponent implements OnInit {
  itemForm = new FormGroup({
    itemId: new FormControl(""),
    companyPartId: new FormControl(""),
    companyName: new FormControl(""),
    itemDescription: new FormControl(""),
    quantity: new FormControl(""),
    cost: new FormControl(""),
    isSurplus: new FormControl(""),
    // ebayQauntity: new FormControl(""),
    // ebayPrice: new FormControl(""),
    // ebayListingNumber: new FormControl(""),
    // reorder: new FormControl(""), // boolean
    // Discontinued
  });

  constructor(private itemService: ItemService) {}

  ngOnInit() {}

  onSubmit() {
    const item = this.itemForm.value;
    item.lastModifiedDate = new Date();
    this.itemService.addItem(item);
  }

  onReset() {
    this.itemForm.reset();
  }
}
