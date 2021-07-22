import { Component, OnInit, } from '@angular/core';
import {ApiserviceService} from '../_services/-apiservice.service'

@Component({
  selector: 'app-searchitem',
  templateUrl: './searchitem.component.html',
  styleUrls: ['./searchitem.component.scss']
})
export class SearchitemComponent implements OnInit {

  searhItem:string = "";
  result=[];
  constructor(private _api: ApiserviceService) { }

  ngOnInit(): void {
  }

  onSearch(searhItem:any){
    searhItem.preventDefault();
    // this.submitted.emit(this.searhItem)
    this.getData(searhItem.target.value)
   
  }

  getData(data:string){
     this._api.searchItem(data).subscribe((res:any) => {
      this.result = res.query.search;
      console.log(this.result)
    })
  }
}
