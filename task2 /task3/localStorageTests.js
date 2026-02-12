
    window.onload = function () {

        // 获取所有按钮（假设页面里有 button）
        let theButtons = document.getElementsByTagName("button");

        // 给每个按钮加 click 事件
        for (let i = 0; i < theButtons.length; i++) {
            theButtons[i].addEventListener("click", saveStateHandler);
        }

        // 页面加载时恢复保存的数据
        restoreState();

    };


    // 保存数据的函数
    function saveStateHandler(event) {

        console.log(this.parentElement);

        // 获取按钮的 id
        let buttonID = this.parentElement.id;

        // 找到对应的 input
        let input = this.parentElement.querySelector("input");

        let inputValue = input.value;

        console.log(inputValue);

        // 如果输入框不为空就存入 localStorage
        if (inputValue !== "") {

            localStorage.setItem(buttonID, inputValue);

            // 清空输入框
            input.value = "";

        }

    }


    // 恢复保存的数据
    function restoreState() {

        // 遍历 localStorage
        for (let i = 0; i < localStorage.length; i++) {

            let key = localStorage.key(i);
            let value = localStorage.getItem(key);

            // 找到对应的元素
            let container = document.getElementById(key);

            if (container) {

                let input = container.querySelector("input");
                input.value = value;

            }

        }

    }