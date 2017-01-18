var A_ARAI = A_ARAI || {};
A_ARAI.SAMPLE = {};


A_ARAI.SAMPLE.TABCHANGE = {

	init: function() {
		this.setParameters();
		this.bindEvent();
	},
	setParameters : function(){
		this.trigger = $('.tab-selector').find('li');
		this.$contents = $('.tab-container').find('li');
	},
	bindEvent: function() {
		var _self = this;
		this.trigger.on('click', function(e){
			e.preventDefault();
			_self.changeContents($(this));
		});
	},
	changeContents: function($target) {
		var $targetContents = $target.find('a').attr('href');

		this.trigger.removeClass('selected');
		$target.addClass('selected');
		this.$contents.css('display','none');
		$($targetContents).css('display','block');
	}
};

$(window).on('load', function(){
	A_ARAI.SAMPLE.TABCHANGE.init();
});