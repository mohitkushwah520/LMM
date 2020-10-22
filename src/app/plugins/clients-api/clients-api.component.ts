import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-clients-api',
  templateUrl: './clients-api.component.html',
  styleUrls: ['./clients-api.component.css']
})
export class ClientsAPIComponent implements OnInit {

  constructor(private render : Renderer2) { }

  public list = [1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {

    document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

//  if ("IntersectionObserver" in window) {
//   let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//     console.log(entries)
//   })
//  }else{
//    console.log('hii')
//  }
// console.log(lazyImages.src)
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          console.log(lazyImage)
          // console.log(this.render.setStyle(lazyImages ,'width','500px'))
          // console.log(lazyImage)
          // lazyImage.src = lazyImage.getAttribute('');
          // lazyImage.srcset = lazyImage.dataset.srcset;
          // lazyImage.classList.remove("lazy");
          // lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});
  }

}
