Bridge.Preloader = function(game){
    Bridge.GAME_WIDTH = 1024;
    Bridge.GAME_HEIGHT = 696;
};
Bridge.Preloader.prototype = {
    preload: function() {
        this.stage.backgroundColor = '#B4D9E7';
        this.preloadBar = this.add.sprite((Bridge.GAME_WIDTH-311)/2,(Bridge.GAME_HEIGHT-27)/2, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar); //加载进度条
  
        this.load.image('background', 'img/background.jpg');
        this.load.image('water', 'img/water.png');
        this.load.image('cloud', 'img/cloud.png'); //首页的鸡
        this.load.image('title', 'img/title.png');
        this.load.image('game-over', 'img/gameover.png');
        this.load.image('score-bg', 'img/score-bg.png');
		this.load.image('brick','img/brick.png');
		this.load.image('board', 'img/board.png'); //板子
		
		this.load.audio('bgm','music/bgm.mp3');
		this.load.audio('fallwater','music/fallwater.wav');
		
		//需要动画的放这里！
		this.load.spritesheet('button-restart','img/button-restart.png', 363, 131);
        this.load.spritesheet('button-start','img/button-start.png', 401, 143);
		this.load.spritesheet('chick','img/chick.png',186,152);
    },
    create: function() {
        this.state.start('MainMenu');
    }
};