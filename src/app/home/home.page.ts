import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // constructor(private data: DataService) { }
  ngOnInit() {
    console.log("ngoninith")
  }
  ionViewWillEnter(){
    console.log("ionViewWillEnterh")
  }
  ionViewDidEnter(){
    console.log("ionViewDidEnterh")
  }
  ionViewWillLeave(){
    console.log("ionViewWillLeaveh")
  }
  ionViewDidLeave(){
    console.log("ionViewDidLeaveh")
  }
  constructor() {  }

  items = [
    {
      link: "/cart",
      name: "Cart"
    },
    {
      link: "/accordion",
      name: "Accordion"
    },
    {
      link: "/action-sheet",
      name: "Action sheet"
    },
    {
      link: "/alert",
      name: "Alert"
    },
    {
      link: "/avatar",
      name: "Avatar"
    },
    {
      link: "/badge",
      name: "badge"
    },
    {
      link: "/breadcrumbs",
      name: "Breadcrumbs"
    },
    {
      link: "/button",
      name: "Button"
    },
    {
      link: "/card",
      name: "Card"
    },
    {
      link: "/check-box",
      name: "Check Box"
    },
    {
      link: "/chip",
      name: "Chip"
    },
    {
      link: "/content",
      name: "content"
    },
    {
      link: "/datetime",
      name: "Date & Time Picker"
    },
    {
      link: "/floatingactionbutton",
      name: "Floating Action Button"
    },
    {
      link: "/grid",
      name: "Grid"
    },
    {
      link: "/icons",
      name: "Icons"
    },
    {
      link: "/infinite-scroll",
      name: "Infinite Scroll"
    },
    {
      link: "/input",
      name: "Input"
    },
    {
      link: "/item",
      name: "Item"
    },
    {
      link: "/item-group",
      name: "Item Group"
    },
    {
      link: "/list",
      name: "List"
    },
    {
      link: "/loading",
      name: "Loading"
    },
    {
      link: "/menu",
      name: "Menu"
    },
    {
      link: "/modal",
      name: "Modal"
    },
    {
      link: "/navigation",
      name: "Navigation"
    },
    {
      link: "/note",
      name: "Note"
    },
    {
      link: "/picker",
      name: "Picker"
    },
    {
      link: "/popover",
      name: "Popover"
    },
    {
      link: "/progress-bar",
      name: "Progress Bar"
    },
    {
      link: "/radio",
      name: "Radio"
    },
    {
      link: "/range",
      name: "Range"
    },
    {
      link: "/refresher",
      name: "Refresher"
    },
    {
      link: "/reorder",
      name: "Reorder"
    },{
      link: "/searchbar",
      name: "Searchbar"
    },
    {
      link: "/segment",
      name: "Segment"
    },
    {
      link: "/select",
      name: "Select"
    },
    {
      link: "/skeleton-text",
      name: "Skeleton Text"
    },
    {
      link: "/slides",
      name: "Slides"
    },
    {
      link: "/spinner",
      name: "Spinner"
    },
    {
      link: "/tabs",
      name: "Tabs"
    },
    {
      link: "/text",
      name: "Text"
    },
    {
      link: "/thumbnail",
      name: "Thumbnail"
    },
    {
      link: "/toast",
      name: "Toast"
    },
    {
      link: "/toggle",
      name: "Toggle"
    },
    {
      link: "/toolbar",
      name: "Tollbar"
    }

  ]


 

}
