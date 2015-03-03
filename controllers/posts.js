Bustle.PostsController = Ember.Controller.extend({

  currentPost: 0,
  imageTitle: "",

  model: function() {
    return posts;
  },

  actions: {
    carouselNext: function() {
      this.set('currentPost', (this.currentPost + 1));
      if (this.currentPost == 5) {
        this.set('currentPost', 0);
      }
      this.set('imageTitle', posts[this.currentPost].image)
    },

    carouselPrev: function() {
      if (this.currentPost == 0) {
        this.set('currentPost', 5);
      }
      this.set('currentPost', (this.currentPost - 1));
      this.set('imageTitle', posts[this.currentPost].image)
    },
  }
});
