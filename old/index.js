
$(document).ready(() => {
  let name
	$(".art-page-single").click(e => {
	 // let a = e.target.childNode[1].text()
    let albumName = e.target.parentNode.children[1].innerText
    console.log(albumName)
    $.post("http://localhost:3001/test", { albumName: albumName }, (data, textStatus) => {
        console.log("data")
        $("#exampleModalLabel").text("upp")
        name = data.name
      }
    )
    // .done(() => {
//       console.log(name)
// 	    $("#exampleModalLabel").text(name)
//     })
    
    
	 //$("#exampleModalLabel").text("...")
	  setTimeout(() => {
    console.log(name)
	    $(".alb-name-span").text("Sanqa Souq")
	  }, 2000)
	});
});
