import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Item } from "../models/item";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  items: Item[] = [
    {
      itemId: "11111",
      companyPartId: "11111A",
      companyName: "Company A",
      cost: 0.6,
      isSurplus: "NO",
      itemDescription: "Item 1",
      lastModifiedDate: new Date(),
      quantity: 100,
      discontinuedDate: new Date(),
      reorderedDate: new Date(),
    },
    {
      itemId: "22222",
      companyPartId: "11111B",
      companyName: "Company B",
      cost: 1.29,
      isSurplus: "YES",
      itemDescription: "Item 2",
      lastModifiedDate: new Date(),
      quantity: 52,
      discontinuedDate: new Date(),
      reorderedDate: new Date(),
    },
  ];

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    // return this.http.get<Item[]>("/api/inventory");

    return of(this.items);
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  deleteItem(itemId: string): void {
    console.log(this.items.findIndex((value) => value.itemId === itemId));
  }
}
