import { Component } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent {
  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;

  constructor(private orderHistoryService: OrderHistoryService) {}

  ngOnInit() {
    this.handleOrderHistory();
  }
  handleOrderHistory() {
    //read the user email from browser storage
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);
    console.log(theEmail);
    //retrieve data from service
    this.orderHistoryService.getOrderHistory(theEmail).subscribe((data) => {
      this.orderHistoryList = data._embedded.orders;
      console.log(data);
      console.log(data._embedded.orders);
    });
  }
}
