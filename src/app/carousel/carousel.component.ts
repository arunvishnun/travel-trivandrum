import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  title = 'Carousel';

  getCarousels() {
      return [
      {
          imageUrl: "http://lorempixel.com/100/100/people?1",
          title: "Festivals",
          description: "Best places you should see. This land of diversity is rich in heritage and has numerous festivals celebrations which depict vibrant colours, have striking fragrances, and involve heart touching music, old norms, and traditions."
      },
      {
          imageUrl: "http://lorempixel.com/100/100/people?2",
          author: "AngularJS News",
          handle: "@angularjs_news",
          body: "Right Relevance : Influencers, Articles and Conversations ",
          totalLikes: 5,
          iLike: true
      },
      {
          imageUrl: "http://lorempixel.com/100/100/people?3",
          author: "UX & Bootstrap",
          handle: "@3rdwave",
          body: "10 Reasons Why Web Projects Fail ",
          totalLikes: 1,
          iLike: true
      }];
  }
}
