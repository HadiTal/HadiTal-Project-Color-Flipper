document.querySelector("body").style.backgroundColor = "#F1f5f8";
document.querySelector(".color-hex").textContent = "#F1f5f8";

const changeColor = document
    .getElementById("change-color")
    .addEventListener("click", function() {
        const colorArray = [];
        let backgroundColor = "#";

        //genrate random number color

        for (let i = 0; i <= 5; i++) {
            let randomColor = Math.floor(Math.random() * 15 + 0);

            switch (randomColor) {
                case 9:
                    {
                        randomColor = "A";
                        break;
                    }
                case 10:
                    {
                        randomColor = "B";
                        break;
                    }
                case 11:
                    {
                        randomColor = "C";
                        break;
                    }
                case 12:
                    {
                        randomColor = "D";
                        break;
                    }
                case 13:
                    {
                        randomColor = "E";
                        break;
                    }
                case 14:
                    {
                        randomColor = "F";
                        break;
                    }
                case 14:
                    {
                        randomColor = "A";
                        break;
                    }
            }

            console.log(randomColor);

            if (!colorArray.includes(randomColor)) {
                colorArray.push(randomColor);
            } else {
                i--;
            }
        }

        colorArray.forEach((element) => {
            backgroundColor += element;
        });

        //set color in tag color-hex and set color tag body

        document.querySelector(".color-hex").textContent = backgroundColor;

        document.querySelector("body").style.backgroundColor = backgroundColor;
    });