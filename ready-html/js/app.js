gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	// gsap.fromTo('.hero-section', { opacity: 1 }, {
	// 	opacity: 0,
	// 	scrollTrigger: {
	// 		trigger: '.hero-section',
	// 		start: 'center',
	// 		end: '990',
	// 		scrub: true
	// 	}
	// })

	let itemsL = gsap.utils.toArray('.gallery_box')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -150 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-950',
				end: '-500',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery_box .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: 150 }, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: 'top',
				scrub: true
			}
		})
	})

}
