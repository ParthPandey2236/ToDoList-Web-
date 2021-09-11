function sendrequest(){
    console.log("Clicked");
    var form1 = document.forms.senddata;
    var formData = new FormData(form1);
    var des = formData.get('Description');
    var select = $('#DropDown option:selected').val();
    var date = $('#calDrop').val();

    console.log(des,select,date);

    // $.ajax({
    //     url: '/add',
    //     data: { Description : des , Category : select , Date : date},
    //     method : 'POST',
    //     success : function(responce){
    //         print("Success");
    //     }
    // })
}

console.log("js file connected");

$('#Addition').on("click",sendrequest);