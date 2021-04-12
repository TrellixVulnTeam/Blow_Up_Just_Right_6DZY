# Blow_Up_Just_Right


## Controls

Blow Up Just Right is a javascript game made using canvas. The controls are simply clicking, holding, and releasing in any position on the screen. This will move the ball to the position where you click, inflate the ball as you hold the click, and let the ball drop when you release the click. 

## Gameplay
The goal is to drop the ball between the two poles that flash at this bottom of the screen, like in the gif below. The larger the ball you managed to get between the posts, the more points you are awarded for that drop. In the top left corner you can see the score award to you last drop (max score is 100, representing a rounded up percentage of the space between the posts you were able to take up with the ball), as well as the total score you have accumulated. 

![ezgif com-gif-maker](https://user-images.githubusercontent.com/62472030/103181370-64d1b700-486e-11eb-8275-6b6fc3aa140c.gif)

Hitting pole will be rewarded no points and will display a message in the last drop line.

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/62472030/103181373-6f8c4c00-486e-11eb-987e-88c1c53e91fe.gif)

Simalarly, dropping the ball outside of the space between the posts will be rewarded no points and display a message in the last drop line.

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/62472030/103181375-74e99680-486e-11eb-8a24-f9d8d19ac9d3.gif)

Pressing the spacebar will start a timed mode which will last 30 seconds. The goal is to score as many points as you can within this 30 second time frame. At the end of the time frame the ball will automatically be dropped, and a message will flash on the screen indicating if you have beaten your highest score since visiting the page, where it will remain displayed in the top left corner.

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/62472030/103181384-7adf7780-486e-11eb-98e9-5750d007f1e8.gif)

## New Posts Code

For a greater variety of challenge I decided to make the goal posts appear at a random position horizontally, as well a random distance between them after each drop. I start by assigning the first pole a random number. This number is always less than 74% of the inner width of the screen to leave distance for the the second pole to fit in the window. The second pole references the random value from the first pole and adds 15% of the inner width, which represent the minimum distance between two poles. Then an additional value between 0 - 12% of the inner width is added create varying distances between the two poles.

Since these "poles" are actually just lines, I added two additional lines of the same height to create collision on both corners of the poles. This was achieved by simply referencing the first and second poles and creating a difference of 20 pixels, the thickness of the pole image in the game.
```Javascript

Post.prototype.randomX = function randomX() {
    return ((innerWidth * .7 * Math.random()) + (innerWidth * .04))
};


Post.prototype.changePosts = function changePosts() {
    const first_x = this.randomX();
    let second_x;
    let third_x;
    let fourth_x;
    let that = this;

    second_x = first_x + ((innerWidth * .12 * Math.random()) + innerWidth * .15)
    third_x = first_x - 20;
    fourth_x = second_x + 20;

    this.game.objects[2].pos[0] = first_x;
    this.game.objects[3].pos[0] = second_x;
    this.game.objects[4].pos[0] = third_x;
    this.game.objects[5].pos[0] = fourth_x;

    this.game.objects[2].show = true;
    this.game.objects[3].show = true;


    setTimeout(function () {
        that.game.objects[2].show = false;
        that.game.objects[3].show = false;
    }, 1000) 

    
};
```

## Floor Collision Code

```Javascript
Floor.prototype.collideWith = function collideWith(otherObject) {



    let lower_pole_position = this.game.objects[2].pos[0];
    let higher_pole_position = this.game.objects[3].pos[0];
    let ball_diameter = this.game.objects[0].radius * 2;
    let that = this;

    let total = higher_pole_position - lower_pole_position
    let score = 100 - Math.floor((((total - ball_diameter)/total) * 100))
    score = score.toString();

    if (otherObject.moving == true) {
        if (otherObject.pos[0] < lower_pole_position || otherObject.pos[0] > higher_pole_position) {
            oneScoreEl.innerHTML = `Missed`
            that.game.objects[2].changePosts();
            setTimeout(function () {
                that.game.objects[2].show = false;
                that.game.objects[3].show = false;
            }, 1000)
            that.game.onDrop = false;
        } else {
            this.score += parseInt(score);
            this.one_score = score;
            scoreEl.innerHTML = `${this.score}`
            oneScoreEl.innerHTML = `${this.one_score}`
            that.game.objects[2].changePosts();
            setTimeout(function () {
                that.game.objects[2].show = false;
                that.game.objects[3].show = false;
            }, 1000)
            that.game.onDrop = false;
        }
    }

    otherObject.moving = false;
    otherObject.vel = [0, 0];
    otherObject.pos = [innerWidth / 2, innerHeight * .18];
    otherObject.radius = 10;

    this.game.objects[2].show = true;
    this.game.objects[3].show = true;
};
```
