var a1 = anime({
    targets: '#logo',
    scale: ['0.01','1'],
    rotate: ['0.2turn','1turn'],
    easing: 'easeOutElastic',
    elasticity:'100',
    duration: 3500,
})

var a3 = anime({
    targets: "#linelogo .a",
    stroke: '#fe8d07',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1200,
    delay: 0,
})

var a3 = anime({
    targets: "#linelogo .a1",
    stroke: '#fe8d07',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: 0,
})