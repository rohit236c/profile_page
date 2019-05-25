$(() => {
    let count = 0;
    let count2 = 0;
    let count3 = 0;
    let num;
    let num2;
    let num3;
    $('.home2').hide()
    $('.resume1').hide()
    $('.contact-1').hide()

    $('.home1').click(() => {
        count++;
        count2 = 0;
        count3 = 0;
        num = count % 2
        // console.log(num)
        if (num == 0) {
            $('.home2').hide()
        } else {
            $('.home2').show()
        }
        $('.resume1').hide()
        $('.contact-1').hide()
    })
    $('.resume-btn').click(() => {
        count = 0;
        count3 = 0;
        count2++;
        num2 = count2 % 2
        if (num2 == 0 | count2 == 0) {
            $('.resume1').hide()
            // $('.home2').hide()
        } else {
            $('.resume1').show()
        }
        console.log(num2)

        $('.home2').hide()
        $('.contact-1').hide()

    })
    $('.contact-btn').click(() => {
        count3++;
        count = 0;
        count2 = 0;
        num3 = count3 % 2
        if (num3 == 0 | count3 == 0) {
            $('.contact-1').hide()
            // $('.home2').hide()
        } else {
            $('.contact-1').show()
        }
        console.log(num2)

        $('.home2').hide()
        $('.resume1').hide()

    })
})

//$(this).find('.hider').toggle();