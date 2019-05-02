class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    this.render();
    this.$el.on('click', this.handleClick.bind(this)); //event listener is always going to invoke function style, so context must be passed in
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!")
    } else {
      this.$el.text("Unfollow!")
    }
  }

  handleClick(event) {
    event.preventDefault();
    
    $.ajax({
      method: (this.followState === "followed") ? 'POST' : 'DELETE',
      url: '/users/:id/follow',
    }).then((result) => {}, (error) => {})
  }
}

module.exports = FollowToggle;