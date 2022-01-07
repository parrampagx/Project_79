    var images = ["https://images-na.ssl-images-amazon.com/images/I/61zTGIEvQoL.jpg","https://us.123rf.com/450wm/f1digitals/f1digitals2012/f1digitals201200388/160567755-vector-cartoon-illustration-punjabi-kid-is-happy-isolated-on-white-background-.jpg?ver=6","https://image.shutterstock.com/image-vector/colorful-indian-punjabi-sardar-cartoon-260nw-551990824.jpg","https://thumbs.dreamstime.com/z/basic-rgb-137007229.jpg","https://thumbs.dreamstime.com/b/basic-rgb-144470438.jpg","https://cdn.w600.comps.canstockphoto.com/popular-winter-punjabi-folk-festival-illustration_csp64403126.jpg"];
    var names = ["Family Book","Ranbir Singh","Diljeet Singh","Rocky Singh","Alia Singh","Soni Singh"];
    var i = 0;
    function update()
    {
        i++;
        var numbermember = 5
        if(i > numbermember)
        {i = 0;}
        var updatedimg = images[i];
        var updatedname = names[i];
        document.getElementById("familymemimg").src = updatedimg
        document.getElementById("familymemname").src = updatedname
    }


  