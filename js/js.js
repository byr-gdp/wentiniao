var sectionHeight = document.getElementById('section1').clientHeight;
var content1 = document.getElementById('content1'),
	content2 = document.getElementById('content2'),
	content3 = document.getElementById('content3'),
	content4 = document.getElementById('content4');
window.addEventListener('scroll',scrollHandler);

function scrollHandler(e){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop > 0 && scrollTop < sectionHeight){
		// title1.classList.add('title-anim');
		// content1.classList.add('content-anim');
	}else if(scrollTop >= sectionHeight && scrollTop < sectionHeight*2){
		// title2.classList.add('title-anim');
		// content2.classList.add('content-anim');
		content1.classList.add('content1-anim');
		content2.classList.add('content2-anim');
		content3.classList.add('content3-anim');
		content4.classList.add('content4-anim');
	}else if(scrollTop >= sectionHeight*2 && scrollTop < sectionHeight*3){
		// title3.classList.add('title-anim2');
		// content3.classList.add('content-anim');
	}
}
