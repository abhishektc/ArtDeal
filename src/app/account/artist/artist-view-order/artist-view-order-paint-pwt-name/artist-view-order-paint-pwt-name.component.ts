import { Pwt } from 'src/app/account/services/model/portraitwallteach.model';
import { Paintings } from 'src/app/account/services/model/paintings.model';
import { ArtistService } from 'src/app/account/services/artist.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-view-order-paint-pwt-name',
  templateUrl: './artist-view-order-paint-pwt-name.component.html',
  styleUrls: ['./artist-view-order-paint-pwt-name.component.css']
})
export class ArtistViewOrderPaintPwtNameComponent implements OnInit {


  @Input()
  paintingsid:any;

  @Input()
  pwtid:any;

  paintings:Paintings;

  pwt:Pwt;

  constructor(private artistService:ArtistService) { }

  ngOnInit(): void {
    this.artistService.getPaintingsById(this.paintingsid).subscribe(
      (Paintings) => this.paintings = Paintings
    );

    this.artistService.getPwtById(this.pwtid).subscribe(
      (Pwt) => this.pwt = Pwt
    );
  }

}
