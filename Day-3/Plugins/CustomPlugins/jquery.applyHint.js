$.fn.extend({
		applyHint : function(){
			this.bind({
				focus : function(){
					var $this = $(this),
						hintText = $this.attr('data-hintText');
					if ($this.val() === hintText){
						$this.val('').removeClass('hint');
					}
				},
				blur : function(){
					var $this = $(this),
						hintText = $this.attr('data-hintText');
					if ($this.val() === ''){
						$this.val(hintText).addClass("hint");
					}
				}
			}).trigger('blur');
		}
	});