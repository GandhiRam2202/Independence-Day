
const div = document.createElement('div');
div.setAttribute('id','task');
div.setAttribute('class','task');
document.body.append(div);

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("task").innerHTML = "10";
    setTimeout(function () {
      document.getElementById("task").innerText = "9";
      setTimeout(function () {
        document.getElementById("task").innerText = "8";
        setTimeout(function () {
          document.getElementById("task").innerText = "7";
          setTimeout(function () {
            document.getElementById("task").innerText = "6";
            setTimeout(function () {
              document.getElementById("task").innerText = "5";
              setTimeout(function () {
                document.getElementById("task").innerText = "4";
                setTimeout(function () {
                  document.getElementById("task").innerText = "3";
                  setTimeout(function () {
                    document.getElementById("task").innerText = "2";
                    setTimeout(function () {
                      document.getElementById("task").innerText = "1";
                      setTimeout(function () {
                        document.getElementById("task").innerHTML =
                          "<div class='happy'>HAPPY</div><div class='ind'>INDEPENDENCE</div><div class='day'>DAY</div>";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });