import { Component } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  slectedtab: any = "";
  indexSel = 0;
  selTabVal = 'Basic Data';
  list = [{ name: 'Basic Data', selected: false }, { name: 'Assets', selected: false }, { name: 'Technical Info', selected: false }, { name: 'Marketing Info', selected: false }, { name: 'Sales Info', selected: false }, { name: 'Design Info', selected: false }];

  perform(item: any, i: number) {
    if (this.slectedtab !== "") {
      this.list[this.indexSel].selected = false
      this.indexSel = i;
      this.slectedtab = item
      this.list[i].selected = true
      this.selTabVal = this.list[i].name;
    } else {
      console.log(this.indexSel)
      this.list[this.indexSel].selected = false
      this.slectedtab = item
      this.list[i].selected = true
      console.log(this.list[i].name)
      this.selTabVal = this.list[i].name;
    }

    console.log(this.list)
  }
}
