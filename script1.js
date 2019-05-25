
function add(name, email, text) {
    $.post('/', {
            name: name,
            email: email,
            text: text
        },
      (data) => {
          console.log(data)
        //   done(data)
      })
}


$(() => {
    
    $('#submit').click(() => {
        let name = $("#name-1").val()    
        let email = $("#email-i").val()
        let text = $("#message-i").val()
        
        console.log("btn was clicked")
        // console.log( email +" "+ name+ " " + text)
        add(name,email,text)

    })
})