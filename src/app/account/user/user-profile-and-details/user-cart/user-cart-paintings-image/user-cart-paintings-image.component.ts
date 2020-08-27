import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/account/services/user.service';
import { Paintings } from 'src/app/account/services/model/paintings.model';

@Component({
  selector: 'app-user-cart-paintings-image',
  templateUrl: './user-cart-paintings-image.component.html',
  styleUrls: ['./user-cart-paintings-image.component.css']
})
export class UserCartPaintingsImageComponent implements OnInit {

  @Input()
  paintingsid:any;

  paintings:Paintings;

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getPaintingsById(this.paintingsid).subscribe(
      (Paintings) => this.paintings = Paintings
    );
  }

}
